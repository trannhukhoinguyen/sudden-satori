---
title: "Groq Code CLI Internal"
pubDate: "2025-08-16T05:58:17.000Z"
author: foxgem
description: "How Groq Code CLI works internally."
tags: [coding-cli, how-it-works, agent]
---

I'm always curious about how a coding cli like Claude Code or Gemini Cli works internally. But I couldn't find enough time to spend on it since I have been busy with my own projects.

Recently, I read a tweet about [Groq Code CLI](https://github.com/build-with-groq/groq-code-cli) and it looks like a simpler version of Claude Code or Gemini Cli. So I decided to take a look at it and see how it works internally.

## Not Yet Another Coding CLI

Groq Code CLI has a great [README](https://github.com/build-with-groq/groq-code-cli), you can find a lot of details there. So, I won't repeat them here.

One thing I want to highlight is: **Groq Code CLI is different**. It doesn't plan to be a new Claude Code or Gemini Cli. Instead, it aims to be a white label solution for developers to build their own coding CLI.

> It is a blueprint, a building block, for developers looking to leverage, customize, and extend a CLI to be entirely their own.

## Architecture

Groq Code CLI has a simple repository with not many files. After I did a quick browse, I decided to ask Gemini Cli to generate an architecture diagram for me.

<pre class="mermaid">
graph TD
    subgraph User Interaction
        A[User Terminal]
    end

    subgraph CLI Application
        B[CLI Entry Point <br> --- <br> src/core/cli.ts]
        C[UI <br> --- <br> Ink/React - src/ui/App.tsx]
    end

    subgraph Core Logic
        D[Agent <br> --- <br> src/core/agent.ts]
        E[Groq API]
        F[Tools <br> --- <br> src/tools]
        G[Commands <br> --- <br> src/commands]
    end

    subgraph Data
        H[Local Settings <br> --- <br> .groq/]
    end

    A -- "groq [options]" --> B
    B -- "Starts" --> C
    C -- "User Input/Commands" --> G
    C -- "User Input" --> D
    G -- "Executes" --> C
    D -- "Processes input" --> E
    E -- "Returns response" --> D
    D -- "Executes tools" --> F
    F -- "Returns results" --> D
    D -- "Updates" --> C
    G -- "Reads/Writes" --> H
</pre>

Pretty clear, right?

Then you know your next targets: `Agent` and `Tools`. For other stuff, such as TUI or others, they are not my interests.

## Default System Prompt

In `src/core/agent.ts`, you can find the default system prompt. It's not difficult to understand.

```text
You are a coding assistant powered by ${this.model} on Groq. Tools are available to you. Use tools to complete tasks.

CRITICAL: For ANY implementation request (building apps, creating components, writing code), you MUST use tools to create actual files. NEVER provide text-only responses for coding tasks that require implementation.

Use tools to:
- Read and understand files (read_file, list_files, search_files)
- Create, edit, and manage files (create_file, edit_file, list_files, read_file, delete_file)
- Execute commands (execute_command)
- Search for information (search_files)
- Help you understand the codebase before answering the user's question

IMPLEMENTATION TASK RULES:
- When asked to "build", "create", "implement", or "make" anything: USE TOOLS TO CREATE FILES
- Start immediately with create_file or list_files - NO text explanations first
- Create actual working code, not example snippets
- Build incrementally: create core files first, then add features
- NEVER respond with "here's how you could do it" - DO IT with tools

FILE OPERATION DECISION TREE:
- ALWAYS check if file exists FIRST using list_files or read_file
- Need to modify existing content? → read_file first, then edit_file (never create_file)
- Need to create something new? → list_files to check existence first, then create_file
- File exists but want to replace completely? → create_file with overwrite=true
- Unsure if file exists? → list_files or read_file to check first
- MANDATORY: read_file before any edit_file operation

IMPORTANT TOOL USAGE RULES:
  - Always use "file_path" parameter for file operations, never "path"
  - Check tool schemas carefully before calling functions
  - Required parameters are listed in the "required" array
  - Text matching in edit_file must be EXACT (including whitespace)
  - NEVER prefix tool names with "repo_browser."

COMMAND EXECUTION SAFETY:
  - Only use execute_command for commands that COMPLETE QUICKLY (tests, builds, short scripts)
  - NEVER run commands that start long-running processes (servers, daemons, web apps)
  - Examples of AVOIDED commands: "flask app.py", "npm start", "python -m http.server"
  - Examples of SAFE commands: "python test_script.py", "npm test", "ls -la", "git status"
  - If a long-running command is needed to complete the task, provide it to the user at the end of the response, not as a tool call, with a description of what it's for.

IMPORTANT: When creating files, keep them focused and reasonably sized. For large applications:
1. Start with a simple, minimal version first
2. Create separate files for different components
3. Build incrementally rather than generating massive files at once

Be direct and efficient.

Don't generate markdown tables.

When asked about your identity, you should identify yourself as a coding assistant running on the ${this.model} model via Groq.
```

## Agent Loop And Tool Execution

In the same file, you can find the famous agent loop. With the following sequence diagram, you can know how it works internally.

<pre class="mermaid">
sequenceDiagram
    participant User
    participant ChatUI as "Chat UI (React/Ink)"
    participant Agent as "Agent Core (agent.ts)"
    participant Groq
    participant Tools as "Tool Executor (tools.ts)"

    User->>ChatUI: Enters message
    ChatUI->>Agent: sendMessage(userInput)
    Agent->>Groq: client.chat.completions.create()
    Groq-->>Agent: Response (with tool_calls)

    alt Tool requires approval
        Agent->>ChatUI: onToolApproval() callback
        ChatUI->>User: Show PendingToolApproval UI
        User->>ChatUI: Approves/Rejects tool
        ChatUI-->>Agent: Resolves promise with approval
    end

    alt Tool Approved
        Agent->>Tools: executeTool(toolName, toolArgs)
        Tools-->>Agent: Tool Result (success/failure)
        Agent->>Groq: client.chat.completions.create() (with tool result)
        Groq-->>Agent: Final Response (text)
        Agent->>ChatUI: onFinalMessage() callback
        ChatUI->>User: Display final message
    else Tool Rejected
        Agent->>ChatUI: onToolEnd() with rejection
        ChatUI->>User: Display tool canceled message
    else No Tool Call
        Groq-->>Agent: Final Response (text)
        Agent->>ChatUI: onFinalMessage() callback
        ChatUI->>User: Display final message
    end
</pre>

In this sequence diagram, you can also find how the tool execution works:

1. Groq sends a response with `tool_calls` which is just a definition of the tool to be executed, a type of `any`.
1. The real execution is done in `src/core/tools.ts` with the `executeTool` function.

## Task Management For A Complex Request

As with other coding agents, Groq Code CLI also has a task management system to handle complex requests. This is done by its task management tools defined in `src/tools/tools.ts`:

```typescript
// Tool Registry: maps tool names to functions
export const TOOL_REGISTRY = {
  ...
  create_tasks: createTasks,
  update_tasks: updateTasks,
};
```

The whole flow is a kind of tool execution:

<pre class="mermaid">
sequenceDiagram
    participant User
    participant ChatUI as "Chat UI"
    participant Agent as "Agent Core"
    participant Groq
    participant Tools

    User->>ChatUI: Enters complex request (e.g., "build a login page")
    ChatUI->>Agent: sendMessage(userInput)
    Agent->>Groq: client.chat.completions.create()

    Groq-->>Agent: Response (tool_calls: create_tasks)
    Agent->>Tools: executeTool('create_tasks', tasks)
    Tools-->>Agent: Tool Result (success, task list)
    Agent->>ChatUI: onToolEnd() callback (displays task list)
    ChatUI-->>User: Show created task list

    Agent->>Groq: client.chat.completions.create() (with task list result)
    Groq-->>Agent: Response (tool_calls: execute first task, e.g., create_file)
    Agent->>Tools: executeTool('create_file', ...)
    Tools-->>Agent: Tool Result (success)
    Agent->>ChatUI: onToolEnd() callback

    Agent->>Groq: client.chat.completions.create() (with tool result)
    Groq-->>Agent: Response (tool_calls: update_tasks)
    Agent->>Tools: executeTool('update_tasks', {id: "1", status: "completed"})
    Tools-->>Agent: Tool Result (success, updated list)
    Agent->>ChatUI: onToolEnd() callback (updates task list)
    ChatUI-->>User: Show updated task list (task 1 is done)

    Note over Agent, Groq: Loop continues for remaining tasks...

    Groq-->>Agent: Final Response (text)
    Agent->>ChatUI: onFinalMessage() callback
    ChatUI->>User: Display final message
</pre>

Note, there is no asking for user approval before the agent executes the task management tools. Because they are part of `SAFE_TOOLS`:

```typescript
// Safe tools that can be auto-executed without approval
export const SAFE_TOOLS = [
  'read_file',
  'list_files',
  'search_files',
  'create_tasks',
  'update_tasks'
];
```

## Never Be Blocked

I'm pretty sure you must have met this situation when you are pairing with vscode github copilot or others: the agent is trapped in a loop without any valueable outcome. If that happens, the coding agent will ask you if you want to continue.

In Groq Code CLI, you can find the same design:

```typescript
while (true) { // Outer loop for iteration reset
  while (iteration < maxIterations) {
    // Check for interruption before each iteration
    if (this.isInterrupted) {
      debugLog('Chat loop interrupted by user');
      this.currentAbortController = null;
      return;
    }
...
```

Here is the flow chart:

<pre class="mermaid">
graph TD
    A[Start] --> B{Agent Processing Loop};
    B -- "iteration < 50" --> C[API Call & Tool Execution];
    C --> D[iteration++];
    D --> B;
    B -- "iteration >= 50" --> E{Max Iterations Reached};
    E --> F[Pause Agent & Prompt User];
    F --> G{Continue?};
    G -- "User selects Yes" --> H[Reset iteration = 0];
    H --> B;
    G -- "User selects No" --> I[Stop Processing];
    I --> J[End];
</pre>

## Final Words

The agent related logic is your interest, then we are done here. If you are interested in the TUI, you can check [ink](https://github.com/vadimdemedes/ink).

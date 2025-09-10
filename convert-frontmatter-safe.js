import fs from "fs";
import path from "path";
import matter from "gray-matter";
import yaml from "js-yaml";

const rootDir = "./src/content";

function getAllFiles(dir, extList, files = []) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            getAllFiles(fullPath, extList, files);
        } else if (extList.some((ext) => entry.name.endsWith(ext))) {
            files.push(fullPath);
        }
    }
    return files;
}

function normalizeYaml(content) {
    return content
        // bỏ indent thừa trong block frontmatter
        .replace(/---\n([\s\S]*?)\n---/, (m, g1) => {
            const fixed = g1
                .split("\n")
                .map(line => line.replace(/^\s+/, "")) // remove leading spaces
                .join("\n");
            return `---\n${fixed}\n---`;
        })
        // excerpt: | "" → excerpt: |\n  ""
        .replace(/(excerpt:\s*\|)\s*"?""?/g, '$1\n  ""')
        // categories: - Something → categories:\n  - Something
        .replace(/categories:\s*-\s*(.*)/g, "categories:\n  - $1")
        // tags: - Something → tags:\n  - Something
        .replace(/tags:\s*-\s*(.*)/g, "tags:\n  - $1");
}

const files = getAllFiles(rootDir, [".md", ".mdx"]);
console.log("Found files:", files);

for (const file of files) {
    let raw = fs.readFileSync(file, "utf8");

    // backup trước
    fs.writeFileSync(file + ".bak", raw, "utf8");

    // normalize trước khi parse
    raw = normalizeYaml(raw);

    const parsed = matter(raw);

    // dump lại YAML theo block style
    const newFrontmatter = yaml.dump(parsed.data, { lineWidth: -1 });
    const newContent = `---\n${newFrontmatter}---\n${parsed.content}`;

    fs.writeFileSync(file, newContent, "utf8");
    console.log("Converted:", file);
}

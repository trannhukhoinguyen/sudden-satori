// convert-frontmatter.js
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

const files = getAllFiles(rootDir, [".md", ".mdx"]);
console.log("Found files:", files);

for (const file of files) {
    let content = fs.readFileSync(file, "utf8");

// chuẩn hoá: xoá space thừa đầu dòng trong frontmatter
    content = content.replace(/---\n([\s\S]*?)\n---/, (m, g1) => {
        const fixed = g1.split("\n").map(line => line.replace(/^\s+/, "")).join("\n");
        return `---\n${fixed}\n---`;
    });

    const parsed = matter(content);

    // Convert frontmatter về YAML gạch đầu dòng
    const newFrontmatter = yaml.dump(parsed.data, { lineWidth: -1 });
    const newContent = `---\n${newFrontmatter}---\n${parsed.content}`;

    fs.writeFileSync(file, newContent, "utf8");
    console.log("Converted:", file);
}

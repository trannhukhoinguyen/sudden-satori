import fs from "fs";
import path from "path";

// Thư mục gốc cần scan
const CONTENT_DIR = path.resolve("src/content");

// Hàm xử lý: xóa thụt >=4 space ở đầu dòng
function cleanIndent(text) {
    return text.replace(/^( {4,}|\t+)/gm, "");
}

// Hàm đệ quy scan folder
function processDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            processDir(fullPath);
        } else if (file.endsWith(".mdx")) {
            const original = fs.readFileSync(fullPath, "utf8");
            const cleaned = cleanIndent(original);

            if (original !== cleaned) {
                fs.writeFileSync(fullPath, cleaned, "utf8");
                console.log(`✅ Cleaned: ${fullPath}`);
            }
        }
    }
}

// Run
processDir(CONTENT_DIR);
console.log("✨ MDX indentation cleaned!");

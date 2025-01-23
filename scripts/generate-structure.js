// File: scripts/generate-structure.js
const fs = require("fs");
const path = require("path");

const docsDir = path.join(__dirname, "..", "public", "docs");

// Create docs directory if it doesn't exist
if (!fs.existsSync(docsDir)) {
  fs.mkdirSync(docsDir, { recursive: true });
  console.log("Created docs directory");
}

// Get all main documentation folders (excluding those that start with numbers)
const mainFolders = fs.readdirSync(docsDir).filter((file) => {
  const isDirectory = fs.statSync(path.join(docsDir, file)).isDirectory();
  const doesntStartWithNumber = !/^\d/.test(file);
  return isDirectory && doesntStartWithNumber;
});

mainFolders.forEach((mainFolder) => {
  const mainFolderPath = path.join(docsDir, mainFolder);

  // Get all subfolders within the main folder
  const subFolders = fs
    .readdirSync(mainFolderPath)
    .filter((file) =>
      fs.statSync(path.join(mainFolderPath, file)).isDirectory(),
    );

  subFolders.forEach((subFolder) => {
    const subFolderPath = path.join(mainFolderPath, subFolder);
    const structure = buildStructure(subFolderPath);

    fs.writeFileSync(
      path.join(subFolderPath, "structure.json"),
      JSON.stringify(structure, null, 2),
    );

    console.log(`Generated structure.json for ${mainFolder}/${subFolder}`);
  });
});

function buildStructure(baseDir, relPath = "") {
  const fullPath = path.join(baseDir, relPath);
  const name = path.basename(fullPath);
  const relativePath = relPath || name;

  if (fs.statSync(fullPath).isFile() && path.extname(fullPath) === ".md") {
    return {
      type: "file",
      name,
      path: relativePath,
    };
  }

  const entries = fs.readdirSync(fullPath).filter((entry) => {
    const stat = fs.statSync(path.join(fullPath, entry));
    return (
      stat.isDirectory() || (stat.isFile() && path.extname(entry) === ".md")
    );
  });

  const children = entries
    .map((entry) => buildStructure(baseDir, path.join(relPath, entry)))
    .sort((a, b) => {
      // Extract numbers from start of name (if they exist)
      const aNum = parseInt(a.name.match(/^(\d+)/)?.[1] || "0");
      const bNum = parseInt(b.name.match(/^(\d+)/)?.[1] || "0");
      return aNum - bNum;
    });

  return {
    type: "directory",
    name,
    path: relativePath,
    children,
  };
}

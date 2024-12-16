// File: scripts/generate-pages.js
const fs = require('fs');
const path = require('path');

// Base docs directory
const docsDir = path.join(__dirname, '..', 'public', 'docs');

// Get all documentation sections
const sections = fs.readdirSync(docsDir)
  .filter(file => fs.statSync(path.join(docsDir, file)).isDirectory());

// Generate pages.json for each section
sections.forEach(section => {
  const sectionDir = path.join(docsDir, section);
  const pages = getAllMarkdownFiles(sectionDir);
  
  fs.writeFileSync(
    path.join(sectionDir, 'pages.json'),
    JSON.stringify(pages, null, 2)
  );
  
  console.log(`Generated pages.json for ${section} with ${pages.length} pages`);
});

function getAllMarkdownFiles(dir) {
  const files = [];

  function scan(currentDir) {
    const entries = fs.readdirSync(currentDir);
    
    entries.forEach(entry => {
      const fullPath = path.join(currentDir, entry);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        scan(fullPath);
      } else if (entry.endsWith('.md')) {
        const relativePath = path.relative(dir, fullPath);
        const title = entry
          .replace('.md', '')
          .replace(/-/g, ' ')
          .replace(/\b\w/g, l => l.toUpperCase());
        
        files.push({
          title,
          path: relativePath
        });
      }
    });
  }

  scan(dir);
  return files;
}
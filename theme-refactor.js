const fs = require('fs');
const path = require('path');

const directories = ['app', 'components'];

const replacements = [
  { pattern: /border-\[#(d9a928|d6a927)\]/gi, replacement: 'border-accent-gold' },
  { pattern: /hover:border-\[#(d6a927|d9a928)\]/gi, replacement: 'hover:border-accent-gold' },
  { pattern: /bg-\[#40351a\]/gi, replacement: 'bg-border-theme' },
];

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let originalContent = content;
      
      for (const rule of replacements) {
        content = content.replace(rule.pattern, rule.replacement);
      }
      
      if (content !== originalContent) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated: ${fullPath}`);
      }
    }
  }
}

for (const dir of directories) {
  processDirectory(path.join(__dirname, dir));
}

console.log("Refactoring complete.");

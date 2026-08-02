const fs = require('fs');
const path = require('path');

const dir = 'C:/Users/hp/Downloads/GOLD_ERP/app/store/[domain]';

function walkAndReplace(currentDir) {
  const files = fs.readdirSync(currentDir);
  for (const file of files) {
    const fullPath = path.join(currentDir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      walkAndReplace(fullPath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let originalContent = content;
      
      // Instagram
      content = content.replace(/@microtechnique/g, '@microtechniqueit');
      content = content.replace(/instagram\.com\/microtechnique\?/g, 'instagram.com/microtechniqueit?');
      
      // Email
      content = content.replace(/hello@microtechnique\.in/g, 'microtechniqueit@gmail.com');
      content = content.replace(/concierge@tivra\.marketing/g, 'microtechniqueit@gmail.com');
      
      // Phone
      content = content.replace(/\+91 98765 43210/g, '+91 6355997080');
      content = content.replace(/\+91 9876543210/g, '+91 6355997080');
      
      if (content !== originalContent) {
        fs.writeFileSync(fullPath, content);
        console.log('Updated ' + fullPath);
      }
    }
  }
}

walkAndReplace(dir);

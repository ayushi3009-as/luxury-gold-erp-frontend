const fs = require('fs');
const path = require('path');

const map = [
  { dir: 'app/analytics', name: 'Analytics' },
  { dir: 'app/gold-rate', name: 'GoldRate' },
  { dir: 'app/inventory', name: 'Inventory' },
  { dir: 'app/notifications', name: 'Notifications' },
  { dir: 'components/products', name: 'Product' },
  { dir: 'components/layout', name: 'Purchase' },
  { dir: 'components/layout', name: 'Repair' },
  { dir: 'components/layout', name: 'Reports' }
];

for (const item of map) {
  const navPath = path.join(__dirname, item.dir, `${item.name}Nav.tsx`);
  
  if (fs.existsSync(navPath)) {
    let content = fs.readFileSync(navPath, 'utf8');

    // Find the return statement block
    const returnIndex = content.indexOf('return (');
    if (returnIndex !== -1) {
      const beforeReturn = content.substring(0, returnIndex + 'return ('.length);
      const afterReturn = content.substring(returnIndex + 'return ('.length);

      // Find the last ); which closes the return statement
      const lastParenIndex = afterReturn.lastIndexOf(');');
      
      if (lastParenIndex !== -1) {
        const jsxBody = afterReturn.substring(0, lastParenIndex);
        const afterJSX = afterReturn.substring(lastParenIndex);

        // Re-wrap the JSX body in a valid nav element if it isn't already
        if (!jsxBody.includes('<nav')) {
           const newJSXBody = `\n    <nav className="flex items-center gap-2 overflow-x-auto border-b border-border-theme bg-background-primary px-6 py-3 w-full [&::-webkit-scrollbar]:hidden">\n${jsxBody}\n    </nav>\n  `;
           content = beforeReturn + newJSXBody + afterJSX;
           fs.writeFileSync(navPath, content);
           console.log(`Fixed structure in ${navPath}`);
        }
      }
    }
  }
}

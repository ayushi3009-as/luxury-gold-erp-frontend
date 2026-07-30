const fs = require('fs');
const path = require('path');

const map = [
  { dir: 'app/analytics', name: 'Analytics' },
  { dir: 'app/gold-rate', name: 'GoldRate' },
  { dir: 'app/inventory', name: 'Inventory' },
  { dir: 'app/notifications', name: 'Notifications' },
  { dir: 'app/products', sidebarName: 'Product', sidebarPath: 'components/products/ProductSidebar.tsx' },
  { dir: 'app/purchase', sidebarName: 'Purchase', sidebarPath: 'components/layout/PurchaseSidebar.tsx' },
  { dir: 'app/repair', sidebarName: 'Repair', sidebarPath: 'components/layout/RepairSidebar.tsx' },
  { dir: 'app/reports', sidebarName: 'Reports', sidebarPath: 'components/layout/ReportsSidebar.tsx' }
];

for (const item of map) {
  const sidebarPath = item.sidebarPath || `${item.dir}/${item.name}Sidebar.tsx`;
  const navPath = sidebarPath.replace('Sidebar.tsx', 'Nav.tsx');
  const layoutPath = `${item.dir}/layout.tsx`;

  // 1. Rename and modify Sidebar -> Nav
  if (fs.existsSync(sidebarPath)) {
    let content = fs.readFileSync(sidebarPath, 'utf8');
    const funcName = item.sidebarName || item.name;

    // Change function name
    content = content.replace(`export default function ${funcName}Sidebar`, `export default function ${funcName}Nav`);
    
    // Convert <aside> to top <nav>
    content = content.replace(/<aside[^>]*>/, `<nav className="flex items-center gap-2 overflow-x-auto border-b border-border-theme bg-background-primary px-6 py-3 w-full [&::-webkit-scrollbar]:hidden">`);
    content = content.replace(/<\/aside>/, `</nav>`);

    // Remove Module Title Block if present
    content = content.replace(/{\/\* Module Title \*\/}[\s\S]*?<\/div>\s*?(?:{\/\* Navigation \*\/})?/g, '');

    // Remove the inner <nav> wrapper because we made the root a <nav>
    content = content.replace(/<nav[^>]*>/g, '');
    content = content.replace(/<\/nav>/g, '');

    // Convert Link styling
    content = content.replace(/group flex items-center justify-between rounded-lg px-3 py-3 text-sm transition/g, `flex items-center gap-2 whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-colors`);
    content = content.replace(/flex items-center gap-3 rounded-lg px-3 py-3 text-sm transition-all/g, `flex items-center gap-2 whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-colors`);
    
    // Specific fix for Analytics / Notifications
    content = content.replace(/group flex items-center justify-between rounded-lg px-3 py-3 text-sm text-text-secondary transition hover:bg-background-tertiary hover:text-accent-gold/g, `flex items-center gap-2 whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-colors text-text-secondary hover:bg-background-tertiary hover:text-accent-gold`);

    // Remove ChevronRight
    content = content.replace(/<ChevronRight[\s\S]*?\/>/g, '');

    fs.writeFileSync(sidebarPath, content);
    fs.renameSync(sidebarPath, navPath);
    console.log(`Converted ${sidebarPath} to ${navPath}`);
  }

  // 2. Modify layout.tsx
  if (fs.existsSync(layoutPath)) {
    let content = fs.readFileSync(layoutPath, 'utf8');
    const funcName = item.sidebarName || item.name;

    content = content.replace(new RegExp(`${funcName}Sidebar`, 'g'), `${funcName}Nav`);
    
    // Change layout wrapper to flex-col
    content = content.replace(/<div className="flex min-h-full">/g, `<div className="flex flex-col min-h-full w-full">`);
    content = content.replace(/<div className="flex h-full">/g, `<div className="flex flex-col h-full w-full">`);
    content = content.replace(/<div className="flex h-screen">/g, `<div className="flex flex-col h-screen w-full">`);
    content = content.replace(/<div className="flex">/g, `<div className="flex flex-col w-full h-full">`);

    fs.writeFileSync(layoutPath, content);
    console.log(`Updated layout: ${layoutPath}`);
  }
}

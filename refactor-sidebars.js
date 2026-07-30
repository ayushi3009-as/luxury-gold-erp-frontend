const fs = require('fs');
const path = require('path');

const sidebarFiles = [
  'app/analytics/AnalyticsSidebar.tsx',
  'app/gold-rate/GoldRateSidebar.tsx',
  'app/inventory/InventorySidebar.tsx',
  'app/notifications/NotificationsSidebar.tsx',
  'components/ai-assistant/ChatSidebar.tsx',
  'components/layout/ProductSidebar.tsx',
  'components/layout/PurchaseSidebar.tsx',
  'components/layout/RepairSidebar.tsx',
  'components/layout/ReportsSidebar.tsx',
  'components/products/ProductSidebar.tsx'
];

for (const file of sidebarFiles) {
  const filePath = path.join(__dirname, file);
  if (!fs.existsSync(filePath)) {
    console.log(`Skipping ${file} - not found`);
    continue;
  }
  
  let content = fs.readFileSync(filePath, 'utf8');

  // Add usePathname import if not present
  if (!content.includes('next/navigation')) {
    content = content.replace(
      /import {/g, 
      `import { usePathname } from "next/navigation";\nimport {`
    );
  }

  // Remove Logo block
  content = content.replace(
    /\s*{\/\* Logo \*\/}\s*<div className="flex h-\[92px\][\s\S]*?<\/div>\s*<\/div>/g, 
    ''
  );

  // Remove Current Branch block
  content = content.replace(
    /\s*{\/\* Current Branch \*\/}\s*<div className="absolute bottom-5[\s\S]*?<\/div>\s*<\/div>/g, 
    ''
  );

  // Add pathname hook if not present
  if (!content.includes('const pathname = usePathname();')) {
    content = content.replace(
      /(export default function \w+\(\) {\n)/g,
      `$1  const pathname = usePathname();\n`
    );
  }

  // Replace active check logic
  // Typically looks like: const isActive = index === 0; OR in className block
  content = content.replace(
    /index === 0\s*\?\s*"border border-border-theme bg-background-tertiary text-accent-gold"/g,
    `pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href)) ? "border border-border-theme bg-background-tertiary text-accent-gold"`
  );
  
  // also fix some variants:
  content = content.replace(
    /index === 0\s*\n\s*\?\s*"border border-border-theme bg-background-tertiary text-accent-gold"/g,
    `pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href))\n                  ? "border border-border-theme bg-background-tertiary text-accent-gold"`
  );

  // Change <a href to <Link href
  if (!content.includes('import Link')) {
    content = `import Link from "next/link";\n` + content;
  }
  content = content.replace(/<a(\s+key=.*?)\s+href=\{item\.href\}/g, '<Link$1 href={item.href}');
  content = content.replace(/<\/a>/g, '</Link>');

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Successfully refactored ${file}`);
}

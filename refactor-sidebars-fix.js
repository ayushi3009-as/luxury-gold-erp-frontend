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
  if (!fs.existsSync(filePath)) continue;
  
  let content = fs.readFileSync(filePath, 'utf8');

  // Move "use client"; to the absolute top
  if (content.includes('"use client";') && !content.startsWith('"use client";')) {
    content = content.replace(/"use client";\n?/g, '');
    content = '"use client";\n\n' + content;
  }

  // Same for 'use client';
  if (content.includes("'use client';") && !content.startsWith("'use client';")) {
    content = content.replace(/'use client';\n?/g, '');
    content = '"use client";\n\n' + content;
  }

  // Also replace export default function GoldRateSidebar() { with the hook:
  // I need to ensure I actually added the const pathname = usePathname(); inside the component.
  // Wait, I did that correctly in my previous script! 
  // Wait, let's verify if `const pathname = usePathname();` was added. 
  // In the view_file output, it wasn't there! Let me re-check.
  // Oh! In view_file:
  /*
  export default function GoldRateSidebar() {
    return (
  */
  // The `const pathname = usePathname();` was missing!
  // My previous regex was: content.replace(/(export default function \w+\(\) {\n)/g, `$1  const pathname = usePathname();\n`);
  // But maybe the regex didn't match because of the curly brace on the next line or spacing?
  
  // Let's force add pathname if it's missing but used in the classname.
  if (content.includes('pathname ===') && !content.includes('const pathname')) {
    content = content.replace(/(export default function [A-Za-z0-9_]+\([^)]*\)\s*\{)/g, '$1\n  const pathname = usePathname();');
  }

  fs.writeFileSync(filePath, content, 'utf8');
}

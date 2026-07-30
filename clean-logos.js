const fs = require('fs');
const files = [
  'app/inventory/InventorySidebar.tsx',
  'app/notifications/NotificationsSidebar.tsx',
  'components/ai-assistant/ChatSidebar.tsx',
  'components/layout/ProductSidebar.tsx',
  'components/layout/PurchaseSidebar.tsx',
  'components/layout/RepairSidebar.tsx',
  'components/layout/ReportsSidebar.tsx',
  'components/products/ProductSidebar.tsx'
];
files.forEach(f => {
  if(!fs.existsSync(f)) return;
  let text = fs.readFileSync(f, 'utf8');
  
  // Remove block containing LUXRAY GOLD or Luxury Gold
  text = text.replace(/<h1[^>]*>[\s\S]*?(LUXRAY GOLD|Luxury Gold|Luxury ERP)[\s\S]*?<\/h1>/gi, '');
  
  // Clean up empty divs or border-bs that were wrapping them
  text = text.replace(/<div className="[^"]*text-4xl[^"]*">[^<]*◇[^<]*<\/div>/g, '');

  fs.writeFileSync(f, text);
});

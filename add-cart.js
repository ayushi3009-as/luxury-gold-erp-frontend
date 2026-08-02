const fs = require('fs');

const path = 'C:/Users/hp/Downloads/GOLD_ERP/app/store/[domain]/product/[id]/ProductDetailsClient.tsx';
let content = fs.readFileSync(path, 'utf8');

if (!content.includes('useCartStore')) {
  // Add imports
  content = content.replace("import { useState } from 'react';", "import { useState } from 'react';\nimport { useCartStore } from '@/lib/store/cartStore';\nimport { toast } from 'sonner';");
  
  // Add hook inside component
  content = content.replace("const [showCare, setShowCare] = useState(false);", "const [showCare, setShowCare] = useState(false);\n  const addItem = useCartStore(state => state.addItem);\n\n  const handleAddToCart = () => {\n    addItem({\n      id: product.id,\n      productId: product.id,\n      name: product.name,\n      price: product.sellingPrice || product.price || 245000,\n      imageUrl: product.imageUrl || fallback,\n      purity: product.purity || '22K',\n      weight: product.weight || '45g'\n    });\n    alert('Added to Cart!');\n  };\n");
  
  // Add onClick to Desktop button
  content = content.replace(
    "<MagneticButton className=\"w-full py-5 text-sm\">",
    "<MagneticButton onClick={handleAddToCart} className=\"w-full py-5 text-sm\">"
  );
  
  // Add onClick to Mobile button
  content = content.replace(
    "<MagneticButton className=\"px-8 py-3 text-xs\">",
    "<MagneticButton onClick={handleAddToCart} className=\"px-8 py-3 text-xs\">"
  );
  
  fs.writeFileSync(path, content);
  console.log('Updated ProductDetailsClient');
}

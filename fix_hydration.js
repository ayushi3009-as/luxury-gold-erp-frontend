const fs = require('fs');

function fixCart() {
  const file = '/var/www/gold-erp/app/store/[domain]/cart/page.tsx';
  let content = fs.readFileSync(file, 'utf8');
  if (!content.includes('setMounted')) {
    content = content.replace("import { useCartStore } from '@/lib/store/cartStore';", "import { useCartStore } from '@/lib/store/cartStore';\nimport { useState, useEffect } from 'react';");
    content = content.replace("const subtotal = getSubtotal();\n", "const subtotal = getSubtotal();\n  const [mounted, setMounted] = useState(false);\n\n  useEffect(() => {\n    setMounted(true);\n  }, []);\n\n  if (!mounted) {\n    return null;\n  }\n");
    fs.writeFileSync(file, content);
    console.log('Cart fixed');
  }
}

function fixCheckout() {
  const file = '/var/www/gold-erp/app/store/[domain]/checkout/page.tsx';
  let content = fs.readFileSync(file, 'utf8');
  if (!content.includes('setMounted')) {
    content = content.replace("import { useState } from 'react';", "import { useState, useEffect } from 'react';");
    content = content.replace("const subtotal = getSubtotal();\n", "const subtotal = getSubtotal();\n\n  useEffect(() => {\n    setMounted(true);\n  }, []);\n\n  if (!mounted) {\n    return null;\n  }\n");
    content = content.replace("const { items, getSubtotal, clearCart } = useCartStore();", "const { items, getSubtotal, clearCart } = useCartStore();\n  const [mounted, setMounted] = useState(false);");
    fs.writeFileSync(file, content);
    console.log('Checkout fixed');
  }
}

fixCart();
fixCheckout();

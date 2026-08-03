const fs = require('fs');
let content = fs.readFileSync('page.tsx', 'utf8');

const replacement =                 filteredProducts.map(product => (
                  <div 
                    key={product.id} 
                    onClick={() => addToCart(product)}
                    className="group border border-border-theme rounded-xl p-4 cursor-pointer hover:border-accent-gold/50 hover:bg-background-tertiary transition-all relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-accent-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                    
                    <div className="w-full h-32 bg-background-primary rounded-lg mb-3 flex items-center justify-center border border-border-theme overflow-hidden">
                      {product.images && product.images.length > 0 ? (
                        <img 
                          src={product.images[0].url} 
                          alt={product.name || 'Product Image'}
                          className="w-full h-full object-cover transition-transform group-hover:scale-105"
                        />
                      ) : (
                        <span className="text-xs text-text-secondary">No Image</span>
                      )}
                    </div>
                    
                    <div className="flex flex-col flex-1">
                      <h3 className="font-semibold text-sm line-clamp-1">{product.name || 'Unnamed Product'}</h3>
                      <p className="text-xs text-text-secondary mt-1">{product.productCode || 'No Code'}</p>
                      
                      <div className="flex justify-between items-center mt-3">
                        <span className="font-bold text-text-primary text-sm">
                          ?{Number(product.sellingPrice || 0).toLocaleString()}
                        </span>
                        <span className={\\\	ext-xs px-2 py-1 rounded-md \\\\\\}>
                          {product.inventory?.quantity || 0} in stock
                        </span>
                      </div>
                    </div>
                  </div>
                ))

content = content.replace(/filteredProducts\.map\(product => \(<div key=\{product\.id\}.*?<\/div>\)\)/s, replacement);
fs.writeFileSync('page.tsx', content);

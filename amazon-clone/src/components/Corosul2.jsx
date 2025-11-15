

const products = [
  { id: 1, name: 'Maroon Hoodie', type: 'Sweatshirt', image: 'placeholder-hoodie.jpg' },
  { id: 2, name: 'Black Quilted Jacket', type: 'Jacket', image: 'placeholder-quilted-jacket.jpg' },
  { id: 3, name: 'Blue Printed Kurta Set', type: 'Ethnic Wear', image: 'placeholder-kurta-set-blue.jpg' },
  { id: 4, name: 'Olive Reversible Bomber', type: 'Jacket', image: 'placeholder-bomber-jacket.jpg' },
  { id: 5, name: 'Green Anarkali Suit', type: 'Ethnic Wear', image: 'placeholder-anarkali.jpg' },
  { id: 6, name: 'Maroon Cardigan', type: 'Cardigan', image: 'placeholder-cardigan.jpg' },
  { id: 7, name: 'Assorted Ankle Socks', type: 'Accessories', image: 'placeholder-socks.jpg' },
  { id: 8, name: 'Black Zip-up Hoodie', type: 'Sweatshirt', image: 'placeholder-zip-hoodie.jpg' },
  { id: 9, name: 'Another Item 1', type: 'Extra', image: 'placeholder-extra-1.jpg' },
  { id: 10, name: 'Another Item 2', type: 'Extra', image: 'placeholder-extra-2.jpg' },
];

const Corosul2 = () => {
  return (
    <div className="best-sellers-section">
      
      <div className="section-header-bg">
        <h2 className="section-title">Best Sellers in Clothing & Accessories</h2>
      </div>

      
      <div className="product-row-container">
        {products.map((product) => (
          <a href={`/product/${product.id}`} key={product.id} className="product-item-card">
            <div className="product-image-wrapper">
              
              <img src={product.image} alt={product.name} />
            </div>
            
          </a>
        ))}
      </div>

      <div className="section-footer-bg"></div>
    </div>
  );
};

export default Corosul2;
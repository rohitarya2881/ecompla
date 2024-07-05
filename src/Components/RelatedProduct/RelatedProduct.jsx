import React, { useContext } from 'react';
import Item from '../Items/Item'; // Import your Item component
import { ShopContext } from '../../Context/ShopContext'; // Import ShopContext
import "./RelatedProduct.css"
const RelatedProduct = ({ category }) => {
    const { allProducts } = useContext(ShopContext);
console.log("category",category)
  // Filter products by category to get related products
  const relatedProducts = allProducts.filter((product) => product.category === category).slice(0,4);
console.log(relatedProducts)
  return (
    <div className="product-container">
      <h1>Related Products</h1>
      <hr />
      <div className="product">
        {relatedProducts.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedProduct;

import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrums from '../Components/Breadcrums/Breadcrums';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DiscriptionBox from '../Components/DiscriptionBox/DiscriptionBox';
import RelatedProduct from '../Components/RelatedProduct/RelatedProduct';

const Product = () => {
  const { allProducts } = useContext(ShopContext);
  const { productId } = useParams();
  const product = allProducts.find((e) => e.id === Number(productId));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <Breadcrums product={product} />
      <ProductDisplay product={product}/>
      <DiscriptionBox product={product}/>
      <RelatedProduct category={product.category}/>
      
      {/* Add more product details here */}
    </div>
  );
}

export default Product;

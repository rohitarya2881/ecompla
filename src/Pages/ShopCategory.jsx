import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import "./ShopCategory.css";
import Item from "../Components/Items/Item"
const ShopCategory = (props) => {
  // Accessing all products from ShopContext
  const { allProducts } = useContext(ShopContext);

  return (
    <div className="shop-category">
      <img src={props.banner} alt="Shop Banner" className='shopcategory-banner' />
      <div className="shopcategory-indexSort">
        <p><span>Showing 1-12</span>out of 36 Products</p>
        <div className="shopcategory-sort">
          sort-by <i className="fa-solid fa-sort-down"></i>
        </div>
      </div>
      <div className="shopcategory-products">
        {
          allProducts.map(
            (item,i)=>{
              if(props.category===item.category)
                {
                  return <Item key={i} id={item.id} name={item.name} image={item.image} new_price= {item.new_price } old_price= {item.old_price} rating={item.rating}></Item>

                }
            }
          )
        }
      </div>
      <div className="shopcategory-loadmore">
        Explore more
      </div>
    </div>
  );
}

export default ShopCategory;

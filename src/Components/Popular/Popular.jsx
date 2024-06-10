import React from 'react'
import products from "../Assets/data";
import Item from "../Items/Item";
import "./Popular.css";
const Popular = () => {
  return (
    <div className="popular">
        <h1>Popular In Women</h1>
        <hr />
        <div className="popular-item">
            {
                products.map((item,i)=>
                {
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price= {item.new_price } old_price= {item.old_price}></Item>
                })
            }
        </div>
    </div>
  )
}

export default Popular
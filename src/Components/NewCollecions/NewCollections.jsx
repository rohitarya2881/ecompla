import React from 'react';
import "./NewCollections.css";
import newcollection from '../Assets/allObject/new_collection';
import Item from "../Items/Item"
const NewCollections = () => {
  return (
    <div className="new-collections">
        <h1>NEW COLLECTIONS</h1>
        <hr />
        <div className="collections">
            {newcollection.map((item,i)=>{
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price= {item.new_price } old_price= {item.old_price}></Item>
                })}
        </div>
    </div>
  )
}

export default NewCollections
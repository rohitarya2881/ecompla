import React from 'react'
import { NavLink } from 'react-router-dom'
import './Item.css'
const Item = (props) => {
  return (
  //   <div className="item">
  //  <NavLink to={`/product/${props.id}`}>  <img src={props.image} alt=""/></NavLink>
  //    <p>{props.name}</p>
  //    <div className="item-prices">
  //       <div className="item-prices-new">
  //      ${props.new_price}

  //       </div>
  //       <div className="item-price-old">
  //           ${props.old_price}

  //       </div>
  //    </div>
  //   </div>

<div className="product-card" onClick={window.scroll(0,0)}>
<div className="img-card">
<NavLink to={`/product/${props.id}`}> <img src={props.image} alt={props.name} /></NavLink>
    <div className="heart-icon"><i className="fa-regular fa-heart"></i></div>
</div>
<div className="content-card">
    <div className="product-brand">{props.brand || "not mention"}</div>
    <div className="product-name">{props.name}</div>
    <div className="price-rating">
        <div className="product-price-new">${props.new_price}</div>
        <div className="product-price-old">${props.old_price}</div>

        <div className="rating"><i className="fa-solid fa-star"  style={{color: "#FFD43B",}}></i>:{props.rating}</div>
    </div>
</div>
</div>
  )
}

export default Item
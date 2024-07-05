// pages/SearchResults.js
import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext'; // Import your context
import Item from '../Items/Item';
import "./SearchResult.css"
const SearchResults = () => {
    const { allProducts } = useContext(ShopContext); // Access all products from context
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const searchQuery = searchParams.get('query') || '';
    const category = searchParams.get('query') || '';
    console.log(searchQuery);
    console.log(searchParams)

    const filteredProducts = allProducts.filter(product =>
        (category ? product.category.toLowerCase() === category.toLowerCase() : true) ||
        (searchQuery ? product.name.toLowerCase().includes(searchQuery.toLowerCase()) : true)
    );

    return (
        <div className="product-results">
            {filteredProducts.length > 0 ? (
                filteredProducts.map((item,i) => (
             <Item key={i} id={item.id} name={item.name} image={item.image} new_price= {item.new_price } old_price= {item.old_price} rating={item.rating}></Item>

                ))
            ) : (
                <p>No products found for "{searchQuery}" in category "{category}"</p>
            )}
        </div>
    );
};

export default SearchResults;

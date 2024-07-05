import React, { useContext, useState } from 'react';
import { CartContext } from '../../Context/CartContext';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../Assets/amazonicon.png'; // Adjust path as needed
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMagnifyingGlass, faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

const Navbar = () => {
  const { getTotalItems } = useContext(CartContext);
  const [menu, setMenu] = useState("shop");
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery) {
      navigate(`/search?query=${searchQuery}`);
    }
  };

  return (
    <>
      <div className="nav-section">
        <div className="nav-logo">
          <Link to="/">
            <img src={logo} alt="Amazon Icon" />
          </Link>
        </div>

        <form className="search-section" onSubmit={handleSearch}>
          <select name="" id="">
            <option value="">All</option>
          </select>
          <input
            type="text"
            placeholder="Search product"
            value={searchQuery}
            onChange={handleInputChange}
          />
          <button type="submit" className="search-icon">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </form>

        <div className="sign-in-section">
          <Link to="/login">
            <p className="hide">Hello, sign in</p>
            <p className="hide">Account & Lists</p>
          </Link>
        </div>

        <div className="cart-section">
          <p className="cartitems">{getTotalItems()}</p>
          <Link to='/cart'>
            <FontAwesomeIcon icon={faCartShopping} className="cart-icon" />
          </Link>
        <Link to='./wishlist'>  <FontAwesomeIcon icon={faHeart} className="heart-icon" /></Link>
        </div>

        <FontAwesomeIcon icon={faBars} className="menu" />
      </div>

      <div className="sub-nav">
        <ul>
          <li onClick={() => { setMenu("shop") }}>
            <Link style={{ textDecoration: 'none' }} to="/">Shop</Link>{menu === 'shop' ? <hr /> : <></>}
          </li>
          <li onClick={() => { setMenu("mens") }}>
            <Link style={{ textDecoration: 'none' }} to="/mens">Men</Link>{menu === 'mens' ? <hr /> : <></>}
          </li>
          <li onClick={() => { setMenu("womens") }}>
            <Link style={{ textDecoration: 'none' }} to="/womens">Women</Link>{menu === 'womens' ? <hr /> : <></>}
          </li>
          <li onClick={() => { setMenu("kids") }}>
            <Link style={{ textDecoration: 'none' }} to="/kids">Kids</Link>{menu === 'kids' ? <hr /> : <></>}
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;

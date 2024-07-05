import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import mens_banner from "./Components/Assets/banner/men_banner.jpg";
import womens_banner from "./Components/Assets/banner/womens_banner.jpg";
import kids_banner from "./Components/Assets/banner/kids_banner2.jpeg";
import Footer from "./Components/Footer/Footer"
import SearchResult from './Components/SearchResult/SearchResult';
import WishList from './Components/WishList/WishList';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/mens" element={<ShopCategory banner={mens_banner} category="Men" />} />
          <Route path="/womens" element={<ShopCategory banner={womens_banner} category="Women" />} />
          <Route path="/kids" element={<ShopCategory banner={kids_banner} category="Kids" />} />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<WishList/>} />

          <Route path="/login" element={<LoginSignup />} />
          <Route path="/search" element={<SearchResult/>} /> {/* New route */}

        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
    
  );
}

export default App;

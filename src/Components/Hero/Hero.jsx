import React from 'react';
import '../Navbar/Navbar.css'; // Ensure you have BannerSection.css for styling
import img1 from "../Assets/allObject/product/p18.jpeg"
const BannerSection = () => {
    return (
        <div className="banner-section">
            <div className="banner-left">
                <div className="banner-content">
                    <p className="banner-title">Most sold items</p>
                    <p className="banner-brand">Brand Name</p>
                    <p>Buy now</p>
                    <p>Know More</p>
                </div>
            </div>
            <div className="banner-right">
                <div className="banner-img">
                    <img src={img1} alt="Product Image" />
                </div>
            </div>
        </div>
    );
}

export default BannerSection;

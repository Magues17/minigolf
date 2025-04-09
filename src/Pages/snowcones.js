// Pages/Snowcones.js

import React from 'react';
import '../Components/Snowcones/snowcones.css'; // Create this CSS file for custom styling
import snowconeMenu from '../assets/lakeside/snow.jpg';

const Snowcones = () => {
  return (
    <div className="snowcones-page">
      <h1 className="snowcones-title">Lakeside Sno</h1>
      <p className="snowcones-subtitle">Artisan Sno Balls • Cool Off with Delicious Flavors!</p>

      <div className="snowcones-image-container">
        <img src={snowconeMenu} alt="Lakeside Sno Menu" className="snowcones-image" />
      </div>

      <p className="snowcones-note">
        All prices include tax. Choose up to <strong>2 flavors per sno ball</strong>. 
        <br />
        *Sugar-free options available.
      </p>
    </div>
  );
};

export default Snowcones;

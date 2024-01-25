import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ClipLoader } from 'react-spinners';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = ({ addToCart }) => {
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [price, setPrice] = useState(10);

  // fetch data from api 
  const fetchRandomDog = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://dog.ceo/api/breeds/image/random');
      const newImageUrl = response.data.message;

      const savedHistory = JSON.parse(localStorage.getItem('dogHistory')) || [];
      const updatedHistory = [...savedHistory, newImageUrl];
      localStorage.setItem('dogHistory', JSON.stringify(updatedHistory));

      setImageUrl(newImageUrl);
      setPrice(Math.floor(Math.random() * 50) + 1);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  //add to cart
  const handleAddToCart = () => {
    addToCart({ imageUrl, price });
  };

  return (
    <div className="home-container">
      <h1>Home Page</h1>
      <div className="dog-container">
        <button onClick={fetchRandomDog} className="fetch-button">
          Fetch New Image
        </button>
        {loading && <ClipLoader color="#3498db" loading={loading} size={50} />}
        {!loading && imageUrl && (
          <>
            <img src={imageUrl} alt="Random Dog" className="dogs-image" />
            <p>Price: ${price}</p>
            <button onClick={handleAddToCart} className="add-to-cart-button">
              Add to Cart
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;

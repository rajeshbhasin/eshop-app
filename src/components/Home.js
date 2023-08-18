import React from 'react';
import Product from './Product';
import  '../styles/Home.css';


function Home() {
  return (
      <div className="home">
        <div className="home__container">
        <img src={require('./Ecomm2.png')}  alt="home__image" className="home__image"/>
        <div className="home__row">
            <Product 
            id="1"
            title="Bennett Mystic 15.6 inch Laptop Shoulder Messenger Sling Office Bag, Water Repellent Fabric for Men and Women (Blue)" 
            productPrice="3000" 
            productRating="⭐⭐⭐⭐" 
            productImg="https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg"/>

            <Product 
            id="2"
            title="IFB 30 L Convection Microwave Oven (30BRC2, Black, With Starter Kit)" 
            productPrice="35000" 
            productRating="⭐⭐⭐" 
            productImg="https://images-na.ssl-images-amazon.com/images/I/81D8pNFmWzL._SL1500_.jpg"/>
        </div>
        
        <div className="home__row">

        <Product
            id="3" 
            title="All the Light we Cannot See: The Breathtaking World Wide Bestseller Paperback" 
            productPrice="800" 
            productRating="⭐⭐⭐" 
            productImg="https://images-eu.ssl-images-amazon.com/images/I/514kNkerQ0L._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"/>
        <Product 
            id="4"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric" 
            productPrice="2500" 
            productRating="⭐⭐⭐⭐" 
            productImg="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"/>
        <Product 
            id="5"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)" 
            productPrice="10000" 
            productRating="⭐⭐⭐⭐" 
            productImg="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"/>

        </div>
        <div className="home__row">

        <Product 
            id="6"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440" 
            productPrice="40000" 
            productRating="⭐⭐⭐⭐⭐" 
            productImg="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"/>

        </div>

        </div>
        </div>
  );
}

export default Home;

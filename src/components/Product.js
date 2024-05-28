import React, { useState } from 'react';

const Product = ({ product, onLike, isLiked }) => {
  const truncateDescription = (description) => {
    const words = description.split(' ');
    return words.length > 6 ? words.slice(0, 6).join(' ') + '...' : description;
  };

  const handleLike = () => {
    onLike(product.id);
  };

  return (
    <div style={productItemStyle}>
      <img src={product.image} alt={product.title} style={imageStyle} />
      <h4 style={productTitleStyle}>{product.title}</h4>
      <p>{truncateDescription(product.description)}</p>
      <p><strong>Price:</strong> ${product.price}</p>
      <span onClick={handleLike} style={isLiked ? likeIconStyleLiked : likeIconStyle}>
     {isLiked ? (<i className="fa-solid fa-heart"></i>): (<i className="fa-regular fa-heart"></i>)} 
        </span>
    </div>
  );
};

const productItemStyle = {
  padding: '10px',
  border: '1px solid gray',
  borderRadius: '5px',
  textAlign: 'center',
  width: '250px',
};

const imageStyle = {
  width: '100%',
  height: '200px',
  objectFit: 'cover',
  marginBottom: '10px',
};

const productTitleStyle = {
  fontSize: '18px',
  fontWeight: 'bold',
};

const likeIconStyle = {
  cursor: 'pointer',
  color: 'gray',
};


const likeIconStyleLiked = {
  cursor: 'pointer',
  color: 'pink',
//   backgroundColor: 'black',
};

export default Product;

import React, { useState } from 'react';

const Header = ({ onToggleLikedView }) => {
  const [isLikedView, setIsLikedView] = useState(false);

  const handleToggleLikedView = () => {
    setIsLikedView(!isLikedView);
    onToggleLikedView(!isLikedView);
  };

  return (
    <header style={headerStyle}>
      <div style={IconStyle}>
        <i style={IconStyle} className="fa-brands fa-react"></i>
      </div>
      <div style={logoStyle}>LOGO</div>
      <div style={userStyle}>
        <i style={IconStyle} className="fa-solid fa-magnifying-glass"></i>

        <span  onClick={handleToggleLikedView} style={isLikedView ? likeIconStyleLiked : likeIconStyle}>
     {isLikedView ? (<i className="fa-solid fa-heart"></i>): (<i className="fa-regular fa-heart"></i>)} 
        </span>

        {/* <i style={IconStyle} className="fa-regular fa-heart" onClick={handleToggleLikedView}></i> */}
        <i style={IconStyle} className="fa-solid fa-bag-shopping"></i>
        <i style={IconStyle} className="fa-solid fa-user"></i>
        <span style={textStyle}>ENG</span>
      </div>
    </header>
  );
};

const textStyle = {
  fontSize: '16px',
  color: 'black',
  fontWeight: 'bold'
};

const IconStyle = {
  padding: '0px 10px',
  cursor: 'pointer',
  color: 'black'
};

const likeIconStyle = {
  cursor: 'pointer',
  color: 'black',
};
const likeIconStyleLiked = {
  cursor: 'pointer',
  color: 'pink',
};
const headerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '30px 20px',
  color: '#fff'
};

const logoStyle = {
  fontSize: '24px',
  color: 'black',
  fontWeight: 'bold'
};

const userStyle = {
  fontSize: '16px'
};

export default Header;

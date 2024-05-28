import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = () => {
  return (
    <header style={headerStyle}>
        <div style={IconStyle}>
        <i style={IconStyle} className="fa-brands fa-react"></i>
        </div>
      <div style={logoStyle}>LOGO</div>
      <div style={userStyle}>
      <i style={IconStyle} className="fa-solid fa-magnifying-glass"></i>
      <i style={IconStyle} className="fa-regular fa-heart"></i>
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
//   marginRight: '5px',
  padding: '0px 10px 0px 10px',
  color: 'black'
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

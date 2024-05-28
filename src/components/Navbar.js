import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={navStyle}>
      <ul style={ulStyle}>
        <li style={liStyle}>
          <Link to="/shop" style={linkStyle}>Shop</Link>
        </li>
        <li style={liStyle}>
          <Link to="/skills" style={linkStyle}>Skills</Link>
        </li>
        <li style={liStyle}>
          <Link to="/stories" style={linkStyle}>Stories</Link>
        </li>
        <li style={liStyle}>
          <Link to="/about" style={linkStyle}>About</Link>
        </li>
        <li style={liStyle}>
          <Link to="/contact" style={linkStyle}>Contact Us</Link>
        </li>
      </ul>
      <div style={seperator}></div>
    </nav>
    
  );
};

const navStyle = {
  padding: '10px 0'
};

const seperator = {
    height: '1px',
    width: '100%',
    // padding: '10px',
    backgroundColor: 'gray'
    };
const ulStyle = {
  listStyle: 'none',
  display: 'flex',
  justifyContent: 'center',
  textTransform: 'uppercase', // Corrected the typo
  marginbottom: 10,
  padding: 0
};

const liStyle = {
  margin: '0 15px'
};

const linkStyle = {
  textDecoration: 'none',
  fontWeight: 'bold',
  color: 'black'
};

export default Navbar;

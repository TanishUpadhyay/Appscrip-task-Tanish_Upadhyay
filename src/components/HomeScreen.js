import React, { useEffect, useState } from 'react';
import Product from './Product'; // Import the Product component
import FilterDropdown from './FilterDropdown'; // Import the FilterDropdown component

const HomeScreen = () => {
  const [selectedOption, setSelectedOption] = useState('Recommended');
  const [showFilters, setShowFilters] = useState(true);
  const [products, setProducts] = useState([]); // State to store products
  const [likedItems, setLikedItems] = useState(new Set()); // State to store liked items
  const options = ['Recommended', 'Newest First', 'Popular', 'Price: Low to High', 'Price: High to Low'];

  const filterOptions = {
    "IDEAL FOR": [
      { label: 'Men', value: 'men' },
      { label: 'Women', value: 'women' },
      { label: 'Babies & Kids', value: 'babies&kids' },
    ],
    "OCCASION": [
      { label: 'Casual', value: 'casual' },
      { label: 'Formal', value: 'formal' },
      { label: 'Party', value: 'party' },
    ],
    "WORK": [
      { label: 'Office', value: 'office' },
      { label: 'Home', value: 'home' },
      { label: 'Outdoor', value: 'outdoor' },
    ],
    "FABRIC": [
      { label: 'Cotton', value: 'cotton' },
      { label: 'Wool', value: 'wool' },
      { label: 'Silk', value: 'silk' },
    ],
    "SUITABLE FOR": [
      { label: 'Summer', value: 'summer' },
      { label: 'Winter', value: 'winter' },
      { label: 'All Seasons', value: 'allSeasons' },
    ]
  };

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  const handleLike = (productId) => {
    setLikedItems((prev) => {
      const newLikedItems = new Set(prev);
      if (newLikedItems.has(productId)) {
        newLikedItems.delete(productId);
      } else {
        newLikedItems.add(productId);
      }
      return newLikedItems;
    });
  };

  const handleFilterChange = (newFilter) => {
    // Implement your filtering logic here
    console.log('Selected filters:', newFilter);
  };

  useEffect(() => {
    async function getData() {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProducts(data);
    }
    getData();
  }, []);

  return (
    <div>
      <div style={containerStyle}>
        <h1 style={titleStyle}>Discover Our Products</h1>
        <p style={textStyle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis
        </p>
      </div>
      <div style={countContainer}>
        <div style={separator}></div>
        <div style={valueContainer}>
          <div style={ItemFilter}>
            <span>{products.length} items</span>
            <span style={filterToggleStyle} onClick={toggleFilters}>
              {showFilters ? (<div><i className="fa-solid fa-angle-left"></i>Hide filter</div>) : <div><i className="fa-solid fa-angle-right"></i>Show filter</div>}
            </span>
          </div>
          <div>
            <select style={dropdownStyle} value={selectedOption} onChange={handleChange}>
              {options.map((option) => (
                <option key={option} value={option} style={option === selectedOption ? boldStyle : optionsStyle}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div style={separator}></div>
      </div>
      <div style={contentStyle}>
        {showFilters && (
          <div style={filterStyle}>
            <h3>Filters</h3>
            {Object.entries(filterOptions).map(([title, options]) => (
              <div key={title}>
                <FilterDropdown
                  title={title}
                  options={options}
                  onFilterChange={handleFilterChange}
                />
                <div style={separator}></div>
              </div>
            ))}
          </div>
        )}
        <div style={showFilters ? productsStyleWithFilter : productsStyleFullWidth}>
          <h3>Products</h3>
          <div style={productsGridStyle(showFilters)}>
            {products.map((product) => (
              <Product 
                key={product.id} 
                product={product} 
                onLike={handleLike} 
                isLiked={likedItems.has(product.id)} 
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const containerStyle = {
  maxWidth: '600px',
  margin: '0 auto',
  padding: '20px',
  textAlign: 'center',
};

const ItemFilter = {
  width: '30%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px',
};

const valueContainer = {
  justifyContent: 'space-between',
  display: 'flex',
  alignItems: 'center',
  padding: '10px 0',
};

const countContainer = {
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '20px',
  margin: '0 10px',
  padding: '10px',
};

const separator = {
  height: '1px',
  width: '100%',
  backgroundColor: 'gray',
  margin: '10px 0',
};

const titleStyle = {
  fontSize: '44px',
  color: 'black',
  fontWeight: 'bold',
};

const textStyle = {
  fontSize: '16px',
  color: 'black',
  lineHeight: '1.5',
};

const dropdownStyle = {
  padding: '10px',
  borderRadius: '5px',
  border: '1px solid gray',
  fontSize: '16px',
};

const boldStyle = {
  fontWeight: 'bold',
};

const optionsStyle = {
  fontWeight: 'normal',
};

const filterToggleStyle = {
  cursor: 'pointer',
  color: '#808080',
  textTransform: 'uppercase',
  textDecoration: 'underline',
};

const contentStyle = {
  display: 'flex',
  padding: '20px',
};

const filterStyle = {
  width: '25%',
  padding: '10px',
  borderRight: '1px solid gray',
};

const productsStyleWithFilter = {
  width: '75%',
  padding: '10px',
};

const productsStyleFullWidth = {
  width: '100%',
  padding: '10px',
};

const productsGridStyle = (showFilters) => ({
  display: 'grid',
  gridTemplateColumns: showFilters ? 'repeat(3, 1fr)' : 'repeat(4, 1fr)',
  gap: '10px',
});

export default HomeScreen;

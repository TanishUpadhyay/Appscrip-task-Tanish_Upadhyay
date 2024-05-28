import React, { useState } from 'react';

const FilterDropdown = ({ title, options, onFilterChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState(new Set(options.map(option => option.value)));

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    setSelectedOptions(prev => {
      const newSet = new Set(prev);
      if (value === 'selectAll') {
        if (checked) {
          options.forEach(option => newSet.add(option.value));
        } else {
          newSet.clear();
        }
      } else {
        if (checked) {
          newSet.add(value);
        } else {
          newSet.delete(value);
        }
      }
      onFilterChange(newSet);
      return newSet;
    });
  };

  const isAllSelected = selectedOptions.size === options.length;

  return (
    <div style={dropdownStyle}>
      <div onClick={toggleDropdown} style={dropdownHeaderStyle}>
        <span>{title}</span>
        <span>{isOpen ? (<i class="fa-solid fa-angle-up"></i>) : (<i class="fa-solid fa-angle-down"></i>)}</span>
      </div>
      <div style={defaultChoiceStyle}>ALL</div>
      {isOpen && (
        <div style={dropdownContentStyle}>
          <label style={labelStyle}>
            <input
              type="checkbox"
              value="selectAll"
              checked={isAllSelected}
              onChange={handleCheckboxChange}
            />
            Select All
          </label>
          {options.map((option) => (
            <label key={option.value} style={labelStyle}>
              <input
                type="checkbox"
                value={option.value}
                checked={selectedOptions.has(option.value)}
                onChange={handleCheckboxChange}
              />
              {option.label}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

const dropdownStyle = {
  marginBottom: '10px',
};

const dropdownHeaderStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  cursor: 'pointer',
};

const defaultChoiceStyle = {
  fontSize: '14px',
  color: 'gray',
  marginTop: '5px',
};

const dropdownContentStyle = {
  marginTop: '10px',
};

const labelStyle = {
  display: 'block',
  margin: '5px 0',
};

export default FilterDropdown;

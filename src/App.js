import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import HomeScreen from './components/HomeScreen';

const App = () => {
  const [isLikedView, setIsLikedView] = useState(false);

  const handleToggleLikedView = (isLikedView) => {
    setIsLikedView(isLikedView);
  };

  return (
    <BrowserRouter>
      <Header onToggleLikedView={handleToggleLikedView} />
      <Navbar />
      <Routes>
        {/* Pass isLikedView as prop to HomeScreen */}
        <Route exact path="/" element={<HomeScreen isLikedView={isLikedView} />} />
        {/* Add more routes as needed */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;

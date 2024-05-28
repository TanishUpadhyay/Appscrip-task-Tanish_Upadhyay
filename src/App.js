import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';import Header from './components/Header';
import Navbar from './components/Navbar';
import HomeScreen from './components/HomeScreen';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HomeScreen/>} />
        {/* Add more routes as needed */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;

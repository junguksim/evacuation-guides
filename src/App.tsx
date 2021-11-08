import React from 'react';
import './App.css';
import GuideList from './components/GuideList';
import Home from './components/Home';
import {  Route, Routes } from 'react-router-dom';
import GuideDetail from './components/GuideDetail';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='guides' element={<GuideList />} />
      <Route path='guides/:id' element={<GuideDetail />} />
    </Routes>
    
  );
} 

export default App;

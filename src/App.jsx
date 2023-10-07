import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './Pages/About/About';
import Home from './Pages/Home/Home';
import Settings from './Pages/Settings/Settings';

const App = () => (
  <>
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route exact path='/about' element={<About />}></Route>
        <Route exact path='/settings' element={<Settings />}></Route>
      </Routes>
    </BrowserRouter>
  </>
);

export default App;

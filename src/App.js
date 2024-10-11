import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import React, { useState } from 'react';
import './styles/Home.css'
import Login from './components/Login';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//import icon
import callIcon from './img/icons/telephone-call.png'
import fishIcon from './img/icons/fish.png'
import moneyIcon from './img/icons/money.png'
import timeIcon from './img/icons/back-in-time.png'
//import mitra
import gojek from './img/mitra/gojek.png'
import alfamart from './img/mitra/alfamart.png'
import dana from './img/mitra/dana.jpg'
import foodhall from './img/mitra/foodhall.png'
import indomaret from './img/mitra/indomaret.png'

import nelayanImage from './img/1728568398779.jpeg'


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* <Home></Home> */}
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/Login" element={<Login/>} />
        </Routes>
      </Router>
      {/* <Login></Login> */}

    </div>
  );
}

export default App;

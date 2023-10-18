import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Splash from '../pages/SplashPage/Splash';
import Home from '../pages/Homepage/Home';
import Join from '../pages/Auth/JoinPage/Join';
import Login from '../pages/Auth/LoginPage/Login';
import Post from '../pages/PostPage/Post';

function Routing() {
  return (
    <Routes>
      <Route path='/Splash' element={<Splash />} />
      <Route path='/' element={<Home />} />
      <Route path='/Join' element={<Join />} />
      <Route path='/Login' element={<Login />} />
      <Route path='/Post' element={<Post />} />
    </Routes>
  );
}

export default Routing;

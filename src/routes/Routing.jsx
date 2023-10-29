import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Splash from '../pages/SplashPage/Splash';
import Home from '../pages/Homepage/Home';
import Join from '../pages/Auth/JoinPage/Join';
import Login from '../pages/Auth/LoginPage/Login';
import Post from '../pages/PostPage/Post';
import PostList from '../pages/PostPage/PostList';
import PostForm from '../pages/PostForm/PostForm';
import FormIngredients from '../pages/PostForm/FormIngredients';

function Routing() {
  return (
    <Routes>
      <Route path='/Splash' element={<Splash />} />
      <Route path='/' element={<Home />} />
      <Route path='/Join' element={<Join />} />
      <Route path='/Login' element={<Login />} />
      <Route path='/Post' element={<Post />} />
      <Route path='/PostList' element={<PostList />} />
      <Route path='/PostForm' element={<PostForm />} />
      <Route path='/FormIngre' element={<FormIngredients />} />
    </Routes>
  );
}

export default Routing;

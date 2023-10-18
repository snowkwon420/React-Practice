import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Splash from './pages/SplashPage/Splash';
import Main from './pages/MainPage/Main';
import GlobalStyle from './style/GlobalStyle';
import StartSplash from './pages/SplashPage/StartSplash';

function App() {
  return (
    <>
      <GlobalStyle />
      <StartSplash />
    </>
  );
}
export default App;

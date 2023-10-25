import React, { useState, useEffect } from 'react';
import Splash from './Splash'; // Splash 컴포넌트의 경로
import Main from '../MainPage/Main'; // Main 컴포넌트의 경로

function StartSplash() {
  const [showMain, setShowMain] = useState(false);

  // 5초 후에 Main 컴포넌트를 표시
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMain(true);
    }, 2300);

    return () => clearTimeout(timer);
  }, []);

  // return <div>{showMain ? <Main /> : <Splash />}</div>;
  return <Main />;
}

export default StartSplash;

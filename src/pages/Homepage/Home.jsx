import React, { useState } from 'react';
import homeImg from '../../assets/img/index.jpg';

function Home() {
  return (
    <>
      <img src={homeImg} alt='homeImg' style={imgStyle} />
      <p style={titleStyle}>가성비 장인들의 매 '끼' 자랑</p>
    </>
  );
}

const imgStyle = {
  marginTop: '2em',
};

const titleStyle = {
  fontFamily: 'yg-jalnan',
  fontSize: '3em',
  color: '#ff7028',
  textAlign: 'center',
  marginTop: '30px',
};

export default Home;

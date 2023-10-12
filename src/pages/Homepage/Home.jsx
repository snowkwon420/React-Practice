import React from 'react';
import homeImg from '../../assets/img/index.jpg';

function Home() {
  return (
    <>
      <hr style={hrStyle} />
      <img src={homeImg} alt='homeImg' />
      <p style={titleStyle}>가성비 장인들의 매 '끼' 자랑</p>
    </>
  );
}

const hrStyle = {
  width: '100%',
  height: '1px',
  backgroundColor: 'gray',
  border: '0',
  opacity: '0.25',
};

const titleStyle = {
  fontFamily: 'yg-jalnan',
  fontSize: '3em',
  color: '#ff7028',
  textAlign: 'center',
  marginTop: '30px',
};

export default Home;

import React from 'react';

function Footer() {
  return (
    <div style={footerStyle}>
      <span style={footerlogo}>한끼얼마</span>
      <br />ⓒ 2023. 2조 all rights reserved.
    </div>
  );
}

const footerStyle = {
  padding: '20px 0 3px',
  marginTop: '3rem',
  width: '100%',
  fontSize: '0.5em',
  textAlign: 'center',
  fontStyle: 'normal',
  color: '#ff7028',
  clear: 'both',
};

const footerlogo = {
  display: 'inline-block',
  textDecoration: 'none',
  color: '#ff7028',
  fontSize: '2.5em',
  paddingTop: '15px',
  textAlign: 'center',
  fontFamily: 'yg-jalnan',
};

export default Footer;

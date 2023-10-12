import React from 'react';

function Footer() {
  return (
    <div style={footerStyle}>
      ⓒ 2023. 2조 all rights reserved.
      <br />
      <span id='footerlogo'>
        <p>한끼얼마</p>
      </span>
    </div>
  );
}

const footerStyle = {
  padding: '20px 0 15px',
  position: 'fixed',
  width: '100%',
  bottom: '0',
  backgroundColor: '#ff7028',
  fontSize: '0.9em',
  textAlign: 'center',
  fontStyle: 'normal',
  color: '#fff',
  clear: 'both',
};

export default Footer;

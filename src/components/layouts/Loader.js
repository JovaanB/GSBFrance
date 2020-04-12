import React from 'react';
import Loading from 'react-loading';

const Loader = () => (
  <div
    style={{
      alignItems: 'center',
      bottom: 0,
      color: '#fa4248',
      display: 'flex',
      fontSize: '1.5rem',
      justifyContent: 'center',
      left: 0,
      position: 'fixed',
      right: 0,
      top: 0,
    }}
  >
    <Loading type="spin" color="#fa4248" height="5%" width="5%" />
  </div>
);

export default Loader;

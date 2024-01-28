// Loader.js
import React from 'react';
import { Audio } from 'react-loader-spinner';
<Audio
  height="80"
  width="80"
  radius="9"
  color="green"
  ariaLabel="loading"
  wrapperStyle
  wrapperClass
/>;
import './style.css';

const Loader = () => {
  return (
    <div className="loader">
      <Audio type="Oval" color="#00BFFF" height={50} width={50} />
    </div>
  );
};

export default Loader;

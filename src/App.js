import React from 'react';
// import logo from './logo.svg';
import './App.css';

import Canvas from'./Canvas';

function App() {
  
  return (
    <Canvas
      width={window.innerWidth * 0.999}
      height={window.innerHeight * 0.997}
    />
  );
}

export default App;

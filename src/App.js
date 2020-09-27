import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Canvas from'./Canvas';
import Menu from './Menu';

function App() {
    
  return (
    <div>
      <Menu />
      <Canvas
        width={window.innerWidth * 0.999}
        height={window.innerHeight * 0.997}
      />
    </div>
  );
}

export default App;

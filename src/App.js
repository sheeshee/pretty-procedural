import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Canvas from'./Canvas';
import Menu from './Menu';
// import Circles from './engines/Circles'
import Spiral from './engines/Spiral'


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      engine: Spiral
    }
    this.setEngine = this.setEngine.bind(this);
  };

  setEngine(engine){
    this.setState(state => ({
      engine: engine
    }));
  };

  render(){
    return (
      <div className="container"> 
        <Menu setEngine={this.setEngine} engine={this.state.engine}/>
        <Canvas
          width={window.innerWidth * 0.999}
          height={window.innerHeight * 0.997275}
          engine={this.state.engine}
          />
      </div>
    );}
}

export default App;

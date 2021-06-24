import logo from './logo.svg';
import React from 'react';
import Squares from './components/squares/SquareAnimations';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      w: '100vw',
      h: '100vh',
      backgroundColor: '#030D26',
      position: 'relative'
    }
  }

  render(){
    var WindowWidth = window.innerWidth;
    var WidthRound = Math.ceil(WindowWidth / 100);
    var WindowHeight = window.innerHeight;
    var HeightRound = Math.ceil(WindowHeight / 100);
    const TestArray = [];
    for (let indexHeight = 0; indexHeight < HeightRound; ++indexHeight) {
      for (let indexWidth = 0; indexWidth < WidthRound; ++indexWidth) {
        var SquareX = indexWidth * 100;
        var SquareY = indexHeight * 100;
        TestArray.push({ x: SquareX, y: SquareY});
      }
    }
    let AppOutput =
      <div>
        <div style={{width:this.state.w, height: this.state.h, backgroundColor: this.state.backgroundColor,position: this.state.position}}>
            {TestArray.map(({x,y})=> 
              <Squares x={x} y={y}/>)}
        </div>
      </div>
    return(
      <div>
          {this.props.children}
          {AppOutput}
      </div>
    );
  }
}

export default App;

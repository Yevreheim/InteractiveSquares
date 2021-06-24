import {useSpring, animated} from 'react-spring'
import React from 'react';
import { useState } from 'react';

function RandomInt(max) {
  return Math.floor(Math.random() * max);
}

function Squares(props) {
    const [flipped, set] = useState(false);
    const {transform} = useSpring({
      transform: `perspective(600px) 
                  rotateX(${flipped ? 180 : 0}deg) 
                  rotateZ(${flipped ? 180 : 0}deg)`,
      config: { mass: 5, tension: 1000, friction: 80 },
    })

    const ColourArray = ['#46e891', '#E5446D', '#FF8966', '#FEC9F1', '#FFC233', '#4381C1'];
    var RandomColour = ColourArray[RandomInt(6)];
    
    return (
      <div onMouseEnter={() => set(state => !state)}>
        <animated.div
          style={{
            width: 90,
            height: 90,
            backgroundColor: RandomColour,
            borderRadius: 16,
            position: 'fixed',
            bottom: props.y,
            left: props.x,
            transform 
          }}
        />
      </div>
      
    )
  }

  export default Squares;
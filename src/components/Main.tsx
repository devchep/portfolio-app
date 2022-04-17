import React, { useEffect, useRef } from 'react';
import ThreeCanvas from '../classes/ThreeCanvas';

function Main() {
  const canvasRef = useRef(document.createElement("div"))

  useEffect(() => {
    new ThreeCanvas({
      mountElement: canvasRef.current, 
      width: window.innerWidth,
      height: window.innerHeight
    });

  }, []);


  return (
    <div className="App">
      <div ref={canvasRef} />
    </div>
  );
}

export default Main;

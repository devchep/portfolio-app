import React, { useEffect, useRef } from 'react';
import ThreeCanvas from '../classes/ThreeCanvas';

function ThreeBackground() {
  const canvasRef = useRef(document.createElement("div"))

  useEffect(() => {
    new ThreeCanvas({
      mountElement: canvasRef.current, 
      width: window.innerWidth,
      height: window.innerHeight
    });

  }, []);


  return (
    <div className="background" ref={canvasRef}></div>
  );
}

export default ThreeBackground;

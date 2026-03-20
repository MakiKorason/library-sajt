import React, { useState, useEffect } from 'react';
import './AnimatedCounter.css';

const AnimatedCounter = ({ end, duration = 2000, title, icon }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime = null;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [end, duration]);

  return (
    <div className="animated-counter">
      <div className="counter-icon">{icon}</div>
      <div className="counter-content">
        <div className="counter-number">{count.toLocaleString()}</div>
        <div className="counter-title">{title}</div>
      </div>
      <div className="counter-bar">
        <div 
          className="counter-progress" 
          style={{ width: `${(count / end) * 100}%` }}
        ></div>
      </div>
    </div>
  );
};

export default AnimatedCounter;




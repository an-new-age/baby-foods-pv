import React, { useState, useEffect } from 'react';

const CountdownBar = () => {
  const [timeLeft, setTimeLeft] = useState({ minutes: 49, seconds: 34 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        const totalSeconds = prevTime.minutes * 60 + prevTime.seconds - 1;
        
        if (totalSeconds <= 0) {
          clearInterval(timer);
          return { minutes: 0, seconds: 0 };
        }
        
        return {
          minutes: Math.floor(totalSeconds / 60),
          seconds: totalSeconds % 60
        };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = () => {
    const min = String(timeLeft.minutes).padStart(2, '0');
    const sec = String(timeLeft.seconds).padStart(2, '0');
    return `${min}:${sec}`;
  };

  return (
    <div className="countdown-bar-fixed">
      <span>OFERTA ESPECIAL TERMINA EM:</span>
      <span className="countdown-timer" id="top-countdown-timer">
        {formatTime()}
      </span>
    </div>
  );
};

export default CountdownBar;
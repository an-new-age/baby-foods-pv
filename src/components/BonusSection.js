import React, { useState, useEffect } from 'react';

const BonusSection = ({bonuses}) => {
  const [timeLeft, setTimeLeft] = useState({ minutes: 12, seconds: 34 });
  
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
    <section className="bonus-section container">
      <h2 className="bonus-title">
        <span>{bonuses.length} Bônus que você recebe junto</span>
      </h2>
      <br />
      <br />
      
      <div className="bonus-card-image">
        <img loading="lazy" src='assets/bonus/1.webp' alt="Bônus" />
      </div>
      <div class="bonus-container"> 
        <div class="bonus-line">✓ Cardápios prontos por idade</div>
        <div class="bonus-line">✓ Checklist da introdução alimentar</div>
        <div class="bonus-line">✓ Guia de texturas por fase</div>
        <div class="bonus-line">✓ Sugestões para bebês seletivos</div>
        <div class="bonus-line">✓ Calendário mensal de planejamento</div>
      </div>
      
      
    </section>
  );
};

export default BonusSection;
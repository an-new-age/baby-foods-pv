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
        <span>{bonuses.length} Bônus Incrívei{bonuses.length > 1 ? 's' : ''}</span> para quem comprar nos próximos{' '}
        <span id="bonusTimer">{formatTime()}</span>{' '}minutos
      </h2>
      
      {bonuses.map((bonus, index) => (
        <div key={index} className="bonus-card">
          <div className="bonus-card-image">
            <img loading="lazy" src={bonus.image} alt={`Bônus ${index + 1}`} />
          </div>
          <div className="bonus-card-content">
            <span className="bonus-tag">{bonus.tag}</span>
            <h4>{bonus.title}</h4>
            <p className="price">
              Valor: <del>{bonus.price}</del> <span className="free">→ Grátis!</span>
            </p>
            <p>{bonus.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default BonusSection;
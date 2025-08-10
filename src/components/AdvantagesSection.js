import React from 'react';

const AdvantagesSection = ({advantages}) => {
  
  return (
    <section className="features-section container">
      <h2 style={{color: '#E11D48', fontSize: '1.7rem', textAlign: 'left'}}>"O que é o Comidinhas do Bebê?"</h2>
      <div>
        <span>São mais de 100 receitas nutritivas, divididas por fase e horário, pensadas para o paladar e o desenvolvimento do seu bebê.</span>
        <br />
        <span>Testadas, aprovadas e feitas com muito amor.</span>
      </div>
      <div className="advantages-grid">
        {advantages.map((advantage, index) => (
          <div key={index} className="advantage-card">
            {<span dangerouslySetInnerHTML={{__html: advantage.icon}} />}
            <h4>{advantage.title}</h4>
            <p>{advantage.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AdvantagesSection;
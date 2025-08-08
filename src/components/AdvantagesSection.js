import React from 'react';

const AdvantagesSection = ({advantages}) => {
  
  return (
    <section className="features-section container">
      <h3>Por que escolher nosso material?</h3>
      <div className="advantages-grid">
        {advantages.map((advantage, index) => (
          <div key={index} className="advantage-card">
            {<i dangerouslySetInnerHTML={{__html: advantage.icon}} />}
            <h4>{advantage.title}</h4>
            <p>{advantage.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AdvantagesSection;
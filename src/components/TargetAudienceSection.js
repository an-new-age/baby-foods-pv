import React from 'react';

const TargetAudienceSection = ({targets}) => {
  
  return (
    <section className="container">
      <h2 style={{ fontSize: '35px', textAlign: 'center', marginBottom: '30px' }}>
        {targets.title}
      </h2>
      <ul className="features-list">
        {targets.items.map((item, index) => (
          <li key={index}>
            <i className="fas fa-check-circle icon"></i>
            <strong>{item}</strong>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TargetAudienceSection;
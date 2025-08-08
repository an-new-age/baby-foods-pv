import React from 'react';

const StepsSection = () => {
  const steps = [
    {
      number: '1',
      title: 'Escolha seu plano',
      description: 'Selecione entre o plano básico ou VIP'
    },
    {
      number: '2',
      title: 'Pagamento seguro',
      description: 'Pague com cartão, PIX ou boleto'
    },
    {
      number: '3',
      title: 'Acesso imediato',
      description: 'Receba o material no seu e-mail'
    },
    {
      number: '4',
      title: 'Comece a estudar',
      description: 'Baixe o PDF e imprima se preferir'
    }
  ];

  return (
    <section className="bonus-section container" style={{ marginTop: '-90px' }}>
      <h2 style={{ fontSize: '35px', textAlign: 'center', marginTop: '16px' }}>
        Como funciona?
      </h2>
      <div className="advantages-grid">
        {steps.map((step, index) => (
          <div key={index} className="advantage-card">
            <div className="icon" style={{ fontSize: '3rem' }}>{step.number}</div>
            <h4>{step.title}</h4>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StepsSection;
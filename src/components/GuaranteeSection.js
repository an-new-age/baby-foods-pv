import React from 'react';

const GuaranteeSection = () => {
  return (
    <section style={{ textAlign: 'center', marginTop: '48px', marginBottom: '48px', padding: '16px' }}>
      <h1 style={{ fontSize: '32px' }}>Você não tem nada a perder!</h1>
      <br/>
      <h3>Garantia incondicional de 30 dias!</h3>
      <br/>
      <img 
        loading="lazy"
        style={{ width: 'auto', height: '360px' }}
        src="assets/selo-garantia.png" 
        alt="Selo de garantia" 
      /> 
      <br/>
      <p style={{ fontWeight: 900 }}>
        Se você não amar, devolvemos 100% do seu dinheiro. Simples assim.
      </p>
      <br/>
      <p>
        Experimente o eBook por até 30 dias. Se não ficar satisfeita, basta enviar um email e devolvemos integralmente o valor pago, sem perguntas.
      </p>
      <br/>
      <p>
        Risco zero para você. Toda a confiança no nosso produto.
      </p>
    </section>
  );
};

export default GuaranteeSection;
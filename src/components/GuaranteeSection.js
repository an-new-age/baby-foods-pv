import React from 'react';

const GuaranteeSection = () => {
  return (
    <section style={{ textAlign: 'center', marginTop: '48px', marginBottom: '48px', padding: '16px' }}>
      <h1 style={{ fontSize: '32px' }}>Você não tem nada a perder!</h1>
      <br/>
      <h3>Garantia incondicional de 14 dias!</h3>
      <br/>
      <img 
        loading="lazy"
        style={{ width: 'auto', height: '360px' }}
        src="assets/selo-garantia.png" 
        alt="Selo de garantia" 
      /> 
      <br/>
      <p style={{ fontWeight: 900 }}>
        Tenho plena confiança na qualidade e utilidade do nosso material de questões, e para provar isso vou te dar 14 dias de garantia incondicional. Simples, direta e honesta:
      </p>
      <br/>
      <p>
        Se dentro de 14 dias após sua compra, você não estiver completamente satisfeito(a) com este material, basta nos enviar um e-mail solicitando o reembolso. Devolveremos 100% do seu investimento, sem perguntas e sem complicações.
      </p>
      <br/>
      <p>
        Adquira agora mesmo com total segurança, sabendo que seu filho terá duas semanas completas para estudar com nosso material!
      </p>
    </section>
  );
};

export default GuaranteeSection;
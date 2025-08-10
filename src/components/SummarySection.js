import React from 'react';

const SummarySection = ({ctaButtonText}) => {
  return (
    <div className="bonus-card" style={{ margin: '16px', padding: '32px', textAlign: 'center' }}>
      <h2>Rolou a página toda pro final?</h2>
      <h3>Então leia esse resumo...</h3>
      <div style={{ textAlign: 'left' }}> 
        <p>O que você está vendo aqui é a chave da aprovação do seu filho, a oportunidade dele treinar e se destacar com um material de qualidade para o dia da prova.</p> 
        <br/>
        <p>São questões prontas e respondidas com explicação passo a passo com a didática cuidadosamente pensada para uma criança a partir do quarto ano entender e fixar da melhor maneira possível!</p>
        <br/>
        <p>E o melhor: você leva tudo isso por apenas R$10, com garantia de 14 dias para testar sem risco.</p>
        <br/>
        <p>Ao finalizar a compra, o acesso de todos os seus produtos chega direto no seu e-mail.</p>
      </div>
      {ctaButtonText && <a href="#vipPlanCTA" class="resume-cta-button" style={{border: 'solid 2px white'}}>
        {ctaButtonText}
      </a>}
    </div>
  );
};

export default SummarySection;
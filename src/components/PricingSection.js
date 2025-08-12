import React from 'react';

const PricingSection = () => {
  return (
    <section className="pricing-section" id="pricing">
      <h2 className="section-title">Escolha a Melhor Oferta Para Você</h2>
      <div className="pricing-container">
        <div className="pricing-card">
          {/* <h3><strong>Básico</strong></h3> */}
          <p className="price-old">De <del>R$37,00</del> por</p>
          <p className="price-new">R$10</p>
          <hr />
          <ul>
            <li><strong>✅ 10 Receitinhas Nutritivas para seu Bebê</strong></li>
          </ul>
          <a href="https://pay.kiwify.com.br/JaEkBps" className="cta-button">
            Quero a oferta simples
          </a>
          <br />
           <p style={{ fontWeight: 900 }}>
            {/*<strong>
              <span style={{ color: '#ff0000' }}>MAS ANTES DE COMPRAR...</span>
            </strong> <br/>
            Temos uma oferta <span style={{ color: 'rgb(212, 148, 28)' }}>AINDA MAIS</span> vantajosa para você! {' '}
            <br /> */}
              Leve mais e pague menos com o kit completo <span style={{ color: 'rgb(212, 148, 28)' }}>
              <br/>
              Mega Kit!</span>👇
          </p>
        </div>
        
        <div className="pricing-card pro">
          <h5 className="best-seller-tag"><strong>Mais Vendido</strong></h5>
          <h3><strong>Mega Kit</strong></h3>
          <img 
            loading="lazy" s
            src="assets/vip-plan.webp" 
            alt="Mockup do Pack Pro" 
            style={{ maxWidth: '90%', margin: 'auto', borderRadius: '16px' }}
          />
          <p className="price-old">De <del>R$97,00</del> por</p>
          <p className="price-new">R$37</p>
          <hr />
          <ul>
            <li><strong>✅ Mais de 100 Receitinhas Nutritivas Divididas por Fase e Horário</strong></li>
            <li><strong>✅ Cardápios prontos por idade</strong></li>
            <li><strong>✅ Checklist da introdução alimentar</strong></li>
            <li><strong>✅ Guia de texturas por fase</strong></li>
            <li><strong>✅ Sugestões para bebês seletivos</strong></li>
            <li><strong>✅ Calendário mensal de planejamento</strong></li>
            <li><strong>✅ Acesso as atualizações</strong></li>
            <li><strong>✅ Garantia de 30 Dias</strong></li>
            <li><strong>✅ Suporte por Whatsapp</strong></li>
          </ul>
          <a href="https://pay.kiwify.com.br/8gso4A3" id="vipPlanCTA" className="cta-button">
            👉 Quero as receitinhas agora! 🍎
          </a>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
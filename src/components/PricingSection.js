import React from 'react';

const PricingSection = () => {
  return (
    <section className="pricing-section" id="pricing">
      <h2 className="section-title">Escolha a Melhor Oferta Para Você</h2>
      <div className="pricing-container">
        <div className="pricing-card">
          <h3><strong>Plano Basic</strong></h3>
          <p className="price-old">De <del>R$37,00</del> por</p>
          <p className="price-new">R$10</p>
          <hr />
          <ul>
            <li><strong>✅ 20 Questões Colégios Militares só com gabarito - 6º ano - Exército</strong></li>
          </ul>
          <a href="https://pay.kiwify.com.br/JaEkBps" className="cta-button">
            Quero a oferta simples
          </a>
          <br />
          <p style={{ fontWeight: 900 }}>
            <strong>
              <span style={{ color: '#ff0000' }}>MAS ANTES DE COMPRAR...</span>
            </strong> <br/>
            Temos uma oferta <span style={{ color: 'rgb(212, 148, 28)' }}>AINDA MAIS</span> vantajosa para você! {' '}
            {/* <br /> */}
            Leve mais e pague menos com nossa <span style={{ color: 'rgb(212, 148, 28)' }}>MEGA OFERTA!</span>👇
          </p>
        </div>
        
        <div className="pricing-card pro">
          <h5 className="best-seller-tag"><strong>Mais Vendido</strong></h5>
          <h3><strong>Plano Vip</strong></h3>
          <img 
            loading="lazy" 
            src="assets/menino-mapa-mental.jpg" 
            alt="Mockup do Pack Pro" 
            style={{ maxWidth: '80%', margin: 'auto', borderRadius: '16px' }}
          />
          <p className="price-old">De <del>R$87,00</del> por</p>
          <p className="price-new">R$27</p>
          <hr />
          <ul>
            <li><strong>✅ Combo 100 Questões Colégios Militares com explicação didática e detalhada - 6º ano - Exército</strong></li>
            <li><strong>✅ Combo 400 Questões Colégios Militares com gabarito - 6º ano - Exército</strong></li>
            <li><strong>✅ Como não cair nas pegadinhas das questões - entenda a mente da Banca</strong></li>
            <li><strong>✅ Mapa de conteúdo dos assuntos de português e matemática que mais caem na prova</strong></li>
            <li><strong>✅ Como os pais podem fazer o filho ter motivação pra gostar de estudar</strong></li>
            <li><strong>✅ Acesso as atualizações</strong></li>
            <li><strong>✅ Garantia de 15 Dias</strong></li>
            <li><strong>✅ Suporte por Whatsapp</strong></li>
          </ul>
          <a href="https://pay.kiwify.com.br/8gso4A3" id="vipPlanCTA" className="cta-button">
            Acessar as Questões
          </a>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
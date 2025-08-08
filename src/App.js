import React from 'react';
import './styles/App.css';
import CountdownBar from './components/CountdownBar';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import TestimonialsCarousel from './components/TestimonialsCarousel';
import AdvantagesSection from './components/AdvantagesSection';
import TargetAudienceSection from './components/TargetAudienceSection';
import StepsSection from './components/StepsSection';
import BonusSection from './components/BonusSection';
import PricingSection from './components/PricingSection';
import SummarySection from './components/SummarySection';
import GuaranteeSection from './components/GuaranteeSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';

const infos = {
  heroSection: {
    headline: '<span style="color: red;">🍎Comidinhas do Bebê🍐</span>',
    subHeadline: '+100 receitas nutritivas e emocionantes para transformar a alimentação do seu bebê',
    ctaButtonText: 'QUERO TRANSFORMAR A ALIMENTAÇÃO DO MEU BEBÊ',
    vslPath: './assets/vsl1.mp4'
  },
  receiveList: [
    'Mães com bebês entre 6 e 12 meses',
    'Que sentem culpa, cansaço ou insegurança',
    'Que tentaram de tudo e ainda não viram resultado',
    'Que querem transformar a hora da comida em um momento feliz',
    'Mães que trabalham e precisam de praticidade',
    'Garantia incondicional de 30 dias',
  ],
  testimonialsPaths: {
    title: "Depoimentos",
    items: [
      './assets/depoimento (1).png',
      './assets/depoimento (2).png',
      './assets/depoimento (3).png',
      './assets/depoimento (4).png',
      './assets/depoimento (5).png'
    ]
  },
  insideEbook: {
    title: "Veja por dentro do eBook!",
    items: [
      './assets/content/content (1).png',
      './assets/content/content (1).jpg',
      './assets/content/content (2).jpg',
      './assets/content/content (3).jpg',
      './assets/content/content (4).jpg',
      './assets/content/content (5).jpg',
      './assets/content/content (6).jpg',
      './assets/content/content (7).jpg',
      './assets/content/content (8).jpg',
    ]
  },
  advantages: [
    {
      icon: '<span style="font-size: 2.5rem;">👶</span>',
      title: 'Por Idade',
      description: 'Receitas adaptadas para cada fase do desenvolvimento'
    },
    {
      icon: '<span style="font-size: 2.5rem;">🥄</span>',
      title: 'Por Textura',
      description: 'Do mais lisinho ao mais texturizado, respeitando o desenvolvimento'
    },
    {
      icon: '<span style="font-size: 2.5rem;">🍲</span>',
      title: 'Por Refeição',
      description: 'Café da manhã, almoço, lanche e jantar completos'
    }
  ],
  targets: {
    title: 'Para quem é?',
    items: [
      'Mães com bebês entre 6 e 12 meses',
      'Que sentem culpa, cansaço ou insegurança',
      'Que tentaram de tudo e ainda não viram resultado',
      'Que querem transformar a hora da comida em um momento feliz',
      'Mães que trabalham e precisam de praticidade',
      'Garantia incondicional de 7 dias',
    ]
  },
  bonuses: [
    {
      tag: 'BÔNUS 1',
      title: 'Como não cair nas pegadinhas das questões',
      price: 'R$37,00',
      description: 'Guia teórico de tipos de pegadinhas que a Banca costuma por na prova para seu filho ficar atento.',
      image: 'assets/pegadinha.jpg'
    },
    {
      tag: 'BÔNUS 2',
      title: 'Mapa de conteúdo',
      price: 'R$37,00',
      description: 'Veja quais são os assuntos de português e matemática que mais caem na prova, para poder acertar mais questões de maneira inteligente!',
      image: 'assets/mapa-mental.webp'
    },
    {
      tag: 'BÔNUS 3',
      title: 'Como fazer seu filho gostar do estudo',
      price: 'R$37,00',
      description: 'Guia embasado em psicologia com truques simples para fazer seu filho ter interesse e aprender a gostar de estudar!',
      image: 'assets/fml-flz.webp'
    }
  ],
  faqs: [
    { 
      pergunta: "O material está atualizado?", 
      resposta: "Sim, a seleção das questões foi feita com base nas provas mais recentes entre 2010 e 2019, garantindo que o conteúdo esteja alinhado com os temas atuais." 
    },
    { 
      pergunta: "A apostila é indicada para qual série?", 
      resposta: "A apostila foi desenvolvida para crianças a partir do 4º ano do ensino fundamental, que estão se preparando para o ingresso no 6º ano dos Colégios Militares." 
    },
    { 
      pergunta: "Como recebo o material?", 
      resposta: "Assim que a compra for confirmada, você recebe o acesso aos itens diretamente no seu e-mail, podendo baixar e usar imediatamente." 
    },
    { 
      pergunta: "Posso imprimir?", 
      resposta: "Claro! O material está em formato PDF, ideal para ser impresso ou utilizado em qualquer dispositivo eletrônico." 
    },
    { 
      pergunta: "As questões foram elaboradas pelo Colégio Militar?", 
      resposta: "Sim! As 500 questões foram retiradas de provas anteriores aplicadas nos Colégios Militares, proporcionando um treino fiel ao que realmente cai na prova." 
    },
    { 
      pergunta: "O conteúdo é separado por disciplinas?", 
      resposta: "Sim, as questões estão organizadas por disciplina — português e matemática — para facilitar o estudo por assunto." 
    },
    { 
      pergunta: "É necessário algum conhecimento prévio?", 
      resposta: "A criança deve ter no mínimo noções básicas do conteúdo do 4º ano e 5º ano, já que as questões acompanham o nível exigido nos concursos para o 6º ano." 
    },
  ]
}

function App() {
  return (
    <div className="App">
      {/* <CountdownBar /> */}
      <HeroSection {...infos.heroSection} />
      <div style={{ padding: '16px' }}>
        <h2 style={{color: '#E11D48'}}>"Meu bebê não quer comer... o que eu faço?"</h2>
        <br />
        <span>Se você sente um aperto no peito cada vez que ele empurra o pratinho...</span>
        <br />
        <span>Se já chorou escondida depois de mais uma tentativa frustrada...</span>
        <br />
        <span>Se sente culpa por achar que está falhando...</span>
        <br />
        <strong>Você não está sozinha.</strong>
        <br />
        <br />
        <div style={{
            backgroundColor: '#ecf1fe', 
            padding: '20px', 
            fontSize: '15px',
            borderLeft: 'solid #E11D48 4px'
          }}> 
          <em>Esse eBook foi feito <strong>para mães</strong> que só querem ver seus filhos crescendo saudáveis, felizes e bem alimentados.</em>
        </div>
        <br />
      </div>
      <AdvantagesSection advantages={infos.advantages} />
      <TargetAudienceSection targets={infos.targets} />
      <TestimonialsCarousel {...infos.insideEbook} />
      {/* <FeaturesSection receiveList={infos.receiveList} /> */}
      <TestimonialsCarousel {...infos.testimonialsPaths} />
      {/* <StepsSection /> */}
      <BonusSection bonuses={infos.bonuses} />
      <PricingSection />
      <SummarySection ctaButtonText={infos.heroSection.ctaButtonText } />
      <GuaranteeSection />
      <FAQSection faqs={infos.faqs} />
      <Footer />
    </div>
  );
}

export default App;
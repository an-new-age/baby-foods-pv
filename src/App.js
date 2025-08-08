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
    ctaButtonText: 'QUERO GARANTIR A APROVAÇÃO',
    vslPath: './assets/vsl1.mp4'
  },
  receiveList: [
    '500 Questões de matemática de Colégios Militares - 6º ano',
    'Gabarito com as respostas',
    'Respostas comentadas, explicadas e detalhadas com didática',
    'Garantia incondicional de 15 dias',
  ],
  testimonialsPaths: [
    './assets/depoimento (1).png',
    './assets/depoimento (2).png',
    './assets/depoimento (3).png',
    './assets/depoimento (4).png',
    './assets/depoimento (5).png'
  ],
  advantages: [
    {
      icon: '<i class="fas fa-star icon"></i>',
      title: 'Certeza do caminho',
      description: 'Tenha certeza que está guiando seu filho pelo melhor caminho rumo a aprovação na prova!'
    },
    {
      icon: '<i class="fas fa-heart icon"></i>',
      title: 'Questões Selecionadas',
      description: 'Questões selecionadas a dedo - seu filho vai treinar com questões e respostas que já caíram, isso aumenta muito a chance de aprovação!'
    },
    {
      icon: '<i class="fas fa-surprise icon"></i>',
      title: 'Única oportunidade',
      description: 'Dê a oportunidade do seu filho ter uma educação superior, se destacar na vida e ser alguém. Que pai e mãe não sonham com um filho bem sucedido? Isso começa na infância com uma educação de qualidade.'
    }
  ],
  targets: {
    title: 'Para quem são essas questões?',
    items: [
      'Famílias que querem uma preparação de alto nível, mas de forma mais acessível',
      'Pais que buscam uma educação de excelência, com disciplina e valores',
      'Crianças e pré-adolescentes com grande potencial, que só precisam do direcionamento certo',
      'Pais que se envolvem e estudam junto com os filhos em casa',
      'Alunos que entendem que a prática e a resolução de provas antigas é o caminho para a aprovação',
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
      <FeaturesSection receiveList={infos.receiveList} />
      <TestimonialsCarousel testimonialsPaths={infos.testimonialsPaths} />
      <AdvantagesSection advantages={infos.advantages} />
      <TargetAudienceSection targets={infos.targets} />
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
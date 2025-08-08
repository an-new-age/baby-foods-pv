import React, { useState } from 'react';

const FAQSection = ({faqs}) => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="faq-section">
      <h2 className="section-title"><strong>Perguntas frequentes</strong></h2>
      <ul className="faq-accordion-list" id="faq-accordion-list">
        {faqs.map((faq, index) => (
          <li key={index} className={`faq-accordion-item ${openIndex === index ? 'open' : ''}`}>
            <button 
              className="faq-accordion-question" 
              aria-expanded={openIndex === index}
              onClick={() => toggleFAQ(index)}
            >
              {faq.pergunta}
              <span className="faq-accordion-icon">{openIndex === index ? '×' : '+'}</span>
            </button>
            <div className="faq-accordion-answer">{faq.resposta}</div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FAQSection;
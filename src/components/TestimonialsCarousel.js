import React, { useState } from 'react';

const TestimonialsCarousel = ({items, title}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + items.length) % items.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return items.length ? (
    <section style={{ backgroundColor: '#F0F2F5', padding: '0px 0px' }}>
      <div className="carousel-container">
        <h2 style={{ fontSize: '35px', marginBottom: '40px', fontFamily: 'Poppins, sans-serif' }}>
          {title}
        </h2>
        
        <div className="carousel-track">
          {<img class="print" src={items[currentSlide]} />}
        </div>
        
        <div className="carousel-buttons">
          <button className="carousel-button" onClick={prevSlide}>
            <i className="fas fa-chevron-left"></i>
          </button>
          <button className="carousel-button" onClick={nextSlide}>
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
        
        <div className="carousel-dots">
          {items.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  ) : null;
};

export default TestimonialsCarousel;
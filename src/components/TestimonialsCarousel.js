import React, { useState } from 'react';

const TestimonialsCarousel = ({testimonialsPaths}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonialsPaths.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonialsPaths.length) % testimonialsPaths.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return testimonialsPaths.length ? (
    <section style={{ backgroundColor: '#F0F2F5', padding: '0px 0px' }}>
      <div className="carousel-container">
        <h2 style={{ fontSize: '35px', marginBottom: '40px', fontFamily: 'Poppins, sans-serif' }}>
          Depoimentos
        </h2>
        
        <div className="carousel-track">
          {<img class="print" src={testimonialsPaths[currentSlide]} />}
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
          {testimonialsPaths.map((_, index) => (
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
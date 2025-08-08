import React from 'react';

const HeroSection = ({
  headline,
  subHeadline,
  ctaButtonText,
  vslPath
}) => {
  return (
    <section className="hero-section">
      <h1>
        <div dangerouslySetInnerHTML={{ __html: headline }} />
      </h1>
      
      <div class="video-container">
            <div class="play-player">
                <p>Seu video começou</p>
                <p class="icon">📢</p>
                <p>Clique para ouvir</p>
            </div>
            <video class="video-hero"
                controls
                autoplay
                muted
                playsinline
                preload="metadata">
                <source src={vslPath} type="video/mp4"/>
                Seu navegador não suporta o formato de vídeo.
            </video>
        </div>
      
      {subHeadline && <p>{<div dangerouslySetInnerHTML={{ __html: subHeadline }} />}</p>}
      
      {ctaButtonText && <a href="#vipPlanCTA" class="cta-button">
        {ctaButtonText}
      </a>}
    </section>
  );
};

export default HeroSection;
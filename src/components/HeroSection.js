import React from 'react';

const HeroSection = ({
  headline,
  subHeadline,
  ctaButtonText,
  vslPath
}) => {

  React.useEffect(() => () => {
    const videoContainer = document.querySelector('.video-container');
      const videoElement = document.querySelector('.video-hero');
      const playPlayer = document.querySelector('.play-player');

      if (videoContainer && videoElement && playPlayer) {
          videoContainer.addEventListener('click', function() {
              // Recomeça o vídeo do início
              videoElement.currentTime = 0;

              // Verifica se o vídeo está pausado ou não iniciado
              if (videoElement.paused) {
                  // Inicia o vídeo
                  videoElement.play();
              }

              // Desmuta o vídeo
              videoElement.muted = false;

              // Esconde o play-player
              playPlayer.style.display = 'none';
          });
      }
  }, [])

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
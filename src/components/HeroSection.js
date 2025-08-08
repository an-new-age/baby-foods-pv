import React from 'react';

const HeroSection = ({
  headline,
  subHeadline,
  ctaButtonText,
  vslPath
}) => {

  React.useEffect(() => {
    const videoContainer = document.querySelector('.video-container');
    const videoElement = document.querySelector('.video-hero');
    const playPlayer = document.querySelector('.play-player');

    const handleVideoClick = () => {
      // if (videoElement && !videoElement.paused) {
      //   // Se o vídeo já está tocando, não faz nada
      //   return;
      // }

      // Recomeça o vídeo do início
      if (videoElement) {
        videoElement.currentTime = 0;
        
        // Usa promise para lidar com o play de forma assíncrona
        const playPromise = videoElement.play();
        
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              // Vídeo iniciou com sucesso
              videoElement.muted = false;
              if (playPlayer) {
                playPlayer.style.display = 'none';
              }
            })
            .catch(error => {
              // Auto-play foi bloqueado ou houve erro
              console.log("Erro ao reproduzir vídeo:", error);
            });
        }
      }
    };

    if (videoContainer) {
      videoContainer.addEventListener('click', handleVideoClick);
      
      // Cleanup function para remover o event listener
      return () => {
        videoContainer.removeEventListener('click', handleVideoClick);
      };
    }
  }, []);

  return (
    <section className="hero-section">
      <div className="video-container">
        <div className="play-player">
          <p>Seu video começou</p>
          <p className="icon">📢</p>
          <p>Clique para ouvir</p>
        </div>
        <video className="video-hero"
          controls
          autoPlay
          muted
          playsInline
          preload="metadata">
          <source src={vslPath} type="video/mp4"/>
          Seu navegador não suporta o formato de vídeo.
        </video>
      </div>

      <h1>
        <div dangerouslySetInnerHTML={{ __html: headline }} />
      </h1>
      
      {subHeadline && <p><div dangerouslySetInnerHTML={{ __html: subHeadline }} /></p>}
      
      {ctaButtonText && <a href="#vipPlanCTA" className="cta-button">
        {ctaButtonText}
      </a>}
    </section>
  );
};

export default HeroSection;
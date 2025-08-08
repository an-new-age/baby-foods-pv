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

      <div style={{ textAlign: 'center' }}>
        <h3>Tá no preço de banana, mas não é de graça…</h3>
        <br />
        <span style={{color: 'white'}}>Porque o que é de graça, ninguém valoriza!</span>
        <br />
        <br />
        <span style={{color: 'white'}}>Esse livrinho foi feito com amor e tá só <strong>R$19,90</strong> — é quase um presente! 💛</span>
        <br />
        <br />
        <div style={{ 
          backgroundColor: "#f2e4ae",
          color: '#944312',
          width: '100%',
          textAlign: 'center',
          padding: '16px',
          border: '2px solid #f0db87',
          borderRadius: '16px'
         }}>
            <span>📚 São +100 receitas por fase e textura, pra facilitar sua rotina e cuidar da saúde do bebê. 👶✨💡</span>
         </div>
        <br />
        <div style={{ 
          backgroundColor: "#d3dfff",
          color: '#1D4ED8',
          width: '100%',
          textAlign: 'center',
          padding: '16px',
          border: '2px solid #b1c6ff',
          borderRadius: '16px'
         }}>
            <span>💡Quer pagar ainda menos?</span>
            <br/>
            <span>Usa o cumpom <strong>DANI10</strong> e ganha desconto!</span>
         </div>
        <br />
        <div style={{
          color: '#944312',
          width: '100%',
          textAlign: 'center',
          padding: '16px',
          border: '1px solid #944312',
          borderRadius: '16px'
         }}>
            <span>⏳Corre antes que o valor suba!</span>
         </div>
      </div>
      
      {ctaButtonText && <a href="#vipPlanCTA" className="cta-button">
        {ctaButtonText}
      </a>}
    </section>
  );
};

export default HeroSection;
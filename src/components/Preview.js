import React from 'react';

const Preview = ({
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
    <div className="carousel-container">
        <h2 style={{ fontSize: '2rem', marginBottom: '40px', fontFamily: 'Poppins, sans-serif' }}>Veja por dentro do E-book</h2>
        <p style={{ textAlign: 'left', padding: '0px 20px' }}>Mais de 10.000 mamães já estão usando o eBook e tendo resultados incríveis! Veja o que algumas delas disseram:</p>
        <br/>
        <br/>
        <div className="video-container">
          {/* <div className="play-player">
            <p>Seu video começou</p>
            <p className="icon">📢</p>
            <p>Veja por dentro do e-book</p>
          </div> */}
          <video className="video-hero"
            style={{width: '90vw'}}
            controls
            autoPlay
            muted
            playsInline
            preload="metadata">
            <source src="./assets/demo.mp4" type="video/mp4"/>
            Seu navegador não suporta o formato de vídeo.
          </video>
        </div>
      </div>
  );
};

export default Preview;
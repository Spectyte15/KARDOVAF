    
    window.sr = ScrollReveal();
    
    sr.reveal('.navbar', {
      duration: 1500,
      origin: 'bottom'
    });
    
    sr.reveal('#header', {
      duration: 1500,
      origin: 'left',
      distance: '200px',
      delay: 500
    });
    
    sr.reveal('#nombre', {
      duration: 1500,
      origin: 'left',
      distance: '100px',
      delay: 500
    });
    
    sr.reveal('#karla', {
      duration: 2000,
      origin: 'top',
      distance: '300px',
      delay: 1000
    });
    
    sr.reveal('#creep', {
      duration: 3000,
      delay: 2000
    });
    
    sr.reveal('#bt1', {
      duration: 2000,
      origin: 'left',
      distance: '300px',
      delay: 0
    });
    sr.reveal('#bt2', {
      duration: 2000,
      origin: 'left',
      distance: '300px',
      delay: 500
    });
    sr.reveal('#bt3', {
      duration: 2000,
      origin: 'left',
      distance: '300px',
      delay: 1000
    });
    sr.reveal('#bt4', {
      duration: 2000,
      origin: 'left',
      distance: '300px',
      delay: 1500
    });
    sr.reveal('#bt5', {
      duration: 2000,
      origin: 'left',
      distance: '300px',
      delay: 2000
    });
    
    sr.reveal('#motiv', {
      duration: 3000,
      origin: 'right',
      distance: '700px',
      delay: 0
    });
    sr.reveal('#body_motiv', {
      duration: 2000,
      delay: 500
    });
    
    sr.reveal('#obj', {
      duration: 3000,
      origin: 'right',
      distance: '700px',
      delay: 0
    });
    sr.reveal('#body_obj', {
      duration: 2000,
      delay: 500
    });
    
    sr.reveal('#armis', {
      duration: 3000,
      origin: 'right',
      distance: '700px',
      delay: 0
    });
    sr.reveal('#body_armis', {
      duration: 2000,
      delay: 500
    });
    
    sr.reveal('#intro', {
      duration: 3000,
      origin: 'right',
      distance: '700px',
      delay: 0
    });
    sr.reveal('#body_intro', {
      duration: 2000,
      delay: 500
    });
    
    sr.reveal('#buzon', {
      duration: 3000,
      origin: 'right',
      distance: '700px',
      delay: 0
    });
    sr.reveal('#body_buzon', {
      duration: 2000,
      delay: 500
    });
    
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
    
    



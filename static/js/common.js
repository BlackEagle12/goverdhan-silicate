window.addEventListener('scroll', () => {
    const verticalScrollPx = window.scrollY || window.pageYOffset;
  
    if (verticalScrollPx > 50) {
      document.getElementById('nav').classList.add('nav-scroll');
    }
    else {
        document.getElementById('nav').classList.remove('nav-scroll');
    }
  });
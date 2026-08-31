// Navbar hamburger toggle
(function(){
  const hamburger = document.querySelector('.hamburger');
  const nav = document.getElementById('nav-links');
  if(hamburger && nav){
    hamburger.addEventListener('click', (e)=>{
      e.stopPropagation();
      const open = nav.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', String(open));
    });

    // Close when clicking any nav link
    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });

    // Close when clicking outside
    document.addEventListener('click', (e) => {
      if(!nav.contains(e.target) && !hamburger.contains(e.target) && nav.classList.contains('open')){
        nav.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      }
    });

    // Reset on window resize
    window.addEventListener('resize', () => {
      if(window.innerWidth > 900 && nav.classList.contains('open')){
        nav.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      }
    });
  }
})();

// Reveal on scroll
(function(){
  const sections = document.querySelectorAll('.reveal, .tables');
  if(!('IntersectionObserver' in window)){
    sections.forEach(s=>s.classList.add('in-view'));
    return;
  }
  const io = new IntersectionObserver((entries)=>{
    for(const e of entries){
      if(e.isIntersecting){
        e.target.classList.add('in-view');
        io.unobserve(e.target);
      }
    }
  }, { threshold: 0.15 });
  sections.forEach(s=> io.observe(s));
})();

// Modal handling
(function(){
  const openModal = (id)=>{
    const modal = document.querySelector(id);
    if(!modal) return;
    modal.classList.remove('closing');
    modal.classList.add('open');
    modal.setAttribute('aria-hidden','false');
  };
  const closeModal = (modal)=>{
    if(!modal) return;
    modal.classList.add('closing');
    modal.setAttribute('aria-hidden','true');
    setTimeout(()=>{ modal.classList.remove('open','closing'); }, 210);
  };

  // Open from cards / clickable elements
  document.querySelectorAll('.clickable[data-modal], [data-modal]').forEach(card=>{
    if(card.classList.contains('modal')) return; // ignore modals themselves
    card.addEventListener('click', ()=>{
      const id = card.getAttribute('data-modal');
      openModal(id);
    });
    // Keyboard accessibility (Enter/Space)
    card.addEventListener('keydown', (e)=>{
      if(e.key === 'Enter' || e.key === ' '){
        e.preventDefault();
        const id = card.getAttribute('data-modal');
        openModal(id);
      }
    });
  });

  // Close buttons
  document.querySelectorAll('.modal [data-close]').forEach(btn=>{
    btn.addEventListener('click', (e)=>{
      const modal = e.target.closest('.modal');
      closeModal(modal);
    });
  });

  // Click outside content to close
  document.querySelectorAll('.modal').forEach(modal=>{
    modal.addEventListener('click', (e)=>{
      if(e.target === modal){ closeModal(modal); }
    });
  });

  // ESC to close
  document.addEventListener('keydown', (e)=>{
    if(e.key === 'Escape'){
      document.querySelectorAll('.modal.open').forEach(m=> closeModal(m));
    }
  });
})();

// ------------------------------------------------------------------------------ GSAP Animations -----------------------------------------------------------------------------

let tl = gsap.timeline();

tl.from(".brand",{
  y: -100,
  opacity: 0,
  delay: 0.3,
})
// ─── CONFIGURAÇÃO DO WHATSAPP ───────────────────────────
const WA = '5588999187227'; // Número com DDD 88 e o nono dígito

// ─── BASE DE DADOS DO PORTFÓLIO (APENAS FOTOS REAIS DO STUDIO) ───────────────────────────
const portfolioData = [
  // ── CÍLIOS PRINCESA ──
  {
    id: 1, filter: 'princesa', featured: true,
    style: 'Cílios Princesa',
    badge: '✨ Princesa 3D W',
    desc: 'Perfeito para quem deseja algo mais naturalzinho, mas ainda com presença no olhar. O fio W em 3D entrega um efeito delicado, organizado e charmoso, deixando os cílios mais preenchidos sem pesar.',
    img: 'assets/img/portfolio/princesa_1.jpg'
  },
  {
    id: 2, filter: 'princesa', featured: false,
    style: 'Cílios Princesa',
    badge: '✨ Princesa 3D W',
    desc: 'Perfeito para quem deseja algo mais naturalzinho, mas ainda com presença no olhar. O fio W em 3D entrega um efeito delicado, organizado e charmoso, deixando os cílios mais preenchidos sem pesar.',
    img: 'assets/img/portfolio/princesa_2.jpg'
  },
  {
    id: 3, filter: 'princesa', featured: false,
    style: 'Cílios Princesa',
    badge: '✨ Princesa 3D W',
    desc: 'Perfeito para quem deseja algo mais naturalzinho, mas ainda com presença no olhar. O fio W em 3D entrega um efeito delicado, organizado e charmoso, deixando os cílios mais preenchidos sem pesar.',
    img: 'assets/img/portfolio/princesa_3.jpg'
  },
  
  // ── CÍLIOS BRASILEIRO ──
  {
    id: 4, filter: 'brasileiro', featured: true,
    style: 'Cílios Brasileiro',
    badge: '✨ Brasileiro 2D YY',
    desc: 'Um volume leve e delicado, ideal para quem quer realçar o olhar sem perder a naturalidade. O fio YY cria um efeito alinhado e suave, trazendo mais definição aos cílios de forma elegante e confortável para o dia a dia.',
    img: 'assets/img/portfolio/brasileiro_1.jpg'
  },
  {
    id: 5, filter: 'brasileiro', featured: false,
    style: 'Cílios Brasileiro',
    badge: '✨ Brasileiro 2D YY',
    desc: 'Um volume leve e delicado, ideal para quem quer realçar o olhar sem perder a naturalidade. O fio YY cria um efeito alinhado e suave, trazendo mais definição aos cílios de forma elegante e confortável para o dia a dia.',
    img: 'assets/img/portfolio/brasileiro_2.jpg'
  },

  // ── CÍLIOS EGÍPCIO ──
  {
    id: 6, filter: 'egipcio', featured: false,
    style: 'Cílios Egípcio',
    badge: '✨ Egípcio 4D W',
    desc: 'Um volume natural, porém mais marcante ao mesmo tempo. O fio W em 4D deixa os cílios mais definidos, alinhados e com um olhar mais destacado, perfeito para quem gosta de um efeito bonito e elegante sem ficar exagerado.',
    img: 'assets/img/portfolio/egipcio_1.jpg'
  },
  {
    id: 7, filter: 'egipcio', featured: false,
    style: 'Cílios Egípcio',
    badge: '✨ Egípcio 4D W',
    desc: 'Um volume natural, porém mais marcante ao mesmo tempo. O fio W em 4D deixa os cílios mais definidos, alinhados e com um olhar mais destacado, perfeito para quem gosta de um efeito bonito e elegante sem ficar exagerado.',
    img: 'assets/img/portfolio/egipcio_2.jpg'
  },
  {
    id: 8, filter: 'egipcio', featured: false,
    style: 'Cílios Egípcio',
    badge: '✨ Egípcio 4D W',
    desc: 'Um volume natural, porém mais marcante ao mesmo tempo. O fio W em 4D deixa os cílios mais definidos, alinhados e com um olhar mais destacado, perfeito para quem gosta de um efeito bonito e elegante sem ficar exagerado.',
    img: 'assets/img/portfolio/egipcio_3.jpg'
  },
  {
    id: 9, filter: 'egipcio', featured: false,
    style: 'Cílios Egípcio',
    badge: '✨ Egípcio 4D W',
    desc: 'Um volume natural, porém mais marcante ao mesmo tempo. O fio W em 4D deixa os cílios mais definidos, alinhados e com um olhar mais destacado, perfeito para quem gosta de um efeito bonito e elegante sem ficar exagerado.',
    img: 'assets/img/portfolio/egipcio_4.jpg'
  }
];

// ─── LOADER ─────────────────────────────────
window.addEventListener('load', () => {
  setTimeout(() => {
    const loader = document.getElementById('loader');
    if (loader) loader.classList.add('hide');
    
    const heroImg = document.getElementById('hero-img');
    if (heroImg) heroImg.classList.add('loaded');
  }, 1800);
});

// ─── NAV SCROLL ─────────────────────────────
const nav = document.getElementById('main-nav');
if (nav) {
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  });
}

// ─── DRAWER ─────────────────────────────────
function toggleDrawer() {
  const drawer = document.getElementById('drawer');
  if (drawer) drawer.classList.toggle('open');
}

// ─── REVEAL ON SCROLL ───────────────────────
const revealEls = document.querySelectorAll('.reveal');
if (revealEls.length > 0) {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add('visible');
    });
  }, { threshold: 0.1 });
  revealEls.forEach(el => io.observe(el));
}

// ─── PORTFOLIO ──────────────────────────────
function buildPortfolio(filter = 'all') {
  const grid = document.getElementById('portfolio-grid');
  if (!grid) return;
  
  const items = filter === 'all' ? portfolioData : portfolioData.filter(p => p.filter === filter);
  grid.innerHTML = '';
  
  items.forEach((p, i) => {
    const card = document.createElement('div');
    card.className = 'portfolio-card reveal' + (p.featured && filter === 'all' ? ' featured' : '');
    card.dataset.id = p.id;
    card.innerHTML = `
      <img src="${p.img}" alt="${p.style}" loading="lazy">
      <div class="card-info">
        <span class="card-style">${p.style}</span>
        <span class="card-desc">${p.badge}</span>
        <button class="btn-wa-card" onclick="openModal(${p.id}, event)">🗓️ Quero esse modelo</button>
      </div>`;
    card.addEventListener('click', () => openModal(p.id));
    grid.appendChild(card);
    
    requestAnimationFrame(() => {
      setTimeout(() => card.classList.add('visible'), i * 80);
    });
  });
}

const filterBar = document.getElementById('filter-bar');
if (filterBar) {
  filterBar.addEventListener('click', e => {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    buildPortfolio(btn.dataset.filter);
  });
}

// Inicializar portfólio
buildPortfolio();

// ─── MODAL GALERIA SLIDER E TOUCH ─────────────────────────────
let activeGallery = [];
let activeGalleryIndex = 0;
let touchStartX = 0;
let touchEndX = 0;

function openModal(id, e) {
  if (e) e.stopPropagation();
  const p = portfolioData.find(x => x.id === id);
  if (!p) return;
  
  // Encontrar todas as fotos do mesmo tipo de cílios (mesmo filtro)
  activeGallery = portfolioData.filter(x => x.filter === p.filter);
  activeGalleryIndex = activeGallery.findIndex(x => x.id === id);
  
  updateModalContent();
  
  const modal = document.getElementById('modal');
  if (modal) {
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

function updateModalContent() {
  const p = activeGallery[activeGalleryIndex];
  if (!p) return;
  
  const modalImg = document.getElementById('modal-img');
  const modalBadge = document.getElementById('modal-badge');
  const modalStyle = document.getElementById('modal-style');
  const modalDesc = document.getElementById('modal-desc');
  const modalWa = document.getElementById('modal-wa');
  const counter = document.getElementById('gallery-counter');
  
  if (modalImg) {
    // Transição suave elegante (fade + scale)
    modalImg.style.opacity = '0';
    modalImg.style.transform = 'scale(0.96)';
    
    setTimeout(() => {
      modalImg.src = p.img;
      modalImg.alt = p.style;
      modalImg.style.opacity = '1';
      modalImg.style.transform = 'scale(1)';
    }, 150);
  }
  
  if (modalBadge) modalBadge.textContent = p.badge;
  if (modalStyle) modalStyle.textContent = p.style;
  if (modalDesc) modalDesc.textContent = p.desc;
  
  if (modalWa) {
    const msg = encodeURIComponent(`Olá! Gostei do modelo ${p.style} (${p.badge}) mostrado no seu portfólio e gostaria de agendar um horário. 🗓️`);
    modalWa.href = `https://wa.me/${WA}?text=${msg}`;
  }
  
  if (counter) {
    counter.textContent = `${activeGalleryIndex + 1} / ${activeGallery.length}`;
  }
  
  // Ocultar setas e dica se houver apenas 1 foto na categoria
  const prevBtn = document.querySelector('.gallery-nav.prev');
  const nextBtn = document.querySelector('.gallery-nav.next');
  const swipeTip = document.querySelector('.gallery-swipe-tip');
  
  if (prevBtn && nextBtn) {
    const showNav = activeGallery.length > 1 ? 'flex' : 'none';
    prevBtn.style.display = showNav;
    nextBtn.style.display = showNav;
  }
  if (swipeTip) {
    swipeTip.style.display = activeGallery.length > 1 ? 'block' : 'none';
  }
}

function prevGalleryImage(e) {
  if (e) e.stopPropagation();
  if (activeGallery.length <= 1) return;
  activeGalleryIndex = (activeGalleryIndex - 1 + activeGallery.length) % activeGallery.length;
  updateModalContent();
}

function nextGalleryImage(e) {
  if (e) e.stopPropagation();
  if (activeGallery.length <= 1) return;
  activeGalleryIndex = (activeGalleryIndex + 1) % activeGallery.length;
  updateModalContent();
}

// Configurar gestos de deslizar (swipe) e arrastar (mouse drag)
let touchStartY = 0;
let touchEndY = 0;

function setupGalleryTouch() {
  const wrapper = document.querySelector('.modal-gallery-wrapper');
  if (!wrapper) return;
  
  // Touch Events para mobile (Compatibilidade estendida S23/Chrome/iOS)
  wrapper.addEventListener('touchstart', e => {
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
    touchEndX = 0; // Resetar
    touchEndY = 0; // Resetar
  }, { passive: true });
  
  wrapper.addEventListener('touchmove', e => {
    touchEndX = e.touches[0].clientX;
    touchEndY = e.touches[0].clientY;
  }, { passive: true });
  
  wrapper.addEventListener('touchend', () => {
    if (touchEndX === 0 || touchEndY === 0) return; // Toque simples, não deslizou
    
    const diffX = touchEndX - touchStartX;
    const diffY = touchEndY - touchStartY;
    
    // Validar se o gesto foi predominantemente horizontal e longo o suficiente (limiar de 40px)
    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 40) {
      if (diffX > 0) {
        prevGalleryImage(); // Swipe para a direita -> Foto anterior
      } else {
        nextGalleryImage(); // Swipe para a esquerda -> Próxima foto
      }
    }
    
    // Resetar
    touchStartX = 0;
    touchStartY = 0;
    touchEndX = 0;
    touchEndY = 0;
  }, { passive: true });
  
  // Mouse Drag Events para desktop
  let isDragging = false;
  let startX = 0;
  
  wrapper.addEventListener('mousedown', e => {
    isDragging = true;
    startX = e.clientX;
  }, { passive: true });
  
  wrapper.addEventListener('mouseup', e => {
    if (!isDragging) return;
    isDragging = false;
    const endX = e.clientX;
    const diff = endX - startX;
    if (diff > 50) {
      prevGalleryImage();
    } else if (diff < -50) {
      nextGalleryImage();
    }
  }, { passive: true });
  
  wrapper.addEventListener('mouseleave', () => {
    isDragging = false;
  }, { passive: true });
}

function closeModal(e) {
  if (e && e.target !== document.getElementById('modal')) return;
  const modal = document.getElementById('modal');
  if (modal) {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }
}

// Inicializar ouvintes da galeria assim que possível
document.addEventListener('DOMContentLoaded', setupGalleryTouch);
// Caso o DOMContentLoaded já tenha disparado
if (document.readyState === 'interactive' || document.readyState === 'complete') {
  setupGalleryTouch();
}

// ─── CARE TABS ──────────────────────────────
function switchTab(tab) {
  document.querySelectorAll('.care-tab').forEach((t, i) => {
    const tabs = ['pre', 'pos', 'agenda'];
    t.classList.toggle('active', tabs[i] === tab);
  });
  
  document.querySelectorAll('.care-panel').forEach(p => {
    p.classList.remove('active');
  });
  
  const targetPanel = document.getElementById('tab-' + tab);
  if (targetPanel) {
    targetPanel.classList.add('active');
    targetPanel.querySelectorAll('.reveal').forEach((el, i) => {
      el.classList.remove('visible');
      setTimeout(() => el.classList.add('visible'), i * 80);
    });
  }
}

// ─── TESTIMONIALS DOTS ──────────────────────
const slider = document.getElementById('testi-slider');
const dotsWrap = document.getElementById('testi-dots');
if (slider && dotsWrap) {
  const cards = slider.querySelectorAll('.testi-card');
  cards.forEach((_, i) => {
    const d = document.createElement('div');
    d.className = 'testi-dot' + (i === 0 ? ' active' : '');
    d.addEventListener('click', () => {
      cards[i].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    });
    dotsWrap.appendChild(d);
  });
  
  slider.addEventListener('scroll', () => {
    const idx = Math.round(slider.scrollLeft / (slider.scrollWidth / cards.length));
    document.querySelectorAll('.testi-dot').forEach((d, i) => d.classList.toggle('active', i === idx));
  }, { passive: true });
}

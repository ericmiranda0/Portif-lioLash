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

// ─── MODAL ──────────────────────────────────
function openModal(id, e) {
  if (e) e.stopPropagation();
  const p = portfolioData.find(x => x.id === id);
  if (!p) return;
  
  const modalImg = document.getElementById('modal-img');
  const modalBadge = document.getElementById('modal-badge');
  const modalStyle = document.getElementById('modal-style');
  const modalDesc = document.getElementById('modal-desc');
  const modalWa = document.getElementById('modal-wa');
  const modal = document.getElementById('modal');
  
  if (modalImg) {
    modalImg.src = p.img;
    modalImg.alt = p.style;
  }
  if (modalBadge) modalBadge.textContent = p.badge;
  if (modalStyle) modalStyle.textContent = p.style;
  if (modalDesc) modalDesc.textContent = p.desc;
  
  if (modalWa) {
    // Mensagem dinâmica adaptada com os novos nomes simplificados e ícone de agenda
    const msg = encodeURIComponent(`Olá! Gostei do modelo ${p.style} (${p.badge}) mostrado no seu portfólio e gostaria de agendar um horário. 🗓️`);
    modalWa.href = `https://wa.me/${WA}?text=${msg}`;
  }
  
  if (modal) {
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

function closeModal(e) {
  if (e && e.target !== document.getElementById('modal')) return;
  const modal = document.getElementById('modal');
  if (modal) {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }
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

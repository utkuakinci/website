/* ── SCROLL REVEAL ── */
const obs = new IntersectionObserver(entries => {
  entries.forEach((e,i) => {
    if (e.isIntersecting) { setTimeout(()=>e.target.classList.add('visible'),i*70); obs.unobserve(e.target); }
  });
},{threshold:.1});
document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));

/* ── GALLERY ── */
const grid=document.getElementById('galleryGrid');
let sc=0;
let currentLang='en';

/*
╔══════════════════════════════════════════════════════════════════════╗
║  GALLERY PHOTOS — Galeri fotoğrafları                                ║
║  Her slot için:                                                      ║
║    src  → kendi fotoğraf yolunla değiştir (örn. "images/lab1.jpg")   ║
║    caption → fotoğrafın altında görünecek açıklama ({ en, de })      ║
║  Slot sayısını artırmak için yeni { src, caption } satırı ekle.      ║
║  Bir slotu tamamen kaldırmak istersen o satırı sil.                  ║
╚══════════════════════════════════════════════════════════════════════╝
*/
const preloadedPhotos = [
  /*{ src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80', caption: 'Lab work at DFKI'              },*/
  { src: 'images/lunisrover.jpeg', caption: { en: 'Lab work at DFKI',             de: 'Laborarbeit am DFKI'               } },
  { src: 'images/coyote.jpeg',     caption: { en: 'Robotics research',            de: 'Robotikforschung'                  } },
  { src: 'https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?w=600&q=80', caption: { en: 'Conference presentation',      de: 'Konferenzvortrag'                  } },
  { src: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80', caption: { en: 'Embedded systems development', de: 'Entwicklung eingebetteter Systeme' } },
];

function addGallerySlot(preImg, caption) {
  const cap=caption||{en:'',de:''};
  const preCaption=cap[currentLang]||cap.en;
  sc++;
  const id='gs'+sc;
  const slot=document.createElement('div');
  slot.className='gallery-slot'; slot.id=id;
  slot.innerHTML=
    '<div class="slot-inner">'+
      '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>'+
      '<span>Photo</span>'+
    '</div>'+
    '<div class="slot-caption"><span class="cap-text" data-en="'+cap.en+'" data-de="'+cap.de+'">'+preCaption+'</span></div>';
  grid.appendChild(slot);
  if (preImg) {
    const img=document.createElement('img');
    img.loading='lazy';
    img.src=preImg; img.alt=preCaption||'Gallery photo';
    slot.prepend(img);
    slot.querySelector('.slot-inner').style.display='none';
    slot.classList.add('has-img');
  }
}
preloadedPhotos.forEach(p=>addGallerySlot(p.src, p.caption));

/* ── HERO TERMINAL ── */
/* Commands are typed out one character at a time; their output appears at once. */
const termScript = [
  { cmd: 'cat focus.txt',  out: 'space robotics · embedded systems · autonomous navigation' },
  { cmd: 'ls stack/',      out: 'c  cpp  python  ros  docker  cortex-m7  canbus' },
  { cmd: './status --now', out: 'research assistant @ DFKI · open to opportunities' },
];
(function runTerminal() {
  const body=document.getElementById('termBody');
  const cursor=document.createElement('span'); cursor.className='term-cursor';
  const instant=matchMedia('(prefers-reduced-motion: reduce)').matches;
  function line(step, done) {
    const prompt=document.createElement('span'); prompt.className='t-prompt'; prompt.textContent='$ ';
    const cmd=document.createElement('span'); cmd.className='t-cmd';
    body.append(prompt, cmd, cursor);
    const finish=()=>{ cursor.before('\n'+step.out+'\n'); done(); };
    if (instant) { cmd.textContent=step.cmd; finish(); return; }
    let i=0;
    const tick=setInterval(()=>{
      cmd.textContent=step.cmd.slice(0,++i);
      if (i>=step.cmd.length) { clearInterval(tick); setTimeout(finish,280); }
    },55);
  }
  function next(n) {
    if (n>=termScript.length) {
      const prompt=document.createElement('span'); prompt.className='t-prompt'; prompt.textContent='$ ';
      cursor.before(prompt);
      return;
    }
    line(termScript[n], ()=>setTimeout(()=>next(n+1), instant?0:450));
  }
  setTimeout(()=>next(0), instant?0:1300);
})();

/* ── GITHUB REPOS ── */
/* Latest public repositories, fetched live. The block stays hidden if the request fails. */
const GH_USER='utkuakinci';
function renderRepos(repos) {
  const repoGrid=document.getElementById('repoGrid');
  repos.forEach(r => {
    const card=document.createElement('a');
    card.className='repo-card'; card.href=r.html_url; card.target='_blank'; card.rel='noopener';
    [['repo-name',r.name],['repo-desc',r.description||''],['repo-meta',[r.language,'★ '+r.stars].filter(Boolean).join(' · ')]]
      .forEach(([cls,text])=>{const s=document.createElement('span');s.className=cls;s.textContent=text;card.appendChild(s);});
    repoGrid.appendChild(card);
  });
  document.getElementById('repoBlock').hidden=!repos.length;
}
function loadRepos() {
  let cached; try{cached=JSON.parse(sessionStorage.getItem('gh-repos'));}catch(e){}
  if (Array.isArray(cached)) { renderRepos(cached); return; }
  fetch('https://api.github.com/users/'+GH_USER+'/repos?sort=pushed&per_page=30')
    .then(res=>res.ok?res.json():Promise.reject(res.status))
    .then(data => {
      const repos=data.filter(r=>!r.fork&&r.name!==GH_USER).slice(0,6)
        .map(r=>({name:r.name,html_url:r.html_url,description:r.description,language:r.language,stars:r.stargazers_count}));
      try{sessionStorage.setItem('gh-repos',JSON.stringify(repos));}catch(e){}
      renderRepos(repos);
    })
    .catch(()=>{});
}
loadRepos();

/* ── NAV: MOBILE MENU + ACTIVE SECTION ── */
const navLinks=document.getElementById('navLinks');
const navToggle=document.getElementById('navToggle');
function setMenu(open){navLinks.classList.toggle('open',open);navToggle.setAttribute('aria-expanded',open);}
navToggle.addEventListener('click',()=>setMenu(!navLinks.classList.contains('open')));
navLinks.addEventListener('click',e=>{if(e.target.tagName==='A')setMenu(false);});

const navObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    navLinks.querySelectorAll('a').forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+e.target.id));
  });
},{rootMargin:'-45% 0px -50% 0px'});
document.querySelectorAll('#hero,section').forEach(sec=>navObs.observe(sec));

/* ── CONTACT FORM ── */
/* Sent in the background through FormSubmit; without JavaScript the form posts normally. */
const formText = {
  en: { sending: 'Sending…', ok: 'Thanks — your message has been sent.', error: 'Could not send the message. Please email me directly instead.' },
  de: { sending: 'Wird gesendet…', ok: 'Danke — Ihre Nachricht wurde gesendet.', error: 'Die Nachricht konnte nicht gesendet werden. Bitte schreiben Sie mir direkt per E-Mail.' },
};
const contactForm=document.getElementById('contactForm');
contactForm.addEventListener('submit', e => {
  e.preventDefault();
  const data=Object.fromEntries(new FormData(contactForm));
  if (data._honey) return;
  const status=document.getElementById('formStatus');
  const button=contactForm.querySelector('button');
  const say=state=>{ status.textContent=formText[currentLang][state]; status.className='form-status '+state; };
  button.disabled=true; say('sending');
  fetch(contactForm.action.replace('formsubmit.co/','formsubmit.co/ajax/'), {
    method:'POST',
    headers:{'Content-Type':'application/json','Accept':'application/json'},
    body:JSON.stringify(data),
  })
    .then(res=>res.json())
    .then(result=>{
      if (String(result.success)!=='true') throw new Error(result.message);
      contactForm.reset(); say('ok');
    })
    .catch(()=>say('error'))
    .finally(()=>{ button.disabled=false; });
});

/* ── ANALYTICS ── */
/* GoatCounter: cookie-less visit counts. Stays off until a site code is set here. */
const GOATCOUNTER_CODE='';
if (GOATCOUNTER_CODE && location.protocol!=='file:' && location.hostname!=='localhost') {
  const gc=document.createElement('script');
  gc.async=true; gc.src='https://gc.zgo.at/count.js';
  gc.dataset.goatcounter='https://'+GOATCOUNTER_CODE+'.goatcounter.com/count';
  document.head.appendChild(gc);
}

/* ── THEME TOGGLE ── */
function toggleTheme() {
  const next = document.documentElement.getAttribute('data-theme')==='dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  try { localStorage.setItem('theme', next); } catch(e) {}
}

/* ── LANGUAGE SWITCHER ── */
function setLang(lang) {
  currentLang = lang;
  document.getElementById('btnEN').classList.toggle('active', lang==='en');
  document.getElementById('btnDE').classList.toggle('active', lang==='de');
  document.getElementById('btnEN').setAttribute('aria-pressed', lang==='en');
  document.getElementById('btnDE').setAttribute('aria-pressed', lang==='de');
  document.documentElement.lang = lang;

  // Update all elements that have data-en / data-de
  document.querySelectorAll('[data-en]').forEach(el => {
    const val = el.getAttribute('data-'+lang);
    if (!val) return;
    // For elements that may contain HTML (p, span with innerHTML)
    if (el.tagName === 'P' || el.tagName === 'SPAN' || el.tagName === 'LI' || el.tagName === 'A' || el.tagName === 'BUTTON') {
      el.innerHTML = val;
    } else {
      el.textContent = val;
    }
  });

  // Keep gallery alt text in step with the visible caption
  document.querySelectorAll(".gallery-slot.has-img").forEach(slot => {
    slot.querySelector("img").alt = slot.querySelector(".cap-text").textContent;
  });

  // Update page title
  document.title = lang === 'de'
    ? 'Utku Akinci — Informatiker & Software-Ingenieur'
    : 'Utku Akinci — Computer Scientist & Software Engineer';
}

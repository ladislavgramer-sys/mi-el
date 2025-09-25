
const btn=document.getElementById('menuToggle');const list=document.getElementById('nav-list');if(btn){btn.addEventListener('click',()=>{const ex=btn.getAttribute('aria-expanded')==='true';btn.setAttribute('aria-expanded',String(!ex));list.classList.toggle('open');});}
// Consent
const banner=document.getElementById('consent-banner');const accept=document.getElementById('consent-accept');const reject=document.getElementById('consent-reject');
function setConsent(v){localStorage.setItem('consent',v);banner?.classList.remove('show');if(v==='yes'){loadGA();}}
if(banner){const c=localStorage.getItem('consent');if(!c) banner.classList.add('show');if(c==='yes') loadGA();
accept?.addEventListener('click',()=>setConsent('yes'));reject?.addEventListener('click',()=>setConsent('no'));}
function loadGA(){const id=window.GA_ID||'G-XXXXXXX'; if(id==='G-XXXXXXX') return; 
  const s1=document.createElement('script');s1.async=true;s1.src=`https://www.googletagmanager.com/gtag/js?id=${id}`;document.head.appendChild(s1);
  window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js', new Date());gtag('config', id);
}
// Reviews
async function loadReviews(){try{const r=await fetch('assets/reviews.json');const data=await r.json();const wrap=document.getElementById('reviews');if(!wrap) return;
  wrap.innerHTML = data.map(d=>`<div class='review'><div class='stars'>${'★'.repeat(d.rating)}${'☆'.repeat(5-d.rating)}</div><p>“${d.text}”</p><div><strong>${d.author}</strong> • ${d.source}</div></div>`).join('');}catch(e){}}
loadReviews();

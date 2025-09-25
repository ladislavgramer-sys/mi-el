
// === CONFIG LOADER (GA4 + PLACE_ID) ===
async function loadConfig(){
  try {
    const r = await fetch('assets/config.json', {cache:'no-store'});
    if(!r.ok) return;
    const cfg = await r.json();
    if(cfg.GA_ID){ window.GA_ID = cfg.GA_ID; }
    const link = document.getElementById('review-link');
    if(link && cfg.PLACE_ID){
      link.href = `https://search.google.com/local/writereview?placeid=${cfg.PLACE_ID}`;
    }
  } catch(e){}
}
loadConfig();


// ad.js - slot iklan, close ad strip
function watchAdSlot(insEl,wrapEl,{timeout=4500,onSettle}={}){ if(!insEl||!wrapEl)return; let done=false; const finish=(visible)=>{ if(done)return; done=true; wrapEl.classList.toggle('ad-collapsed',!visible); if(!visible) scrollHeaderIntoView(); if(typeof onSettle==='function')onSettle(visible); }; const check=()=>{ const status=insEl.getAttribute('data-ad-status'); if(status==='unfilled'){finish(false);return true;} if(status==='filled'){finish(true);return true;} if(insEl.querySelector('iframe')){finish(true);return true;} return false; }; if(check())return; const obs=new MutationObserver(()=>{if(check())obs.disconnect();}); obs.observe(insEl,{attributes:true,attributeFilter:['data-ad-status'],childList:true,subtree:true}); setTimeout(()=>{if(!done){finish(false);obs.disconnect();}},timeout); }

function closeAdStrip(){ const strip=document.getElementById('ad-strip'); if(strip){strip.classList.add('ad-hidden');localStorage.setItem('lm-ad-strip-closed','true'); scrollHeaderIntoView();} }

function handleOutsideClick(e){ const strip=document.getElementById('ad-strip'); if(!strip||strip.classList.contains('ad-hidden'))return; if(!e.target.closest('#ad-strip')){closeAdStrip();} }

// Kembali ke header — dipanggil setiap kali sebuah iklan
// ditutup/di-X/diminimize (strip ditutup, popup peta ditutup,
// atau slot iklan kolaps karena unfilled/diblokir).
function scrollHeaderIntoView(){
  try {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    document.getElementById('header')?.scrollIntoView({ block: 'start', behavior: 'smooth' });
  } catch(e){ /* aman diabaikan */ }
}

window.closeAdStrip=closeAdStrip;
window.scrollHeaderIntoView=scrollHeaderIntoView;

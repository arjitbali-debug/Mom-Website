'use strict';
document.documentElement.classList.add('js');
const menu=document.querySelector('.menu'),nav=document.querySelector('.navlinks'),practice=document.querySelector('.practice-nav');
function closeNav(){if(nav)nav.classList.remove('open');if(menu){menu.setAttribute('aria-expanded','false');menu.textContent='Menu';}if(practice)practice.open=false;}
if(menu&&nav){menu.hidden=false;menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.textContent=open?'Close':'Menu';if(!open&&practice)practice.open=false;});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeNav));}
document.addEventListener('keydown',e=>{if(e.key==='Escape'){if(practice&&practice.open){practice.open=false;practice.querySelector('summary').focus();}else if(nav&&nav.classList.contains('open')){closeNav();menu.focus();}}});
document.addEventListener('click',e=>{if(practice&&!practice.contains(e.target))practice.open=false;});
document.querySelectorAll('.video-load').forEach(button=>{button.hidden=false;button.addEventListener('click',()=>{const frame=document.createElement('iframe');frame.src='https://www.youtube-nocookie.com/embed/'+button.dataset.video+'?autoplay=1';frame.title=button.dataset.title;frame.allow='autoplay; encrypted-media; picture-in-picture';frame.allowFullscreen=true;frame.referrerPolicy='strict-origin-when-cross-origin';const box=button.closest('.video-box');box.classList.add('loaded');box.replaceChildren(frame);frame.focus();});});

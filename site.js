'use strict';
document.documentElement.classList.add('js');
const menu = document.querySelector('.menu');
const nav = document.querySelector('.navlinks');
if (menu && nav) {
  menu.hidden = false;
  const close = () => { nav.classList.remove('open'); menu.setAttribute('aria-expanded','false'); menu.setAttribute('aria-label','Open navigation'); };
  menu.addEventListener('click', () => { const open = nav.classList.toggle('open'); menu.setAttribute('aria-expanded',String(open)); menu.setAttribute('aria-label',open ? 'Close navigation' : 'Open navigation'); });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click',close));
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && nav.classList.contains('open')) { close(); menu.focus(); } });
  document.addEventListener('click', e => { if (!nav.contains(e.target) && !menu.contains(e.target)) close(); });
}
document.querySelectorAll('.video-load').forEach(button => {
  button.addEventListener('click', () => {
    const frame = document.createElement('iframe');
    frame.src = 'https://www.youtube-nocookie.com/embed/' + button.dataset.video + '?autoplay=1';
    frame.title = button.dataset.title;
    frame.allow = 'autoplay; encrypted-media; picture-in-picture';
    frame.allowFullscreen = true;
    frame.referrerPolicy = 'strict-origin-when-cross-origin';
    const box = button.closest('.video-box');
    box.replaceChildren(frame);
    frame.focus();
  });
});

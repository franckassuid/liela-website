(() => {
  'use strict';
  const config = window.LIELA_CONFIG || {};
  const safeUrl = (value) => {
    try { const url = new URL(value); return url.protocol === 'https:' ? url.href.replace(/\/$/, '') : null; } catch { return null; }
  };
  const appUrl = safeUrl(config.appUrl) || 'https://app.liela.fr';
  document.querySelectorAll('[data-app-link]').forEach(link => { link.href = appUrl; });
  document.querySelectorAll('[data-app-path]').forEach(link => { link.href = appUrl + link.dataset.appPath; });
  const sessions = {
    thoughts: { category: 'Calmer les pensées', title: 'Sortir de la boucle', context: 'Un peu d’espace, entre vous et vos pensées.', duration: 3, color: '#6E6257', slug: 'calmer-les-pensees' },
    stress: { category: 'Calmer le stress', title: 'Retrouver un rythme plus calme', context: 'Ralentir, sans avoir à tout arrêter.', duration: 20, color: '#A26248', slug: 'calmer-le-stress' },
    sleep: { category: 'Trouver le sommeil', title: 'Préparer le sommeil', context: 'Vous pouvez laisser la journée derrière vous.', duration: 3, color: '#5D6A78', slug: 'trouver-le-sommeil' },
    focus: { category: 'Retrouver sa concentration', title: 'Retrouver son attention', context: 'Rassembler votre attention, à votre rythme.', duration: 5, color: '#5F6A52', slug: 'retrouver-sa-concentration' },
    tensions: { category: 'Relâcher les tensions', title: 'Détendre le haut du corps', context: 'Un peu de douceur pour vos épaules.', duration: 10, color: '#94702B', slug: 'relacher-les-tensions' },
    recenter: { category: 'Se recentrer', title: 'Revenir au présent', context: 'Ici. Maintenant. Simplement.', duration: 3, color: '#7A5560', slug: 'se-recentrer' }
  };
  const buttons = [...document.querySelectorAll('[data-situation]')];
  function selectSituation(key) {
    const session = sessions[key];
    if (!session) return;
    document.documentElement.style.setProperty('--active', session.color);
    buttons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.situation === key)));
    document.getElementById('session-category').textContent = session.category;
    document.getElementById('session-title').textContent = session.title;
    document.getElementById('session-context').textContent = session.context;
    document.getElementById('session-duration').textContent = `${session.duration} minutes pour vous`;
    document.getElementById('picker-feedback').textContent = `À découvrir : ${session.title} · ${session.duration} minutes`;
    const link = document.getElementById('session-link');
    link.href = `${appUrl}/situation/${session.slug}`;
    link.setAttribute('aria-label', `Découvrir les séances : ${session.category}, dans Liela`);
  }
  buttons.forEach(button => button.addEventListener('click', () => selectSituation(button.dataset.situation)));
  selectSituation('thoughts');
  document.getElementById('year').textContent = String(new Date().getFullYear());
  const youtubeUrl = safeUrl(config.youtubeUrl);
  if (youtubeUrl) {
    const link = document.getElementById('youtube-link');
    link.href = youtubeUrl;
    link.hidden = false;
    document.querySelector('.coming-badge').textContent = 'LIELA MÉDITATION SUR YOUTUBE';
    document.querySelector('.youtube-art').setAttribute('aria-label', 'Liela Méditation sur YouTube');
    document.querySelector('.youtube-copy>p:not(.eyebrow)').textContent = 'Retrouvez Liela Méditation sur YouTube. Un autre endroit pour faire une pause et vous laisser guider, simplement.';
    document.querySelectorAll('.youtube-copy>p:not(.eyebrow)')[1].textContent = 'Choisissez une séance sur la chaîne, ou retrouvez votre pratique dans l’application.';
    document.getElementById('youtube-faq').replaceChildren('Retrouvez la chaîne depuis le bouton « Découvrir la chaîne » dans la section YouTube de cette page.');
    document.querySelector('.footer a[href="#youtube"]').textContent = 'La chaîne YouTube';
  }
})();

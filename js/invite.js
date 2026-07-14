(function () {
  const helpers = window.TEMPLATE_HELPERS;
  let invitation = null;
  let template = null;
  let player = null;
  let playerReady = false;
  let opened = false;
  let slideshowIndex = 0;
  let slideshowTimer = null;

  const els = {
    body: document.body,
    openScreen: document.getElementById('openScreen'),
    openInvitationBtn: document.getElementById('openInvitationBtn'),
    openTitle: document.getElementById('openTitle'),
    sealText: document.getElementById('sealText'),
    musicControl: document.getElementById('musicControl'),
    decorLayer: document.getElementById('decorLayer'),
    heroKicker: document.getElementById('heroKicker'),
    heroTitle: document.getElementById('heroTitle'),
    heroText: document.getElementById('heroText'),
    mainInviteText: document.getElementById('mainInviteText'),
    priceLine: document.getElementById('priceLine'),
    detailDate: document.getElementById('detailDate'),
    detailTime: document.getElementById('detailTime'),
    detailPlace: document.getElementById('detailPlace'),
    scriptWord: document.getElementById('scriptWord'),
    galleryTitle: document.getElementById('galleryTitle'),
    slideshowFrame: document.getElementById('slideshowFrame'),
    photoWall: document.getElementById('invitePhotoWall'),
    days: document.getElementById('days'),
    hours: document.getElementById('hours'),
    minutes: document.getElementById('minutes'),
    seconds: document.getElementById('seconds')
  };

  window.onYouTubeIframeAPIReady = function () {
    if (!invitation || !invitation.youtubeVideoId) return;

    player = new YT.Player('yt-player', {
      height: '220',
      width: '220',
      videoId: invitation.youtubeVideoId,
      playerVars: {
        start: invitation.songStart || 0,
        controls: 0,
        autoplay: 0,
        rel: 0,
        playsinline: 1,
        enablejsapi: 1,
        origin: window.location.origin
      },
      events: {
        onReady() {
          playerReady = true;
          try {
            player.unMute();
            player.setVolume(80);
          } catch (error) {
            console.warn(error);
          }
          if (opened) playMusic();
        },
        onError(event) {
          const messages = {
            2: 'ID de video no válido',
            5: 'El reproductor no pudo iniciar',
            100: 'Video privado, eliminado o inexistente',
            101: 'Este video no permite reproducción embebida',
            150: 'Este video no permite reproducción embebida'
          };
          els.musicControl.textContent = '♪ Música no disponible';
          els.musicControl.title = messages[event.data] || 'YouTube bloqueó la reproducción';
        }
      }
    });
  };

  document.addEventListener('DOMContentLoaded', init);

  function init() {
    invitation = loadInvitation();
    template = helpers.getTemplateById(invitation.template);
    applyTemplate();
    renderContent();
    renderDecorations();
    renderPhotos();
    updateCountdown();
    setInterval(updateCountdown, 1000);
    initRevealObserver();

    els.openInvitationBtn.addEventListener('click', openInvitation);
    els.musicControl.addEventListener('click', toggleMusic);
  }

  function loadInvitation() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id') || 'preview';
    const stored = localStorage.getItem(`invitation:${id}`);

    if (stored) {
      try {
        return JSON.parse(stored);
      } catch (error) {
        console.warn(error);
      }
    }

    return {
      id: 'sample',
      template: 'boda',
      eventTitle: 'Nuestra Boda',
      inviteText: 'Te invitamos a acompañarnos en el inicio de nuestra nueva historia y a celebrar con nosotros una noche llena de amor, alegría y momentos inolvidables.',
      eventDate: '2026-09-26',
      eventTime: '18:00',
      endTime: '00:00',
      place: 'Hotel Barceló',
      priceText: 'Inversión $70.00',
      youtubeVideoId: 'Gs069dndIYk',
      songStart: 10,
      photos: helpers.createFallbackPhotos('boda')
    };
  }

  function applyTemplate() {
    document.title = `${invitation.eventTitle || 'Invitación'} | Invitación Digital`;
    els.body.classList.add(template.className);
    els.sealText.textContent = template.emoji;
  }

  function renderContent() {
    const start = helpers.formatTime(invitation.eventTime);
    const end = helpers.formatTime(invitation.endTime);

    els.openTitle.textContent = invitation.eventTitle || template.defaultTitle;
    els.heroKicker.textContent = template.defaultKicker;
    els.heroTitle.textContent = invitation.eventTitle || template.defaultTitle;
    els.heroText.textContent = invitation.inviteText || 'Te invitamos a compartir una ocasión especial.';
    els.mainInviteText.textContent = invitation.inviteText || 'Te invitamos a compartir una ocasión especial.';
    els.priceLine.textContent = invitation.priceText || '';
    els.detailDate.textContent = helpers.formatDate(invitation.eventDate);
    els.detailTime.textContent = end ? `${start} - ${end}` : start;
    els.detailPlace.textContent = invitation.place || 'Lugar por confirmar';
    els.scriptWord.textContent = template.scriptWord;
    els.galleryTitle.textContent = template.galleryTitle;
  }

  function renderDecorations() {
    els.decorLayer.innerHTML = '';
    for (let i = 0; i < 55; i++) {
      const dot = document.createElement('i');
      dot.style.left = `${Math.random() * 100}%`;
      dot.style.top = `${Math.random() * 100}%`;
      dot.style.animationDelay = `${Math.random() * 4}s`;
      dot.style.animationDuration = `${2 + Math.random() * 4}s`;
      els.decorLayer.appendChild(dot);
    }
  }

  function renderPhotos() {
    const photos = invitation.photos && invitation.photos.length ? invitation.photos.slice(0, 5) : helpers.createFallbackPhotos(invitation.template);

    els.slideshowFrame.innerHTML = `
      <img id="slidePhoto" class="slide-photo fx-a" src="${photos[0]}" alt="Fotografía principal" />
    `;

    els.photoWall.innerHTML = '';
    photos.forEach((src, index) => {
      const card = document.createElement('article');
      card.className = 'invite-photo-card reveal-invite';
      card.style.setProperty('--rotation', `${((index % 5) - 2) * 2.2}deg`);
      card.innerHTML = `<img src="${src}" alt="Fotografía ${index + 1}" loading="lazy"><span>${template.name}</span>`;
      els.photoWall.appendChild(card);
    });
  }

  function openInvitation() {
    opened = true;
    els.body.classList.add('opened');
    els.openScreen.classList.add('hide');
    setTimeout(() => els.openScreen.remove(), 1000);
    playMusic();
    startSlideshow();
    launchConfetti();
  }

  function playMusic() {
    if (!playerReady || !player || !invitation.youtubeVideoId) return;
    try {
      player.unMute();
      player.setVolume(80);
      player.loadVideoById({
        videoId: invitation.youtubeVideoId,
        startSeconds: invitation.songStart || 0
      });
      els.musicControl.textContent = '♪ Pausar música';
    } catch (error) {
      console.warn(error);
    }
  }

  function toggleMusic() {
    if (!playerReady || !player) return;
    const state = player.getPlayerState();
    if (state === YT.PlayerState.PLAYING) {
      player.pauseVideo();
      els.musicControl.textContent = '♪ Reproducir música';
    } else {
      player.playVideo();
      els.musicControl.textContent = '♪ Pausar música';
    }
  }

  function startSlideshow() {
    const photos = invitation.photos && invitation.photos.length ? invitation.photos.slice(0, 5) : helpers.createFallbackPhotos(invitation.template);
    if (slideshowTimer || photos.length <= 1) return;

    slideshowTimer = setInterval(() => {
      const img = document.getElementById('slidePhoto');
      if (!img) return;
      slideshowIndex = (slideshowIndex + 1) % photos.length;
      const effects = ['fx-a', 'fx-b', 'fx-c', 'fx-d'];
      img.className = `slide-photo ${effects[slideshowIndex % effects.length]}`;
      img.src = photos[slideshowIndex];
    }, 4200);
  }

  function updateCountdown() {
    const date = invitation.eventDate || '2026-09-26';
    const time = invitation.eventTime || '18:00';
    const target = new Date(`${date}T${time}:00`).getTime();
    const diff = target - Date.now();

    if (diff <= 0) {
      els.days.textContent = '00';
      els.hours.textContent = '00';
      els.minutes.textContent = '00';
      els.seconds.textContent = '00';
      return;
    }

    els.days.textContent = String(Math.floor(diff / 86400000)).padStart(2, '0');
    els.hours.textContent = String(Math.floor(diff / 3600000) % 24).padStart(2, '0');
    els.minutes.textContent = String(Math.floor(diff / 60000) % 60).padStart(2, '0');
    els.seconds.textContent = String(Math.floor(diff / 1000) % 60).padStart(2, '0');
  }

  function initRevealObserver() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      });
    }, { threshold: 0.15 });

    document.querySelectorAll('.reveal-invite').forEach(el => observer.observe(el));
  }

  function launchConfetti() {
    const colors = ['#fff', template.accent, '#ffe4a3', '#ff4edb', '#6ee7ff'];
    for (let i = 0; i < 80; i++) {
      const piece = document.createElement('span');
      piece.className = 'confetti-piece';
      piece.style.left = `${Math.random() * 100}vw`;
      piece.style.background = colors[Math.floor(Math.random() * colors.length)];
      piece.style.animationDelay = `${Math.random() * 0.9}s`;
      piece.style.animationDuration = `${2.5 + Math.random() * 3}s`;
      document.body.appendChild(piece);
      setTimeout(() => piece.remove(), 6200);
    }
  }
})();

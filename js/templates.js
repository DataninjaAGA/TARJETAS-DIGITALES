window.INVITATION_TEMPLATES = [
  {
    id: 'boda',
    name: 'Boda',
    emoji: '💍',
    accent: '#f1c9b7',
    className: 'template-boda',
    short: 'Romántica, iluminada, elegante y soñada para una celebración inolvidable.',
    defaultTitle: 'Nuestra Boda',
    defaultKicker: 'Acompáñanos a celebrar nuestro amor',
    scriptWord: 'Amor',
    galleryTitle: 'Momentos que nos unen'
  },
  {
    id: 'disco',
    name: 'Disco',
    emoji: '🪩',
    accent: '#f8c86a',
    className: 'template-disco',
    short: 'Negro, dorado, luces, bolas disco y brillo retro.',
    defaultTitle: 'Reunión Promoción 85',
    defaultKicker: 'Ven a celebrar con nosotros',
    scriptWord: 'Celebremos',
    galleryTitle: 'Momentos para recordar'
  },
  {
    id: 'verano',
    name: 'Verano',
    emoji: '🌴',
    accent: '#ffb84d',
    className: 'template-verano',
    short: 'Sol, playa, arena, palmeras y colores tropicales.',
    defaultTitle: 'Fiesta de Verano',
    defaultKicker: 'Ven a disfrutar con nosotros',
    scriptWord: 'Aloha',
    galleryTitle: 'Recuerdos bajo el sol'
  },
  {
    id: 'futbol',
    name: 'Fútbol',
    emoji: '⚽',
    accent: '#6ee36d',
    className: 'template-futbol',
    short: 'Cancha, balón, energía deportiva y celebración infantil.',
    defaultTitle: 'Cumpleaños Campeón',
    defaultKicker: 'Prepárate para jugar y celebrar',
    scriptWord: 'Golazo',
    galleryTitle: 'La alineación de recuerdos'
  },
  {
    id: 'princesas',
    name: 'Princesas',
    emoji: '👑',
    accent: '#ff9ddd',
    className: 'template-princesas',
    short: 'Castillo, magia, rosa, lavanda, estrellas y cuento de hadas.',
    defaultTitle: 'Una Celebración Real',
    defaultKicker: 'Estás invitado a un momento mágico',
    scriptWord: 'Magia',
    galleryTitle: 'Un cuento para recordar'
  },
  {
    id: 'elegante',
    name: 'Elegante',
    emoji: '✦',
    accent: '#d6b46a',
    className: 'template-elegante',
    short: 'Sobrio, institucional, premium y moderno para reuniones formales.',
    defaultTitle: 'Encuentro Institucional',
    defaultKicker: 'Nos complace invitarle',
    scriptWord: 'Encuentro',
    galleryTitle: 'Detalles del evento'
  },
  {
    id: 'party-loca',
    name: 'Party Loca',
    emoji: '🎉',
    accent: '#ff2bd6',
    className: 'template-party-loca',
    short: 'Neón, rumba, luces intensas y estética de fiesta grande.',
    defaultTitle: 'Party Loca',
    defaultKicker: 'La noche apenas comienza',
    scriptWord: 'Rumba',
    galleryTitle: 'La noche será épica'
  }
];

window.TEMPLATE_HELPERS = {
  getTemplateById(id) {
    return window.INVITATION_TEMPLATES.find(t => t.id === id) || window.INVITATION_TEMPLATES[0];
  },

  extractYouTubeId(input) {
    const value = String(input || '').trim();
    if (!value) return '';

    const bare = value.match(/^[a-zA-Z0-9_-]{11}$/);
    if (bare) return value;

    try {
      const url = new URL(value);
      const v = url.searchParams.get('v');
      if (v) return v.slice(0, 11);

      const shortMatch = url.hostname.includes('youtu.be') ? url.pathname.split('/').filter(Boolean)[0] : '';
      if (shortMatch) return shortMatch.slice(0, 11);

      const embedMatch = url.pathname.match(/\/(embed|shorts)\/([a-zA-Z0-9_-]{11})/);
      if (embedMatch) return embedMatch[2];
    } catch (error) {
      const watchv = value.match(/watchv=([a-zA-Z0-9_-]{11})/);
      if (watchv) return watchv[1];

      const generic = value.match(/([a-zA-Z0-9_-]{11})/);
      if (generic) return generic[1];
    }

    const generic = value.match(/(?:v=|youtu\.be\/|embed\/|shorts\/)([a-zA-Z0-9_-]{11})/);
    return generic ? generic[1] : '';
  },

  formatDate(dateString) {
    if (!dateString) return '';
    const date = new Date(`${dateString}T12:00:00`);
    return new Intl.DateTimeFormat('es-SV', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(date);
  },

  formatTime(timeString) {
    if (!timeString) return '';
    const [hour, minute] = timeString.split(':').map(Number);
    const date = new Date();
    date.setHours(hour || 0, minute || 0, 0, 0);
    return new Intl.DateTimeFormat('es-SV', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    }).format(date).replace('a. m.', 'a.m.').replace('p. m.', 'p.m.');
  },

  createFallbackPhotos(templateId) {
    const template = this.getTemplateById(templateId);
    return Array.from({ length: 5 }, (_, index) => {
      const label = `${template.name} ${index + 1}`;
      const svg = `
        <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="900" viewBox="0 0 1200 900">
          <defs>
            <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stop-color="${template.accent}"/>
              <stop offset="0.52" stop-color="#111111"/>
              <stop offset="1" stop-color="#ffffff" stop-opacity="0.35"/>
            </linearGradient>
            <filter id="glow"><feGaussianBlur stdDeviation="8" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
          </defs>
          <rect width="1200" height="900" fill="url(#g)"/>
          <circle cx="220" cy="210" r="130" fill="#ffffff" opacity="0.12"/>
          <circle cx="970" cy="680" r="190" fill="#ffffff" opacity="0.10"/>
          <text x="50%" y="47%" text-anchor="middle" font-family="Arial, sans-serif" font-size="95" fill="#fff" font-weight="800" filter="url(#glow)">${template.emoji}</text>
          <text x="50%" y="58%" text-anchor="middle" font-family="Arial, sans-serif" font-size="48" fill="#fff" font-weight="700">${label}</text>
        </svg>`;
      return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
    });
  }
};

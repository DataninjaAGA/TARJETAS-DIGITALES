(function () {
  const templates = window.INVITATION_TEMPLATES;
  const helpers = window.TEMPLATE_HELPERS;
  const state = {
    template: 'boda',
    photos: []
  };

  const els = {
    templateGrid: document.getElementById('templateGrid'),
    templateSelect: document.getElementById('templateSelect'),
    form: document.getElementById('builderForm'),
    uploadInput: document.getElementById('photos'),
    uploadPreview: document.getElementById('uploadPreview'),
    miniPreview: document.getElementById('miniPreview'),
    previewTitle: document.getElementById('previewTitle'),
    previewText: document.getElementById('previewText'),
    previewDetails: document.getElementById('previewDetails'),
    previewBtn: document.getElementById('previewBtn'),
    resetBtn: document.getElementById('resetBtn'),
    modal: document.getElementById('resultModal'),
    generatedLink: document.getElementById('generatedLink'),
    openGeneratedLink: document.getElementById('openGeneratedLink'),
    copyLinkBtn: document.getElementById('copyLinkBtn')
  };

  document.addEventListener('DOMContentLoaded', init);

  function init() {
    renderTemplateOptions();
    hydrateFromTemplate('boda');
    bindEvents();
    updatePreview();
  }

  function renderTemplateOptions() {
    els.templateGrid.innerHTML = '';
    els.templateSelect.innerHTML = '';

    templates.forEach(template => {
      const card = document.createElement('button');
      card.type = 'button';
      card.className = `template-card ${template.className}`;
      card.dataset.template = template.id;
      card.innerHTML = `
        <span class="template-emoji">${template.emoji}</span>
        <strong>${template.name}</strong>
        <small>${template.short}</small>
      `;
      els.templateGrid.appendChild(card);

      const option = document.createElement('option');
      option.value = template.id;
      option.textContent = template.name;
      els.templateSelect.appendChild(option);
    });

    setSelectedTemplate('boda');
  }

  function bindEvents() {
    els.templateGrid.addEventListener('click', event => {
      const card = event.target.closest('[data-template]');
      if (!card) return;

      setSelectedTemplate(card.dataset.template);
      hydrateFromTemplate(card.dataset.template, true);
      updatePreview();
      document.getElementById('crear').scrollIntoView({ behavior: 'smooth', block: 'start' });
    });

    els.templateSelect.addEventListener('change', event => {
      setSelectedTemplate(event.target.value);
      hydrateFromTemplate(event.target.value, true);
      updatePreview();
    });

    els.form.addEventListener('input', updatePreview);
    els.form.addEventListener('submit', handleSubmit);

    els.uploadInput.addEventListener('change', handlePhotoUpload);

    els.previewBtn.addEventListener('click', () => {
      const id = saveInvitation({ previewOnly: true });
      window.open(`invite.html?id=${encodeURIComponent(id)}`, '_blank');
    });

    els.resetBtn.addEventListener('click', () => {
      els.form.reset();
      state.photos = [];
      els.uploadPreview.innerHTML = '';
      setSelectedTemplate('boda');
      hydrateFromTemplate('boda');
      updatePreview();
    });

    document.querySelectorAll('[data-close-modal]').forEach(node => {
      node.addEventListener('click', closeModal);
    });

    els.copyLinkBtn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(els.generatedLink.value);
        els.copyLinkBtn.textContent = 'Copiado';
        setTimeout(() => els.copyLinkBtn.textContent = 'Copiar link', 1400);
      } catch (error) {
        els.generatedLink.select();
        document.execCommand('copy');
      }
    });
  }

  function setSelectedTemplate(templateId) {
    const template = helpers.getTemplateById(templateId);
    state.template = template.id;
    els.templateSelect.value = template.id;

    document.querySelectorAll('.template-card').forEach(card => {
      card.classList.toggle('selected', card.dataset.template === template.id);
    });

    els.miniPreview.className = `invite-preview-card ${template.className}`;
  }

  function hydrateFromTemplate(templateId, force = true) {
    const template = helpers.getTemplateById(templateId);
    const title = document.getElementById('eventTitle');
    const text = document.getElementById('inviteText');
    const price = document.getElementById('priceText');

    if (force || !title.value) {
      title.value = template.defaultTitle;
    }

    if (force || !text.value) {
      const defaultMessages = {
        boda: 'Te invitamos a acompañarnos en el inicio de nuestra nueva historia y a celebrar con nosotros una noche llena de amor, alegría y momentos inolvidables.',
        disco: 'Te invitamos a compartir una noche especial, para reencontrarnos, recordar buenos momentos y crear nuevas memorias juntos.',
        verano: 'Prepárate para vivir una celebración refrescante, alegre y llena de buena vibra junto a quienes más quieres.',
        futbol: 'Ven a vivir una celebración llena de energía, goles, diversión y un montón de momentos para aplaudir.',
        princesas: 'Acompáñanos a vivir un día mágico, lleno de ternura, ilusión y recuerdos dignos de un cuento de hadas.',
        elegante: 'Nos complace invitarle a un encuentro especial diseñado para compartir, conectar y fortalecer relaciones en un ambiente distinguido.',
        'party-loca': 'Prepárate para una noche intensa, divertida y llena de rumba, baile, amigos y recuerdos memorables.'
      };
      text.value = defaultMessages[template.id] || defaultMessages.disco;
    }

    if (force || !price.value) {
      price.value = template.id === 'elegante' ? 'Evento privado' : 'Inversión $70.00';
    }
  }

  async function handlePhotoUpload(event) {
    const files = Array.from(event.target.files || []).slice(0, 5);
    state.photos = [];
    els.uploadPreview.innerHTML = '<span class="upload-status">Procesando imágenes...</span>';

    try {
      const processed = [];
      for (const file of files) {
        processed.push(await resizeImage(file, 1200, 0.76));
      }
      state.photos = processed;
      renderUploadPreview();
    } catch (error) {
      console.error(error);
      els.uploadPreview.innerHTML = '<span class="upload-status error">No se pudieron procesar las imágenes. Intenta con archivos más livianos.</span>';
    }
  }

  function renderUploadPreview() {
    els.uploadPreview.innerHTML = '';
    if (!state.photos.length) return;

    state.photos.forEach((src, index) => {
      const img = document.createElement('img');
      img.src = src;
      img.alt = `Foto ${index + 1}`;
      els.uploadPreview.appendChild(img);
    });
  }

  function resizeImage(file, maxSize, quality) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onerror = reject;
      reader.onload = () => {
        const img = new Image();
        img.onerror = reject;
        img.onload = () => {
          const ratio = Math.min(maxSize / img.width, maxSize / img.height, 1);
          const canvas = document.createElement('canvas');
          canvas.width = Math.round(img.width * ratio);
          canvas.height = Math.round(img.height * ratio);
          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
          resolve(canvas.toDataURL('image/jpeg', quality));
        };
        img.src = reader.result;
      };
      reader.readAsDataURL(file);
    });
  }

  function updatePreview() {
    const data = getFormData();
    const template = helpers.getTemplateById(data.template);

    els.previewTitle.textContent = data.eventTitle || template.defaultTitle;
    els.previewText.textContent = data.inviteText || 'Texto de invitación';
    els.previewDetails.textContent = `${helpers.formatDate(data.eventDate)} · ${helpers.formatTime(data.eventTime)} · ${data.place || 'Lugar'}`;
  }

  function getFormData() {
    const formData = new FormData(els.form);
    const templateId = formData.get('template') || state.template;
    const youtubeUrl = formData.get('youtubeUrl') || '';

    return {
      id: '',
      template: templateId,
      eventTitle: String(formData.get('eventTitle') || '').trim(),
      inviteText: String(formData.get('inviteText') || '').trim(),
      eventDate: formData.get('eventDate') || '',
      eventTime: formData.get('eventTime') || '',
      endTime: formData.get('endTime') || '',
      place: String(formData.get('place') || '').trim(),
      priceText: String(formData.get('priceText') || '').trim(),
      youtubeUrl,
      youtubeVideoId: helpers.extractYouTubeId(youtubeUrl),
      songStart: Math.max(0, parseInt(formData.get('songStart') || '0', 10) || 0),
      email: String(formData.get('email') || '').trim(),
      photos: state.photos,
      createdAt: new Date().toISOString(),
      status: 'demo'
    };
  }

  function handleSubmit(event) {
    event.preventDefault();
    const id = saveInvitation();
    const url = `${window.location.origin}${window.location.pathname.replace('index.html', '')}invite.html?id=${encodeURIComponent(id)}`;

    els.generatedLink.value = url;
    els.openGeneratedLink.href = url;
    openModal();
  }

  function saveInvitation({ previewOnly = false } = {}) {
    const data = getFormData();
    const id = previewOnly ? 'preview' : `demo-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`;
    data.id = id;

    if (!data.photos.length) {
      data.photos = helpers.createFallbackPhotos(data.template);
    }

    try {
      localStorage.setItem(`invitation:${id}`, JSON.stringify(data));
    } catch (error) {
      console.warn('localStorage quota exceeded; saving without photos', error);
      data.photos = helpers.createFallbackPhotos(data.template);
      localStorage.setItem(`invitation:${id}`, JSON.stringify(data));
    }

    return id;
  }

  function openModal() {
    els.modal.classList.add('open');
    els.modal.setAttribute('aria-hidden', 'false');
  }

  function closeModal() {
    els.modal.classList.remove('open');
    els.modal.setAttribute('aria-hidden', 'true');
  }
})();

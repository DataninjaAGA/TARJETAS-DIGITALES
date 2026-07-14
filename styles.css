:root {
  --bg: #08080d;
  --surface: rgba(255, 255, 255, 0.08);
  --surface-strong: rgba(255, 255, 255, 0.14);
  --text: #ffffff;
  --muted: rgba(255, 255, 255, 0.72);
  --line: rgba(255, 255, 255, 0.16);
  --gold: #f8c86a;
  --radius: 28px;
  --shadow: 0 24px 80px rgba(0, 0, 0, 0.42);
  --font-main: 'Montserrat', system-ui, sans-serif;
  --font-display: 'Anton', Impact, sans-serif;
  --font-script: 'Pacifico', cursive;
}

* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
  margin: 0;
  min-height: 100vh;
  background: var(--bg);
  color: var(--text);
  font-family: var(--font-main);
  overflow-x: hidden;
}

a { color: inherit; text-decoration: none; }
button, input, textarea, select { font: inherit; }
button { cursor: pointer; }

.site-body {
  background:
    radial-gradient(circle at 10% 8%, rgba(248, 200, 106, .16), transparent 30%),
    radial-gradient(circle at 90% 12%, rgba(255, 64, 205, .10), transparent 28%),
    linear-gradient(135deg, #07070d 0%, #12111d 55%, #050505 100%);
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 30;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  padding: 18px clamp(18px, 5vw, 64px);
  background: rgba(8, 8, 13, 0.72);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255,255,255,.08);
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-weight: 900;
  letter-spacing: -0.03em;
}
.brand span span { color: var(--gold); }
.brand-mark {
  width: 38px;
  height: 38px;
  display: grid;
  place-items: center;
  border-radius: 14px;
  background: linear-gradient(135deg, #fff2c0, #ffbf3d);
  color: #150e04;
  box-shadow: 0 0 24px rgba(248, 200, 106, .45);
}

.site-nav {
  display: flex;
  gap: 14px;
  color: var(--muted);
  font-size: .93rem;
  font-weight: 700;
}
.site-nav a {
  padding: 10px 12px;
  border-radius: 999px;
}
.site-nav a:hover { background: rgba(255,255,255,.08); color: #fff; }

.site-hero {
  position: relative;
  min-height: calc(100svh - 75px);
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(300px, .75fr);
  gap: clamp(30px, 5vw, 70px);
  align-items: center;
  padding: 70px clamp(18px, 6vw, 92px);
  overflow: hidden;
}
.hero-copy { position: relative; z-index: 2; }
.eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--gold);
  font-size: .78rem;
  font-weight: 900;
  letter-spacing: .16em;
  text-transform: uppercase;
}
.eyebrow::before {
  content: '';
  width: 24px;
  height: 2px;
  background: currentColor;
  box-shadow: 0 0 14px currentColor;
}
.site-hero h1 {
  margin: 16px 0 20px;
  max-width: 850px;
  font-family: var(--font-display);
  font-size: clamp(3.3rem, 9vw, 8.2rem);
  line-height: .92;
  text-transform: uppercase;
  letter-spacing: .01em;
}
.site-hero p {
  margin: 0;
  max-width: 760px;
  color: var(--muted);
  font-size: clamp(1rem, 2.1vw, 1.28rem);
  line-height: 1.65;
}
.hero-actions, .form-actions, .modal-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 30px;
}
.btn {
  border: 1px solid var(--line);
  border-radius: 999px;
  padding: 14px 22px;
  font-weight: 900;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  min-height: 48px;
  transition: transform .25s ease, box-shadow .25s ease, background .25s ease;
}
.btn:hover { transform: translateY(-2px); }
.btn-primary {
  background: linear-gradient(90deg, #fff4c0, #f7bd3a, #fff0b4);
  color: #171006;
  border: 0;
  box-shadow: 0 0 28px rgba(248, 200, 106, .34);
}
.btn-ghost { background: rgba(255,255,255,.07); color: #fff; }
.hero-glow {
  position: absolute;
  border-radius: 50%;
  filter: blur(24px);
  opacity: .5;
  pointer-events: none;
}
.hero-glow-one {
  width: 340px;
  height: 340px;
  background: #f8c86a;
  right: 18%;
  top: 12%;
}
.hero-glow-two {
  width: 260px;
  height: 260px;
  background: #fe34c8;
  left: -80px;
  bottom: 10%;
}
.hero-phone {
  display: grid;
  place-items: center;
  position: relative;
  z-index: 2;
}
.phone-shell {
  width: min(340px, 82vw);
  min-height: 610px;
  border-radius: 44px;
  padding: 48px 24px 28px;
  border: 10px solid rgba(255,255,255,.12);
  box-shadow: var(--shadow);
  position: relative;
  text-align: center;
  overflow: hidden;
  isolation: isolate;
}
.phone-notch {
  position: absolute;
  top: 14px;
  left: 50%;
  transform: translateX(-50%);
  width: 110px;
  height: 20px;
  border-radius: 999px;
  background: rgba(0,0,0,.7);
  z-index: 5;
}
.mini-envelope {
  width: 150px;
  height: 110px;
  margin: 35px auto 35px;
  border-radius: 20px;
  display: grid;
  place-items: center;
  font-family: var(--font-display);
  font-size: 4rem;
  background: linear-gradient(135deg, #fff4c0, #e2a83d);
  color: #171006;
  box-shadow: 0 0 45px rgba(248,200,106,.55);
}
.phone-shell h3 {
  font-family: var(--font-display);
  font-size: 3rem;
  line-height: 1;
  margin: 0 0 18px;
  text-transform: uppercase;
}
.phone-shell p { color: rgba(255,255,255,.72); }
.mini-count {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  margin: 18px 0 30px;
}
.mini-count span {
  padding: 12px 4px;
  border-radius: 16px;
  background: rgba(255,255,255,.13);
  font-weight: 900;
}
.mini-photos {
  display: flex;
  justify-content: center;
  gap: 12px;
}
.mini-photos i {
  width: 64px;
  height: 86px;
  border-radius: 14px;
  background: rgba(255,255,255,.2);
  transform: rotate(var(--r, -7deg));
}
.mini-photos i:nth-child(2) { --r: 4deg; }
.mini-photos i:nth-child(3) { --r: 10deg; }

.section {
  padding: 88px clamp(18px, 6vw, 92px);
}
.section-title {
  max-width: 820px;
  margin: 0 auto 44px;
  text-align: center;
}
.section-title.compact { margin-bottom: 28px; }
.section-title h2 {
  margin: 12px 0 12px;
  font-family: var(--font-display);
  font-size: clamp(2.5rem, 7vw, 5.4rem);
  line-height: .95;
  text-transform: uppercase;
}
.section-title p { color: var(--muted); line-height: 1.7; }

.template-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
  max-width: 1180px;
  margin: 0 auto;
}
.template-card {
  min-height: 245px;
  border: 1px solid rgba(255,255,255,.14);
  border-radius: var(--radius);
  padding: 24px;
  color: #fff;
  text-align: left;
  overflow: hidden;
  position: relative;
  box-shadow: 0 20px 50px rgba(0,0,0,.25);
  transition: transform .25s ease, border-color .25s ease, box-shadow .25s ease;
}
.template-card::after {
  content: '';
  position: absolute;
  inset: auto -30% -50% -30%;
  height: 170px;
  background: rgba(255,255,255,.18);
  filter: blur(20px);
  transform: rotate(-8deg);
}
.template-card:hover, .template-card.selected {
  transform: translateY(-6px);
  border-color: rgba(255,255,255,.45);
  box-shadow: 0 28px 80px rgba(0,0,0,.38);
}
.template-emoji { font-size: 2.6rem; display: block; margin-bottom: 22px; }
.template-card strong {
  display: block;
  font-family: var(--font-display);
  font-size: 2.2rem;
  text-transform: uppercase;
  line-height: 1;
}
.template-card small {
  display: block;
  margin-top: 12px;
  color: rgba(255,255,255,.78);
  line-height: 1.45;
}

.impact-strip {
  margin: 0 clamp(18px, 6vw, 92px);
  padding: 28px;
  border-radius: 28px;
  border: 1px solid rgba(255,255,255,.16);
  background: linear-gradient(90deg, rgba(248,200,106,.18), rgba(255,255,255,.08), rgba(109,232,151,.14));
  box-shadow: var(--shadow);
}
.impact-strip div {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  text-align: center;
  color: #fff;
}
.impact-strip span { font-size: 2.4rem; }
.impact-strip strong { line-height: 1.55; }

.builder-layout {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(320px, 430px);
  gap: 24px;
  align-items: start;
  max-width: 1220px;
  margin: 0 auto;
}
.builder-form, .live-preview {
  border: 1px solid rgba(255,255,255,.13);
  border-radius: 32px;
  background: rgba(255,255,255,.075);
  backdrop-filter: blur(18px);
  box-shadow: var(--shadow);
}
.builder-form { padding: clamp(18px, 3vw, 34px); }
fieldset {
  border: 1px solid rgba(255,255,255,.12);
  border-radius: 24px;
  padding: 22px;
  margin: 0 0 18px;
}
legend {
  padding: 0 10px;
  font-weight: 900;
  color: var(--gold);
}
label {
  display: block;
  margin: 16px 0 8px;
  font-weight: 800;
  color: rgba(255,255,255,.88);
}
input, textarea, select {
  width: 100%;
  border: 1px solid rgba(255,255,255,.16);
  background: rgba(0,0,0,.34);
  color: #fff;
  border-radius: 16px;
  padding: 14px 14px;
  outline: none;
}
input:focus, textarea:focus, select:focus {
  border-color: var(--gold);
  box-shadow: 0 0 0 4px rgba(248,200,106,.13);
}
textarea { resize: vertical; }
.form-grid.two {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 14px;
}
.field-help {
  color: rgba(255,255,255,.58);
  font-size: .88rem;
  line-height: 1.5;
  margin: 8px 0 0;
}
.upload-preview {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 14px;
}
.upload-preview img {
  width: 82px;
  height: 82px;
  object-fit: cover;
  border-radius: 16px;
  border: 1px solid rgba(255,255,255,.18);
}
.upload-status { color: var(--gold); font-weight: 800; }
.upload-status.error { color: #ff8d8d; }
.price-card {
  margin-top: 18px;
  padding: 18px;
  border-radius: 20px;
  background: rgba(248,200,106,.12);
  border: 1px solid rgba(248,200,106,.25);
}
.price-card span, .price-card small { display: block; color: rgba(255,255,255,.72); }
.price-card strong { display: block; font-size: 2.6rem; margin: 4px 0; color: var(--gold); }
.live-preview {
  position: sticky;
  top: 96px;
  padding: 18px;
}
.preview-toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 14px;
  font-weight: 900;
}
.preview-toolbar button {
  border: 1px solid rgba(255,255,255,.18);
  background: rgba(255,255,255,.1);
  color: #fff;
  border-radius: 999px;
  padding: 10px 14px;
  font-weight: 800;
}
.invite-preview-card {
  min-height: 620px;
  border-radius: 30px;
  padding: 30px 24px;
  position: relative;
  overflow: hidden;
  display: grid;
  align-content: center;
  text-align: center;
  box-shadow: inset 0 0 0 1px rgba(255,255,255,.12), 0 20px 50px rgba(0,0,0,.32);
}
.preview-badge {
  position: absolute;
  top: 18px;
  right: 18px;
  border-radius: 999px;
  padding: 7px 11px;
  background: rgba(255,255,255,.14);
  font-size: .75rem;
  font-weight: 900;
}
.invite-preview-card h3 {
  font-family: var(--font-display);
  font-size: clamp(2.6rem, 6vw, 4.2rem);
  line-height: 1;
  text-transform: uppercase;
  margin: 0 0 18px;
}
.invite-preview-card p { color: rgba(255,255,255,.82); line-height: 1.5; }
.preview-countdown {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
  margin: 25px 0;
}
.preview-countdown span {
  padding: 14px 4px;
  border-radius: 14px;
  background: rgba(255,255,255,.12);
  font-weight: 900;
}
.preview-details { color: rgba(255,255,255,.76); font-weight: 800; }
.preview-note {
  margin-top: 14px;
  color: rgba(255,255,255,.64);
  line-height: 1.55;
  font-size: .9rem;
}

.modal {
  display: none;
  position: fixed;
  inset: 0;
  z-index: 80;
}
.modal.open { display: block; }
.modal-backdrop {
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,.72);
  backdrop-filter: blur(12px);
}
.modal-card {
  position: relative;
  width: min(620px, calc(100vw - 28px));
  margin: 8vh auto;
  border-radius: 30px;
  background: #12121c;
  border: 1px solid rgba(255,255,255,.16);
  box-shadow: var(--shadow);
  padding: clamp(22px, 4vw, 38px);
}
.modal-card h2 {
  margin: 12px 0;
  font-family: var(--font-display);
  font-size: clamp(2rem, 5vw, 3.5rem);
  line-height: 1;
  text-transform: uppercase;
}
.modal-card p { color: var(--muted); line-height: 1.6; }
.modal-close {
  position: absolute;
  top: 14px;
  right: 14px;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  border: 1px solid rgba(255,255,255,.14);
  background: rgba(255,255,255,.08);
  color: #fff;
  font-size: 1.6rem;
}

/* Theme foundations */
.template-boda {
  background:
    radial-gradient(circle at 18% 16%, rgba(255,255,255,.7), transparent 13%),
    radial-gradient(circle at 82% 18%, rgba(241,201,183,.46), transparent 19%),
    linear-gradient(135deg, #f5e6de 0%, #f2d4c6 42%, #c88f7b 100%);
}
.template-disco {
  background:
    radial-gradient(circle at 15% 15%, rgba(255,219,120,.28), transparent 25%),
    radial-gradient(circle at 85% 20%, rgba(255,255,255,.14), transparent 20%),
    linear-gradient(135deg, #030303, #1c1103 48%, #000);
}
.template-verano {
  background:
    radial-gradient(circle at 18% 16%, rgba(255,234,103,.78), transparent 16%),
    radial-gradient(circle at 78% 30%, rgba(25,190,219,.45), transparent 25%),
    linear-gradient(145deg, #16b6d5 0%, #67d6e8 45%, #f7c270 46%, #f59f4c 100%);
}
.template-futbol {
  background:
    repeating-linear-gradient(90deg, rgba(255,255,255,.05) 0 16%, transparent 16% 32%),
    linear-gradient(135deg, #082b12, #167237 55%, #0a3f20);
}
.template-princesas {
  background:
    radial-gradient(circle at 20% 20%, rgba(255,255,255,.38), transparent 20%),
    radial-gradient(circle at 85% 20%, rgba(255,157,221,.42), transparent 26%),
    linear-gradient(135deg, #7d3ac7, #ff9ddd 52%, #6a2f9e);
}
.template-elegante {
  background:
    linear-gradient(135deg, rgba(214,180,106,.16), transparent 35%),
    linear-gradient(145deg, #05070c, #152033 55%, #0a0d14);
}
.template-party-loca {
  background:
    radial-gradient(circle at 14% 20%, rgba(255,43,214,.55), transparent 24%),
    radial-gradient(circle at 88% 18%, rgba(27,232,255,.48), transparent 23%),
    radial-gradient(circle at 45% 90%, rgba(255,230,0,.34), transparent 26%),
    linear-gradient(135deg, #16001d, #080016 52%, #00131c);
}

/* Invitation page */
.invitation-body { background: #000; }
.invitation-body:not(.opened) { overflow: hidden; }
.invite-bg {
  position: fixed;
  inset: 0;
  z-index: -10;
}
.decor-layer {
  position: fixed;
  inset: 0;
  z-index: -5;
  pointer-events: none;
  overflow: hidden;
}
.decor-layer i {
  position: absolute;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: #fff;
  box-shadow: 0 0 18px 4px currentColor;
  animation: sparklePulse linear infinite;
  opacity: .6;
}
@keyframes sparklePulse {
  0%, 100% { transform: scale(.4); opacity: .25; }
  50% { transform: scale(1.6); opacity: 1; }
}
.template-boda .invite-bg {
  background:
    radial-gradient(circle at 18% 12%, rgba(255,255,255,.75), transparent 16%),
    radial-gradient(circle at 82% 15%, rgba(241,201,183,.42), transparent 19%),
    radial-gradient(circle at 50% 85%, rgba(255,255,255,.16), transparent 24%),
    linear-gradient(145deg, #f8efe9 0%, #f0d6c9 45%, #c98d78 100%);
}
.template-disco .invite-bg {
  background:
    radial-gradient(circle at 25% 18%, rgba(248,200,106,.22), transparent 26%),
    radial-gradient(circle at 85% 15%, rgba(255,255,255,.16), transparent 18%),
    radial-gradient(circle at 20% 85%, rgba(248,200,106,.14), transparent 28%),
    linear-gradient(145deg, #030303, #140d04 55%, #000);
}
.template-verano .invite-bg {
  background:
    radial-gradient(circle at 12% 12%, rgba(255,240,102,.85), transparent 13%),
    linear-gradient(180deg, #28c2e2 0%, #66d8ed 45%, #f8ca86 46%, #ffad5f 100%);
}
.template-futbol .invite-bg {
  background:
    radial-gradient(circle at 80% 15%, rgba(255,255,255,.14), transparent 20%),
    repeating-linear-gradient(90deg, rgba(255,255,255,.04) 0 10%, transparent 10% 20%),
    linear-gradient(135deg, #062b13, #11823a 55%, #062611);
}
.template-princesas .invite-bg {
  background:
    radial-gradient(circle at 20% 14%, rgba(255,255,255,.38), transparent 18%),
    radial-gradient(circle at 78% 18%, rgba(255,200,238,.48), transparent 20%),
    linear-gradient(135deg, #7531bd, #f58fd7 52%, #52258d);
}
.template-elegante .invite-bg {
  background:
    radial-gradient(circle at 15% 20%, rgba(214,180,106,.22), transparent 22%),
    linear-gradient(145deg, #04070d, #111e31 58%, #030407);
}
.template-party-loca .invite-bg {
  background:
    radial-gradient(circle at 16% 16%, rgba(255,43,214,.52), transparent 22%),
    radial-gradient(circle at 84% 20%, rgba(27,232,255,.42), transparent 24%),
    linear-gradient(135deg, #16001d, #04000b 52%, #001520);
}


.template-boda .invite-bg::before,
.template-boda .invite-bg::after {
  content: '';
  position: absolute;
  pointer-events: none;
}
.template-boda .invite-bg::before {
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  width: min(58vw, 520px);
  height: min(44vw, 360px);
  background:
    radial-gradient(circle at 38% 30%, rgba(0,0,0,.92) 0 10%, transparent 11%),
    radial-gradient(circle at 62% 28%, rgba(0,0,0,.92) 0 10%, transparent 11%),
    radial-gradient(ellipse at 36% 65%, rgba(0,0,0,.92) 0 21%, transparent 22%),
    radial-gradient(ellipse at 64% 64%, rgba(0,0,0,.92) 0 21%, transparent 22%),
    linear-gradient(115deg, transparent 0 31%, rgba(0,0,0,.92) 31% 39%, transparent 39% 61%, rgba(0,0,0,.92) 61% 69%, transparent 69%),
    radial-gradient(circle at 50% 42%, rgba(0,0,0,.92) 0 7%, transparent 8%),
    radial-gradient(ellipse at 50% 98%, rgba(255,255,255,.12) 0 35%, transparent 36%);
  filter: drop-shadow(0 -6px 24px rgba(255,255,255,.08));
  opacity: .28;
}
.template-boda .invite-bg::after {
  inset: 0;
  background:
    radial-gradient(circle at 25% 25%, rgba(255,255,255,.18) 0 1px, transparent 2px),
    radial-gradient(circle at 74% 18%, rgba(255,255,255,.16) 0 1px, transparent 2px),
    radial-gradient(circle at 48% 22%, rgba(255,255,255,.14) 0 1px, transparent 2px);
  background-size: 120px 120px, 180px 180px, 150px 150px;
  opacity: .7;
}

.yt-player-shell {
  position: fixed;
  right: 16px;
  bottom: 76px;
  width: 220px;
  height: 220px;
  opacity: .01;
  pointer-events: none;
  z-index: 0;
}
.music-control {
  position: fixed;
  right: 18px;
  bottom: 18px;
  z-index: 20;
  border: 1px solid rgba(255,255,255,.22);
  background: rgba(0,0,0,.56);
  color: #fff;
  backdrop-filter: blur(14px);
  border-radius: 999px;
  padding: 12px 16px;
  font-weight: 900;
  opacity: 0;
  transform: translateY(18px);
  pointer-events: none;
  transition: .35s ease;
}
.opened .music-control { opacity: 1; transform: translateY(0); pointer-events: auto; }

.open-screen {
  position: fixed;
  inset: 0;
  z-index: 60;
  display: grid;
  place-items: center;
  padding: 22px;
  background: rgba(0,0,0,.72);
  backdrop-filter: blur(10px);
  transition: opacity .8s ease, transform .8s ease;
}
.open-screen.hide { opacity: 0; transform: scale(1.06); pointer-events: none; }
.open-card {
  width: min(500px, 94vw);
  text-align: center;
  border-radius: 36px;
  padding: 34px 24px;
  background: rgba(255,255,255,.08);
  border: 1px solid rgba(255,255,255,.16);
  box-shadow: var(--shadow);
}
.open-kicker {
  color: var(--gold);
  font-size: .78rem;
  font-weight: 900;
  letter-spacing: .18em;
  text-transform: uppercase;
}
.open-card h1 {
  font-family: var(--font-display);
  font-size: clamp(2.2rem, 8vw, 4.8rem);
  line-height: .95;
  text-transform: uppercase;
  margin: 20px 0 12px;
}
.open-card p { color: var(--muted); line-height: 1.6; }
.envelope-open {
  width: min(350px, 80vw);
  height: 225px;
  margin: 26px auto 8px;
  position: relative;
  perspective: 900px;
  filter: drop-shadow(0 30px 40px rgba(0,0,0,.52));
}
.env-back, .env-front, .env-flap {
  position: absolute;
  inset: 0;
  border-radius: 20px;
}
.env-back { background: linear-gradient(135deg, #19110a, var(--gold)); }
.env-front {
  clip-path: polygon(0 35%, 50% 72%, 100% 35%, 100% 100%, 0 100%);
  background: linear-gradient(135deg, #76500d, #ffe2a1 52%, #7d4e04);
}
.env-flap {
  clip-path: polygon(0 0, 100% 0, 50% 62%);
  background: linear-gradient(180deg, #fff6cc, #c58520);
  transform-origin: top center;
  animation: flapWave 2.2s ease-in-out infinite;
}
.env-seal {
  position: absolute;
  left: 50%;
  top: 53%;
  transform: translate(-50%, -50%);
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background: linear-gradient(135deg, #fff7cb, var(--gold));
  color: #110c04;
  display: grid;
  place-items: center;
  font-size: 2rem;
  box-shadow: 0 0 32px rgba(248,200,106,.6);
}
@keyframes flapWave { 50% { transform: rotateX(8deg); } }
.btn-open { margin-top: 18px; }

.invite-main {
  opacity: 0;
  transform: translateY(18px);
  transition: .8s ease;
}
.opened .invite-main { opacity: 1; transform: none; }
.invite-hero {
  min-height: 100svh;
  padding: 90px clamp(18px, 7vw, 100px) 60px;
  display: grid;
  place-items: center;
  text-align: center;
  position: relative;
}
.invite-kicker {
  color: var(--gold);
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: .17em;
  font-size: clamp(.78rem, 2vw, 1rem);
  text-shadow: 0 0 22px currentColor;
}
.invite-hero h1 {
  margin: 20px auto;
  font-family: var(--font-display);
  font-size: clamp(3.8rem, 14vw, 11rem);
  line-height: .88;
  max-width: 1100px;
  text-transform: uppercase;
  letter-spacing: .015em;
  text-shadow: 0 0 40px rgba(255,255,255,.16);
}
.template-elegante .invite-hero h1 {
  font-family: 'Cinzel', serif;
  letter-spacing: .02em;
}
.template-boda .invite-hero h1 {
  font-family: 'Playfair Display', serif;
  text-transform: none;
  line-height: 1.02;
  letter-spacing: .01em;
}
.template-princesas .invite-hero h1,
.template-verano .invite-hero h1 {
  font-family: var(--font-script);
  text-transform: none;
  line-height: 1.05;
}
.invite-hero p {
  max-width: 860px;
  margin: 0 auto;
  color: rgba(255,255,255,.85);
  font-size: clamp(1.05rem, 3vw, 1.5rem);
  line-height: 1.55;
}
.countdown-label {
  margin: 42px 0 18px;
  color: rgba(255,255,255,.86);
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: .13em;
}
.big-countdown {
  width: min(800px, 100%);
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 14px;
  margin: 0 auto;
}
.big-countdown div {
  border: 1px solid rgba(255,255,255,.18);
  border-radius: 24px;
  padding: 18px 8px;
  background: rgba(255,255,255,.095);
  backdrop-filter: blur(16px);
  box-shadow: 0 18px 50px rgba(0,0,0,.28);
}
.big-countdown strong {
  display: block;
  font-family: var(--font-display);
  font-size: clamp(2rem, 8vw, 5.2rem);
  line-height: .95;
  color: var(--gold);
}
.big-countdown span {
  display: block;
  margin-top: 8px;
  font-weight: 900;
  font-size: .76rem;
  text-transform: uppercase;
  letter-spacing: .12em;
  color: rgba(255,255,255,.75);
}
.scroll-cue {
  position: absolute;
  bottom: 25px;
  color: rgba(255,255,255,.65);
  animation: scrollBounce 1.6s ease-in-out infinite;
}
@keyframes scrollBounce { 50% { transform: translateY(9px); opacity: 1; } }
.invite-story {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(320px, 0.95fr);
  gap: clamp(24px, 5vw, 58px);
  align-items: center;
  padding: 80px clamp(18px, 7vw, 100px);
}
.slideshow-frame, .invite-info-panel {
  border: 1px solid rgba(255,255,255,.18);
  border-radius: 38px;
  background: rgba(255,255,255,.09);
  backdrop-filter: blur(18px);
  box-shadow: var(--shadow);
  overflow: hidden;
}
.slideshow-frame {
  min-height: 580px;
  display: grid;
  place-items: center;
  position: relative;
}
.slideshow-frame::after {
  content: '';
  position: absolute;
  inset: 18px;
  border-radius: 28px;
  border: 1px solid rgba(255,255,255,.2);
  pointer-events: none;
}
.photo-placeholder { color: var(--muted); font-weight: 800; }
.slide-photo {
  width: 100%;
  height: 100%;
  min-height: 580px;
  object-fit: cover;
  display: block;
  filter: saturate(1.05) contrast(1.04);
}
.fx-a { animation: photoZoom 4.3s ease both; }
.fx-b { animation: photoSlide 4.3s ease both; }
.fx-c { animation: photoTilt 4.3s ease both; }
.fx-d { animation: photoGlow 4.3s ease both; }
@keyframes photoZoom { from { opacity: 0; transform: scale(1.2); } to { opacity: 1; transform: scale(1.02); } }
@keyframes photoSlide { from { opacity: 0; transform: translateX(55px) scale(1.08); } to { opacity: 1; transform: translateX(0) scale(1.02); } }
@keyframes photoTilt { from { opacity: 0; transform: rotate(-4deg) scale(1.13); } to { opacity: 1; transform: rotate(0) scale(1.02); } }
@keyframes photoGlow { from { opacity: 0; filter: blur(8px) brightness(1.35); } to { opacity: 1; filter: blur(0) brightness(1); } }
.invite-info-panel {
  padding: clamp(26px, 5vw, 54px);
  text-align: center;
}
.script-word {
  display: block;
  font-family: var(--font-script);
  font-size: clamp(2.8rem, 8vw, 5.4rem);
  line-height: 1;
  color: var(--gold);
  text-shadow: 0 0 28px currentColor;
  margin-bottom: 22px;
}
.template-elegante .script-word, .template-boda .script-word { font-family: 'Playfair Display', serif; }
.invite-info-panel p {
  margin: 0;
  color: rgba(255,255,255,.88);
  font-size: clamp(1.05rem, 2.5vw, 1.45rem);
  line-height: 1.55;
}
.invite-info-panel h2 {
  margin: 28px 0;
  font-size: clamp(1.5rem, 4vw, 2.4rem);
  color: #fff;
}
.invite-details {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  margin-top: 22px;
}
.invite-details article {
  border-left: 1px solid rgba(255,255,255,.2);
  border-right: 1px solid rgba(255,255,255,.12);
  padding: 16px 8px;
}
.invite-details b {
  display: block;
  color: var(--gold);
  text-transform: uppercase;
  letter-spacing: .13em;
  font-size: .76rem;
  margin-bottom: 8px;
}
.invite-details span { color: rgba(255,255,255,.84); line-height: 1.35; }
.invite-gallery {
  padding: 78px clamp(18px, 7vw, 100px);
}
.gallery-heading {
  text-align: center;
  margin-bottom: 42px;
}
.gallery-heading h2 {
  margin: 14px 0 0;
  font-family: var(--font-display);
  font-size: clamp(2.4rem, 7vw, 5.6rem);
  line-height: .95;
  text-transform: uppercase;
}
.invite-photo-wall {
  max-width: 1120px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 18px;
}
.invite-photo-card {
  border-radius: 26px;
  padding: 10px 10px 16px;
  background: rgba(255,255,255,.88);
  color: #111;
  transform: rotate(var(--rotation));
  box-shadow: 0 22px 50px rgba(0,0,0,.36);
  transition: .28s ease;
}
.invite-photo-card:hover { transform: rotate(0deg) translateY(-8px) scale(1.03); }
.invite-photo-card img {
  width: 100%;
  aspect-ratio: 1/1;
  object-fit: cover;
  border-radius: 18px;
  display: block;
}
.invite-photo-card span {
  display: block;
  margin-top: 10px;
  text-align: center;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: .08em;
  font-size: .72rem;
}
.animal-impact {
  width: min(860px, calc(100% - 36px));
  margin: 10px auto 80px;
  padding: 28px;
  text-align: center;
  border: 1px solid rgba(255,255,255,.18);
  background: rgba(0,0,0,.35);
  backdrop-filter: blur(16px);
  border-radius: 28px;
  box-shadow: var(--shadow);
}
.animal-impact span { display: block; font-size: 2.5rem; margin-bottom: 10px; }
.animal-impact p { margin: 0; color: rgba(255,255,255,.82); line-height: 1.65; }
.reveal-invite {
  opacity: 0;
  transform: translateY(42px) scale(.98);
  transition: opacity .85s ease, transform .85s ease;
}
.reveal-invite.visible, .invite-hero.reveal-invite { opacity: 1; transform: none; }
.confetti-piece {
  position: fixed;
  top: -20px;
  width: 8px;
  height: 14px;
  z-index: 100;
  pointer-events: none;
  border-radius: 4px;
  animation: confettiFall linear forwards;
}
@keyframes confettiFall { to { transform: translateY(110vh) rotate(760deg); opacity: 0; } }

/* Template-specific typography/accent */
.template-boda { --gold: #f3e0d4; }
.template-disco { --gold: #f8c86a; }
.template-verano { --gold: #ffe45e; }
.template-futbol { --gold: #9cff84; }
.template-princesas { --gold: #ffe0f5; }
.template-elegante { --gold: #d6b46a; }
.template-party-loca { --gold: #ff53e5; }

.template-disco .invite-hero h1,
.template-disco .big-countdown strong {
  background: linear-gradient(90deg, #fff5c8, #ffbf37, #fff, #f8c86a);
  background-size: 240% auto;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: textShine 3s linear infinite;
}
.template-boda .invite-hero h1 { color: #fffaf6; text-shadow: 0 0 28px rgba(255,255,255,.55), 0 0 48px rgba(200,143,123,.32); }
.template-boda .big-countdown strong { color: #fffaf6; text-shadow: 0 0 20px rgba(255,255,255,.3); }
.template-party-loca .invite-hero h1,
.template-party-loca .big-countdown strong {
  color: #fff;
  text-shadow: 0 0 16px #ff2bd6, 0 0 35px #15e9ff;
}
.template-verano .invite-hero h1 { color: #fff8c8; text-shadow: 0 8px 0 rgba(0,0,0,.12); }
.template-futbol .invite-hero h1 { color: #fff; text-shadow: 0 0 24px rgba(110,227,109,.62); }
.template-princesas .invite-hero h1 { color: #fff5fc; text-shadow: 0 0 28px rgba(255,157,221,.88); }
.template-elegante .invite-hero h1 { color: #f8edcf; text-shadow: 0 0 24px rgba(214,180,106,.28); }
@keyframes textShine { to { background-position: 240% center; } }

@media (max-width: 980px) {
  .site-hero, .builder-layout, .invite-story { grid-template-columns: 1fr; }
  .hero-phone { order: -1; }
  .phone-shell { min-height: 520px; }
  .template-grid { grid-template-columns: repeat(2, 1fr); }
  .live-preview { position: relative; top: auto; }
  .invite-photo-wall { grid-template-columns: repeat(3, 1fr); }
}
@media (max-width: 660px) {
  .site-header { align-items: flex-start; flex-direction: column; }
  .site-nav { width: 100%; overflow-x: auto; padding-bottom: 2px; }
  .site-hero { padding-top: 42px; }
  .template-grid { grid-template-columns: 1fr; }
  .form-grid.two { grid-template-columns: 1fr; }
  .impact-strip div { flex-direction: column; }
  .big-countdown { grid-template-columns: repeat(2, 1fr); }
  .invite-details { grid-template-columns: 1fr; }
  .slideshow-frame, .slide-photo { min-height: 450px; }
  .invite-photo-wall { grid-template-columns: 1fr; }
  .invite-photo-card { transform: rotate(0deg); }
  .modal-actions, .hero-actions, .form-actions { flex-direction: column; }
  .btn { width: 100%; }
}
@media (max-width: 430px) {
  fieldset { padding: 16px; }
  .builder-form, .live-preview { border-radius: 24px; }
  .invite-preview-card { min-height: 520px; }
  .site-hero h1 { font-size: clamp(3rem, 17vw, 5.2rem); }
  .invite-hero h1 { font-size: clamp(3rem, 18vw, 6rem); }
}

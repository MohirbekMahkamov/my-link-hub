/* script.js */
document.addEventListener('DOMContentLoaded', () => {
    const envBox = document.getElementById('envBox');
    const invWrap = document.getElementById('invWrap');
    const envWrapper = document.getElementById('envWrapper');
    if (envBox) {
          envBox.addEventListener('click', () => {
                  envBox.classList.add('open');
                  setTimeout(() => {
                            envWrapper.style.display = 'none';
                            invWrap.style.display = 'block';
                            createParticles();
                  }, 1500);
          });
    }
});
function createParticles() {
    const container = document.body;
    const colors = ['#D4AF37', '#E8B4B8', '#ffffff', '#FFD700'];
    for (let i = 0; i < 50; i++) {
          const p = document.createElement('div');
          p.className = 'particle';
          const size = Math.random() * 8 + 4 + 'px';
          p.style.width = size;
          p.style.height = size;
          p.style.background = colors[Math.floor(Math.random() * colors.length)];
          p.style.left = Math.random() * 100 + 'vw';
          p.style.animationDuration = Math.random() * 3 + 2 + 's';
          p.style.animationDelay = Math.random() * 2 + 's';
          p.style.borderRadius = '50%';
          container.appendChild(p);
    }
}
function setTemplate(tmpl) {
    const card = document.getElementById('invCard');
    card.className = 'inv-card-outer ' + tmpl;
}
function copyLink() {
    const linkInput = document.getElementById('linkInput');
    linkInput.select();
    document.execCommand('copy');
    const copyOk = document.getElementById('copyOk');
    copyOk.classList.add('show');
    setTimeout(() => copyOk.classList.remove('show'), 2000);
}
function openShare() {
    document.getElementById('shareModal').classList.add('show');
}
function closeShare() {
    document.getElementById('shareModal').classList.remove('show');
}
function setStatus(status) {
    document.querySelectorAll('.rsvp-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelector('.rsvp-btn.' + status).classList.add('active');
    document.getElementById('rsvpFields').classList.add('show');
}
function sendRSVP(platform) {
    const name = document.getElementById('guestName').value;
    const count = document.getElementById('guestCount').value;
    const msg = document.getElementById('guestMsg').value;
    if (!name) return alert('Please enter your name');
    const text = `RSVP from ${name} (Guests: ${count}): ${msg}`;
    let url = '';
    if (platform === 'wa') url = `https://wa.me/?text=${encodeURIComponent(text)}`;
    else if (platform === 'tg') url = `https://t.me/share/url?url=&text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    document.getElementById('rsvpSuccess').classList.add('show');
}
}

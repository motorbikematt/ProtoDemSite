/* ============================================================
   MCDEM v2 — SHARED JS
   Nav injection, footer, county modal, scroll behavior.
   ============================================================ */

const NAV_PAGES = [
  { key: 'home',       label: 'Home',         href: 'index.html' },
  { key: 'map',        label: 'Precinct Map', href: 'map.html' },
  { key: 'captains',   label: 'Captains',     href: 'captains.html' },
  { key: 'recordings', label: 'Recordings',   href: 'recordings.html' },
];

function renderNav(activeKey) {
  const links = NAV_PAGES.map(p =>
    `<a href="${p.href}" class="${p.key === activeKey ? 'active' : ''}">${p.label}</a>`
  ).join('');

  document.getElementById('site-nav').innerHTML = `
    <div class="nav-inner">
      <a class="nav-logo" href="index.html">
        <div class="nav-logo-mark">MCD</div>
        <span>Mont. Co. Dems</span>
      </a>
      <nav class="nav-links">${links}</nav>
      <div class="nav-right">
        <select class="nav-county" onchange="countyChange(this)">
          <option value="montgomery">Montgomery County</option>
          <option value="franklin">Franklin County</option>
          <option value="hamilton">Hamilton County</option>
          <option value="summit">Summit County</option>
          <option value="lucas">Lucas County</option>
          <option value="cuyahoga">Cuyahoga County</option>
        </select>
        <a class="nav-admin" href="admin-login.html">Admin</a>
      </div>
    </div>
  `;

  /* Scroll behavior */
  const nav = document.getElementById('site-nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 10);
  });
}

function renderFooter() {
  document.getElementById('site-footer').innerHTML = `
    <div class="footer-inner">
      <div>
        <div class="footer-brand">Montgomery County Democratic Party</div>
        <p class="footer-sub">
          A civic resource for understanding the inner workings of your local party.
          Prototype — not an official party publication. Branding TBD.
        </p>
      </div>
      <div class="footer-links">
        <a href="index.html">Home</a>
        <a href="map.html">Precinct Map</a>
        <a href="captains.html">Captains</a>
        <a href="recordings.html">Recordings</a>
        <a href="admin-login.html">Admin</a>
      </div>
    </div>
    <hr class="footer-rule">
    <p class="footer-legal">Prototype for internal review only &mdash; Dayton, Ohio &mdash; 2025</p>
  `;
}

function countyChange(sel) {
  if (sel.value !== 'montgomery') {
    document.getElementById('county-modal').classList.add('open');
    setTimeout(() => { sel.value = 'montgomery'; }, 60);
  }
}

function injectCountyModal() {
  const el = document.createElement('div');
  el.className = 'modal-bg';
  el.id = 'county-modal';
  el.innerHTML = `
    <div class="modal-box">
      <h3>Coming soon</h3>
      <p>We&rsquo;re organizing content for this county. Check back as the platform expands across Ohio.</p>
      <button class="btn btn-dark" onclick="document.getElementById('county-modal').classList.remove('open')">Got it</button>
    </div>
  `;
  document.body.appendChild(el);
}

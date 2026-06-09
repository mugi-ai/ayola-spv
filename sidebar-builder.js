/* ═══════════════════════════════════════════
   Ayola IT Portal — Sidebar Builder v2
   Usage: buildSidebar('page-key')
   ═══════════════════════════════════════════ */
function buildSidebar(active) {
  const el = document.getElementById('sidebar');
  if (!el) return;

  const nama = localStorage.getItem('namaUser') || 'Admin';
  const role = localStorage.getItem('userRole') || 'user';
  const isAdmin = role === 'admin';

  const links = [
    { page: 'dashboard', icon: 'space_dashboard',    label: 'Dashboard',       href: 'dashboard.html' },
    { page: 'aset',      icon: 'inventory_2',         label: 'Manajemen Aset',  href: 'aset.html'      },
    { page: 'tiket',     icon: 'confirmation_number', label: 'Tiket Kerusakan', href: 'tiket.html'     },
    { page: 'logbook',   icon: 'menu_book',           label: 'Logbook',         href: 'logbook.html'   },
    { page: 'todo',      icon: 'check_circle',        label: 'To-Do List',      href: 'todo.html'      },
  ];

  const roleBadge = isAdmin
    ? `<div class="role-badge-admin">Admin</div>`
    : `<div class="role-badge-user">User</div>`;

  el.innerHTML = `
    <div class="sidebar-header">
      <div class="sb-brand">
        <div>
          <div class="sb-logo-text">AYOLA</div>
          <div class="sb-logo-sub">Lippo Cikarang</div>
        </div>
        <div class="sb-badge">IT</div>
      </div>
    </div>
    <div class="nav-section">
      <div class="nav-label">Menu Utama</div>
      ${links.map(l => `
        <a href="${l.href}" class="nav-item ${active === l.page ? 'active' : ''}">
          <span class="material-symbols-rounded">${l.icon}</span>
          <span>${l.label}</span>
        </a>`).join('')}
    </div>
    <div class="sidebar-bottom">
      <div class="user-info">
        <div class="user-avatar">${nama.charAt(0).toUpperCase()}</div>
        <div>
          <div class="user-name">${nama}</div>
          ${roleBadge}
        </div>
      </div>
      <button class="logout-btn" onclick="doLogout()">
        <span class="material-symbols-rounded">logout</span>
        <span>Keluar</span>
      </button>
    </div>
  `;
}

function doLogout() {
  if (!confirm('Keluar dari Portal IT?')) return;
  localStorage.removeItem('isLoggedIn');
  localStorage.removeItem('namaUser');
  localStorage.removeItem('userRole');
  window.location.href = 'index.html';
}

function authGuard() {
  if (localStorage.getItem('isLoggedIn') !== 'true') {
    window.location.href = 'index.html';
    return false;
  }
  return true;
}

function isAdmin() {
  return localStorage.getItem('userRole') === 'admin';
}

function showToast(msg, type = 'ok') {
  const el = document.getElementById('toast');
  if (!el) return;
  const iconMap = { ok: 'check_circle', err: 'error', info: 'info' };
  const colorMap = { ok: '#10b981', err: '#e84057', info: '#00c9b1' };
  el.innerHTML = `<span class="material-symbols-rounded" style="color:${colorMap[type]};font-size:20px">${iconMap[type]}</span>${msg}`;
  el.style.transform = 'translateY(0)';
  el.style.opacity = '1';
  setTimeout(() => { el.style.transform = 'translateY(80px)'; el.style.opacity = '0'; }, 3200);
}

document.querySelectorAll('[data-year]').forEach(function (el) { el.textContent = new Date().getFullYear(); });

document.querySelectorAll('.nav-menu').forEach(function (menu) {
  var toggle = menu.querySelector('.nav-toggle');
  function setOpen(open) { toggle.setAttribute('aria-expanded', String(open)); }
  toggle.addEventListener('click', function () { setOpen(toggle.getAttribute('aria-expanded') !== 'true'); });
  menu.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') { setOpen(false); toggle.focus(); }
  });
  document.addEventListener('click', function (e) { if (!menu.contains(e.target)) setOpen(false); });
  menu.addEventListener('focusout', function (e) { if (!menu.contains(e.relatedTarget)) setOpen(false); });
});

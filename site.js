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

document.querySelectorAll('[data-until]').forEach(function (el) {
  var until = Date.parse(el.getAttribute('data-until'));
  if (!isNaN(until) && Date.now() > until) el.hidden = true;
});

// LinkedIn Insight Tag (ad measurement and retargeting). Paste the Partner ID from
// LinkedIn Campaign Manager > Account assets > Insight Tag. Empty = the tag never loads.
// Not loaded when the browser sends Global Privacy Control (see privacy.html).
var LINKEDIN_PARTNER_ID = '';
(function () {
  if (!LINKEDIN_PARTNER_ID || navigator.globalPrivacyControl === true) return;
  window._linkedin_data_partner_ids = [LINKEDIN_PARTNER_ID];
  window.lintrk = function (a, b) { window.lintrk.q.push([a, b]); };
  window.lintrk.q = [];
  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://snap.licdn.com/li.lms-analytics/insight.min.js';
  document.head.appendChild(s);
})();

// Voucher page: play the walkthrough video muted, unless the visitor prefers reduced motion.
var signupVideo = document.getElementById('signup-video');
if (signupVideo && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  signupVideo.muted = true;
  var p = signupVideo.play();
  if (p && p.catch) p.catch(function () {});
}

// Voucher page: copy buttons for the example answers.
document.querySelectorAll('[data-copy]').forEach(function (btn) {
  btn.addEventListener('click', function () {
    var text = document.getElementById(btn.getAttribute('data-copy')).innerText.trim();
    function done() {
      btn.textContent = 'Copied';
      btn.setAttribute('data-done', '');
      setTimeout(function () { btn.textContent = 'Copy'; btn.removeAttribute('data-done'); }, 2000);
    }
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(done, function () {});
    } else {
      var ta = document.createElement('textarea');
      ta.value = text; ta.setAttribute('readonly', ''); ta.style.position = 'fixed'; ta.style.opacity = '0';
      document.body.appendChild(ta); ta.select();
      try { document.execCommand('copy'); done(); } catch (e) {}
      document.body.removeChild(ta);
    }
  });
});

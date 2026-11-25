(function () {
  var root = document.documentElement;

  // Hero video: lighter file on small screens, start when the intro opens.
  var video = document.querySelector('.hero__video');
  if (video) {
    video.src = window.innerWidth < 700 ? video.dataset.srcSmall : video.dataset.src;
    var start = function () {
      var p = video.play();
      if (p && p.catch) p.catch(function () {});
    };
    if (root.classList.contains('intro-on')) {
      setTimeout(start, 1700);
    } else {
      start();
    }
  }

  // Intro: mark as seen for this visit, allow skipping, remove when finished.
  if (root.classList.contains('intro-on')) {
    try { sessionStorage.setItem('tc-intro', '1'); } catch (e) {}
    var intro = document.querySelector('.intro');
    var finish = function () {
      root.classList.remove('intro-on');
      root.classList.add('intro-done');
      if (video && video.paused) video.play().catch(function () {});
    };
    var timer = setTimeout(finish, 3300);
    var skip = function () { clearTimeout(timer); finish(); };
    intro.addEventListener('click', skip);
    window.addEventListener('keydown', function onKey() { skip(); window.removeEventListener('keydown', onKey); });
  }

  // Mobile menu
  var toggle = document.querySelector('.top__toggle');
  var nav = document.getElementById('menyu');
  if (toggle && nav) {
    var set = function (open) {
      nav.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', String(open));
      toggle.textContent = open ? 'Bağla' : 'Menyu';
    };
    toggle.addEventListener('click', function () { set(!nav.classList.contains('open')); });
    nav.addEventListener('click', function (e) { if (e.target.closest('a')) set(false); });
    window.addEventListener('keydown', function (e) { if (e.key === 'Escape') set(false); });
  }
})();

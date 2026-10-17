// Copy-email button, and open outside links in a new tab.
(function () {
  var btn = document.getElementById('copy-email');
  if (btn) {
    var addr = btn.getAttribute('data-email');
    btn.addEventListener('click', function () {
      var done = function () { btn.textContent = 'Copied'; setTimeout(function () { btn.textContent = addr; }, 1600); };
      var fallback = function () {
        var r = document.createRange(); r.selectNodeContents(btn);
        var s = window.getSelection(); s.removeAllRanges(); s.addRange(r);
      };
      try { navigator.clipboard.writeText(addr).then(done, fallback); } catch (e) { fallback(); }
    });
  }
  var links = document.querySelectorAll('a[href^="http"], a[href$=".pdf"]');
  for (var i = 0; i < links.length; i++) {
    if (links[i].hostname !== location.hostname || /\.pdf$/.test(links[i].pathname)) {
      links[i].target = '_blank';
      links[i].rel = 'noopener';
    }
  }
})();

(function () {
  var toggleIcon = document.getElementById('toggle-icon');
  var saved = 'light';
  try { saved = localStorage.getItem('theme') || 'light'; } catch (e) {}

  if (saved === 'dark') {
    document.body.classList.add('dark-mode');
    toggleIcon.textContent = '☀️';
  }

  document.getElementById('dark-mode-toggle').addEventListener('click', function () {
    var dark = document.body.classList.toggle('dark-mode');
    toggleIcon.textContent = dark ? '☀️' : '🌙';
    try { localStorage.setItem('theme', dark ? 'dark' : 'light'); } catch (e) {}
  });
})();

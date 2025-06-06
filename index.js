// Initialize the Trello Power-Up
var t = window.TrelloPowerUp.iframe();

// This function resizes the iframe to fit its content
var resize = function() {
  t.sizeTo('#content');
}

// Initial resize on load
window.addEventListener('load', function() {
  resize();
});

// Also resize whenever the window is resized
window.addEventListener('resize', function() {
  resize();
});

// --- Theme Detection ---
// Trello will send a message when the user switches themes
t.render(function() {
  // Make sure your board background is visible
  t.get('body', 'private', 'theme').then(function(theme) {
    if (theme && theme.isDark) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  });

  // After rendering, resize again to be safe
  resize();
});

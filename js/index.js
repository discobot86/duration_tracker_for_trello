/* index.js */

var DATA_KEY = 'estimated-time';

window.TrelloPowerUp.initialize({
  // -----------------------------
  // 1. Card-badges capability
  // -----------------------------
  // Shows a badge on each card if "estimated-time" exists in shared storage.
  'card-badges': function(t, opts) {
    return t.get('card', 'shared', DATA_KEY)
      .then(function(duration) {
        // If there's no stored value, return an empty array so no badge appears.
        if (!duration) {
          return [];
        }

        return [{
          text: duration,      // e.g. "1h", "30m", etc.
          color: null,         // default color; or use a hex string like "#00aaff"
          callback: function(t) {
            // Optional: show a small popup if the badge is clicked.
            return t.popup({
              title: 'Estimated Time',
              url: './badge-popup.html',
              height: 100
            });
          }
        }];
      });
  },

  // ---------------------------------
  // 2. Card-back-section capability
  // ---------------------------------
  // Adds a section on the card back where users can edit "estimated-time".
  'card-back-section': function(t, opts) {
    return {
      title: 'Estimated Time',
      icon: './clock-icon.svg',      // optional 24×24 icon path
      content: {
        type: 'iframe',
        url: t.signUrl('./card-back.html'),
        height: 120
      }
    };
  }

  // You can add more capabilities (e.g., "card-buttons") if needed.
});

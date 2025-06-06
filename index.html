// js/index.js

// Initialize the Trello Power-Up iframe
var t = window.TrelloPowerUp.iframe();

// Get a reference to our input field from index.html
var estTimeInput = document.getElementById('estTime');

// This is the unique key we'll use to store our data on the card
var DATA_KEY = 'estimated-time';

/**
 * --- RENDER THE POWER-UP AND LOAD SAVED DATA ---
 * t.render() is called every time the card back is opened.
 */
t.render(function() {
  // We'll get all data for this card, then apply our theme and resize.
  return t.get('card', 'shared', DATA_KEY)
    .then(function(savedTime) {
      // Check if there was a number previously saved
      if (savedTime && typeof savedTime === 'number') {
        // If so, set the value of our input field to the saved number
        estTimeInput.value = savedTime;
      }
    })
    .then(function() {
      // Next, get the user's theme (light or dark)
      return t.get('body', 'private', 'theme');
    })
    .then(function(theme) {
      // Apply the 'dark-mode' class to the body if needed
      if (theme && theme.isDark) {
        document.body.classList.add('dark-mode');
      } else {
        document.body.classList.remove('dark-mode');
      }
      
      // Finally, resize the iframe to fit our content perfectly
      t.sizeTo('#content');
    });
});

/**
 * --- HANDLE INPUT CHANGES AND SAVE DATA ---
 * We add an event listener to the input field.
 */
estTimeInput.addEventListener('change', function() {
  // 'change' fires when the user clicks away or hits Enter after editing.
  
  // Get the current value and convert it to a floating-point number
  var newTime = parseFloat(estTimeInput.value);
  
  // Make sure it's a valid number before saving
  if (!isNaN(newTime)) {
    // This is where we save the data to the Trello card
    return t.set('card', 'shared', DATA_KEY, newTime);
  }
});

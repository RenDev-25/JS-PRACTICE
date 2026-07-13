var swatch = document.getElementById('swatch');
var flipBtn = document.getElementById('flip');
var copyBtn = document.getElementById('copy');
var saveBtn = document.getElementById('save');
var favContainer = document.getElementById('favorites');


var currentHex = '#FFFFFF';

// Load favorites from localStorage (if any)
var favorites = JSON.parse(localStorage.getItem('colorFavs') || '[]');

function randomHex() {
  function component() {
    var num = Math.floor(Math.random() * 256); // 0–255
    var hex = num.toString(16);                // convert to hex
    if (hex.length === 1) {
      hex = "0" + hex; // pad single digits
    }
    return hex;
  }
  return ("#" + component() + component() + component()).toUpperCase();
}

"use strict";

var labyrinth = document.getElementById("labyrinth");
var row = 10, col = 20;

var html = '';
for(var i = 0; i < row; i++) {
  html += ' <div class="row">';
  for(var j = 0; j < col; j++) {
    html += '<div class="field"></div>';
  }
  html += '</div>';
}
labyrinth.innerHTML = html;

var position = 0;
var labyrinth = document.querySelector('#labyrinth');
var currentField = document.querySelector('.field');
currentField.style.backgroundColor = "red";

window.addEventListener('keydown',function(e) {
  var key = e.key;
  currentField = changeCurrentActiveField(currentField,key);
});

function changeCurrentActiveField(current, key) {
  var allFields = document.querySelectorAll('.field');
  switch (key) {
    case "ArrowLeft":
      position--;
      break;
    case "ArrowDown":
      position += col;
      break;
    case "ArrowUp":
      position -= col;
      break;
    case "ArrowRight":
      position++;
    break;
  };

  current = allFields[position];
  current.style.backgroundColor = 'red';
  return current;
};

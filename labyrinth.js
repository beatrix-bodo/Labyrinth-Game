'use strict';

var labyrinth = document.querySelector('#labyrinth');

var row = 10, col = 20;
var html = '';
for(var i = 0; i < row; i++) {
  html += '<div class="row">';
  for(var j = 0; j < col; j++) {
    html += '<div class="field"></div>';
  }
  html += '</div>';
}

labyrinth.innerHTML = html;
var position = 0;
var oldPosition = position;
var visited = [];
var currentField = document.querySelector('.field');
var allFields = document.querySelectorAll('.field');
// set initial field red
currentField.style.backgroundColor = 'red';
// set goal yellow
var goal = allFields[199];
goal.style.backgroundColor = 'yellow';

window.addEventListener('keydown',function(e) {
  var key = e.key;
  currentField = changeCurrentActiveField(currentField,key);
});

function changeCurrentActiveField(current, key) {
  // when they move to a position that is in visited, we need to undo
  oldPosition = position;
  switch (key) {
    case 'ArrowLeft':
      position--;
      break;
    case 'ArrowDown':
      position += col;
      break;
    case 'ArrowUp':
      position -= col;
      break;
    case 'ArrowRight':
      position++;
    break;
  };
  current.style.backgroundColor = 'blue';
  if (visited.indexOf(position) == -1) {
    // set current, it hasnt been visited
    current = allFields[position];
    current.style.backgroundColor = 'red';
    visited.push(position);
  } else {
    // we've been here! dont move and keep current red
    current.style.backgroundColor = 'red';
    position = oldPosition;
  };

  return current;
};

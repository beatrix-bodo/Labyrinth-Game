"use strict";

var labyrinth = document.getElementById("labyrinth");

for (var i = 0; i < 10; i++) {
  var html = "";
  html += "<div class='row'>";
  for (var j = 0; j < 20; j++) {
    html += "<div class='field'></div>";
  };
  html += "</div>"
  labyrinth.innerHTML += html;
};

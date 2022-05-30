/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  //write your code here
  let who = ["the dog", "my grandma", "his turtle", "my bird", "my dog"];
  let what = ["eat", "pissed", "crushed", "broked", "ate"];
  let when = [
    "before the class",
    "right in time",
    "when I finished",
    "during my lunch",
    "my homework"
  ];

  let word1 = who[Math.floor(Math.random() * who.length)];
  let word2 = what[Math.floor(Math.random() * what.length)];
  let word3 = when[Math.floor(Math.random() * when.length)];

  var excuse = "..." + word1 + " " + word2 + " " + word3;
  return excuse;
};

document.getElementById("excuse").innerHTML = onload();

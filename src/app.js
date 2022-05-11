/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  //write your code here
  let who = ["the dog", "my grandma", "his turtle", "my bird"];
  let what = ["eat", "pissed", "crushed", "broked"];
  let when = [
    "before the class",
    "right in time",
    "when I finished",
    "during my lunch"
  ];

  let word1 = who[Math.floor(Math.random() * who.length)];
  let word2 = what[Math.floor(Math.random() * what.length)];
  let word3 = when[Math.floor(Math.random() * when.length)];

  var excuse = "..." + word1 + " " + word2 + " " + word3;
  return excuse;
};
function myFunction() {
  document.getElementById("excuse").innerHTML = onload();
}

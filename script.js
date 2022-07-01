
var quoteList = ["We have a single mission: to protect and hand on the planet to the next generation.","While the problem can sometimes seem overwhelming, we can turn things around — but we must move beyond climate talk to climate action.","Save our planet for our future generations!", "Plant trees one day at a time till you can make forests"];

var quote = document.getElementById("quote");
var myBtn = document.getElementById("myBtn");
var count = 0;

myBtn.addEventListener("click", displayQuote);

function displayQuote() {
  quote.innerHTML = quoteList[count];
  count++;

  if (count == quoteList.length) {
    count = 0;
  }
}

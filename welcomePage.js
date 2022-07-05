// const fetch = require("node-fetch");

// fetch("https://type.fit/api/quotes")
//   .then((response) => response.json())
//   .then((data) => console.log(data))

const url = "https://api.quotable.io/random";
function generateQuote() {
  fetch(url)
    .then(function (data) {
      return data.json();
    })
    .then(function (data) {
      document.querySelector("#quote").innerHTML = data.content;
      document.querySelector(".author, #author2").innerHTML = "- " + data.author;
    })
    .catch(function (err) {
      console.log(err);
    });
}
// Repeat generateQuote() every 10 seconds
setInterval(generateQuote(), 10000);
//Note - 10000 milliseconds = 10

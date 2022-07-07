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
      //   Array.from(document.querySelectorAll("#quote, #quote2")).forEach((x) => {
      //     x.innerHTML = data.content;
      //   });
      document.querySelector("#quote").innerHTML = data.content;
      //   Array.from(document.querySelectorAll(".author, #author2")).forEach(
      //     (x) => {
      //       x.innerHTML = "- " + data.author;
      //     }
      //   );
      document.querySelector(".author").innerHTML = "- " + data.author;
      // let authorArray = document.querySelectorAll(".author, #author2");
      // for(let i = 0; i<authorArray.length; i ++){

      // }
    });
  fetch(url)
    .then(function (data) {
        return data.json();
    })
    .then(function (data){
        document.querySelector("#quote2").innerHTML = data.content;
        document.querySelector(".author2").innerHTML = "- " + data.author;
    })
    .catch(function (err) {
      console.log(err);
    });
}
// Repeat generateQuote() every 10 seconds
setInterval(generateQuote(), 10000);
//Note - 10000 milliseconds = 10

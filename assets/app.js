// alert("Connected!");

// Selects API key from config file
var mykey = config.MY_KEY;

// Selects the elements on the page
var userInput = document.querySelector("#userInput");
var button = document.querySelector("#searchBtn");
var gifResult = document.querySelector("#gifResult");

// Stores value of user's input


// console.log(userInput);
// console.log(button);
// console.log(gifResult);

// Takes in user's input
userInput.addEventListener("keydown", function(value) {
 
 var searchInput = document.querySelector("#userInput").value;

 
    if (value.key === "Enter") {
    console.log(searchInput);
  }

});

// Adds functionality to the search button
button.addEventListener("click", function() {
  console.log("Button clicked");
});

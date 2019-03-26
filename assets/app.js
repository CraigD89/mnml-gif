// alert("Connected!");

// Selects API key from config file
var mykey = config.MY_KEY;

// Selects the elements on the page
var userInput = document.querySelector("#userInput");
var button = document.querySelector("#searchBtn");
var gifResult = document.querySelector("#gifResult");

// Takes in user's typed input
userInput.addEventListener("keydown", function(value) {
  // Stores value of user's typed input
  var searchInput = document.querySelector("#userInput").value;

  if (value.key === "Enter") {
    console.log(searchInput);
    // Add show gif function here
  }
});

// Adds functionality to the search button
button.addEventListener("click", function() {
  console.log("Button clicked");
  // Add show gif function here
});

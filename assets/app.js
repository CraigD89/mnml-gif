// alert("Connected!");

// Selects API key from config file
var mykey = config.MY_KEY;

// Selects the elements on the page
var userInput = document.querySelector("#userInput");
var button = document.querySelector("#searchBtn");
var gifResult = document.querySelector("#gifResult");

// Takes in user's typed input
userInput.addEventListener("keydown", function(event) {
  // Search for gif when user hits enter
  if (event.key === "Enter") {
    showGif(event);
  }
});

// Adds functionality to the search button
button.addEventListener("click", function() {
  console.log("Button clicked");
  // Add show gif function here
});

// Function for API call and GET request
var showGif = function(event) {
  var xhr = new XMLHttpRequest();

  // Stores value of user's typed input
  var searchInput = document.querySelector("#userInput").value;
  console.log(searchInput);

  //   API call for a random GIF
  xhr.open(
    "get",
    "http://api.giphy.com/v1/gifs/search?q==" +
      searchInput +
      "&api_key=" +
      mykey +
      "&limit=1"
  );

  xhr.onreadystatechange = function() {
    var DONE = 4; // readyState 4 means the request is done.
    var OK = 200; // status 200 is a successful return.
    if (xhr.readyState === DONE) {
      if (xhr.status === OK) {
        var gifs = JSON.parse(this.responseText).data; // receives gif object

        console.log(gifs);

        // Pushes gis object url into div
        gifResult.innerHTML = gifs
          .map(function(gif) {
            return "<img src='" + gif.images.downsized.url + "' />";
          })
          .join("");
      } else {
        alert("Error: " + xhr.status); // An error occurred during the request.
      }
    }
  };
  xhr.send(null);
};

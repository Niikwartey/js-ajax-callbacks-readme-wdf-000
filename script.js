$(document).ready(function() {
  var url = "https://api.github.com/repos/rails/rails/commits?sha=82885325e04d78fb7ec608a4670164d842d23078";
  
  $.get(url).done(function(response) {
    $("#sentences").html("done done!");
    console.log(response);
  }).fail(function(error){
    console.log("Something went wrong: " + error);
  })
})

// $(document).ready(function(){
//   // Now we start the Ajax GET request. The first parameter is the URL with the data.
//   // The second parameter is a function that handles the response.
//   $.get("sentence.html", function(response) {
//     // Here we are getting the element on the page with the id of sentences and
//     // inserting the response
//     $("#sentences").html(response);
//   });
// });
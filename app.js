$( "h2" ).html( "jQuery is working... please click the top button to see a Chuck Norris quote" );
$(document).ready(function(){
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
  var chuckButton = $( "#chuckButton" );
  chuckButton.on( "click", function(  ) {
    $.ajax({
       url: "https://api.icndb.com/jokes/random?firstName=Chuck&amp;lastName=Norris",
       data: {format: 'json'},
       error: function(event) {console.log('An error has occurred: ', event);},
       dataType: 'jsonp',
       success: function( result ) {
         console.log("chuck result", result);
         $( "#chuckQuote" ).html( "<strong>" + result.value.joke + "</strong>" );
       },
       type: 'GET'
    });//chuck ajax
  });//chuck click function
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
  var weatherButton = $("#weatherButton");
  var weatherKey = "d8f398ea16990213"; //key ends in 2 not 3
  var weatherUrl = "http://api.wunderground.com/api/" + weatherKey + "/conditions/q/CA/San_Francisco.json"
  weatherButton.on("click", function( ){
      $.ajax({
        url: weatherUrl,
        data: {},
        type: 'GET',
        datatype: 'jsonp',
        success: function( result ) {
          console.log("weather result.c_o.icon", result.current_observation.icon);
          console.log("weather result.c_o.temp_c", result.current_observation.temp_c);
          $( "#weatherQuote" ).html( "<strong>" + result.current_observation.temperature_string + "</strong>" );
        },
        error: function(event){console.log("weather error: ", event);}
      }); // ajax
  }); //weather click function
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
  var root = 'https://jsonplaceholder.typicode.com';
  var practiceButton = $("#practiceButton");
  practiceButton.on("click", function( ){
    $.ajax({
    url: root + '/posts/1',
    method: 'GET'
    })
      .then(function(data) {
        console.log("practice data", data);
        $( "#anotherApiId" ).html( "<strong>Title: " + data.title + "</strong><br>" +
                                   "<strong>Body: "  + data.body  + "</strong>");
      });//then
  });// practice click
});// doc ready

$( "h2" ).html( "jQuery is working..." );
$(document).ready(function(){

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

  var weatherButton = $("#weatherButton");
  var weatherKey = "d8f398ea16990213"; //key ends in 2 not 3
  var weatherUrl = "http://api.wunderground.com/api/" + weatherKey + "/conditions/q/CA/San_Francisco.json"
  weatherButton.on("click", function( ){
      $.ajax({
        url: "https://api.wunderground.com/api/d8f398ea16990212/conditions/q/CA/San_Francisco.json",
        data: {},
        type: 'GET',
        datatype: 'jsonp',
        success: function( result ) {
          console.log("weather result.c_o.icon", result.current_observation.icon);
          console.log("weather result.c_o.temp_c", result.current_observation.temp_c);
          $( "#weatherQuote" ).html( "<strong>" + result.current_observation.temperature_string + "</strong>" );
        },
        error: function(event){
          console.log("weather error: ", event);
        }
      }); // ajax
  }); //weather click function



});// doc ready

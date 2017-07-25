$( "h2" ).html( "jQuery is working..." );
$(document).ready(function(){

  var chuckButton = $( "#chuckButton" );
  chuckButton.on( "click", function(  ) {
    $.ajax({
       url: "http://api.icndb.com/jokes/random?firstName=Chuck&amp;lastName=Norris",
       data: {format: 'json'},
       error: function(event) {console.log('An error has occurred: ', event);},
       dataType: 'jsonp',
       success: function( result ) {
         console.log(result);
         $( "#chuckQuote" ).html( "<strong>" + result.value.joke + "</strong>" );
       },
       type: 'GET'
    });//chuck ajax
  });//chuck click


  
});// doc ready

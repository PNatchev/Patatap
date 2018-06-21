$(".animation1").hide();
$(".animation2").hide();
$(".animation3").hide();
$(".animation4").hide();
$(".animation42").hide();
$(".sun").hide();
$(".moon").hide();

$(".sun2").hide();
$(".moon2").hide();
$(".bluebg").hide();
$(".blackbg").hide();




// music sun
$(function(){
    var state = true;
    
$( ".blacktile1" ).click(function() {
   if(state == true){
        $(".audio5").trigger('play');
        $(".bluebg").show();
      
       state= false;
   }
    else if(state == false){
        $(".audio5").trigger('pause');
        $(".bluebg").hide();
        state = true;
    }
  $( ".sun" ).toggle( "slow", function() {
    
      
  });
    
   
});
    });

//music sun

// music moon
$(function(){
    var state = true;
    
$( ".blacktile2" ).click(function() {
   if(state == true){
       $(".audio6").trigger('play');
       $(".blackbg").show();
       state= false;
   }
    else if(state == false){
        $(".audio6").trigger('pause');
        $(".blackbg").hide();
        state = true;
        
    }
  $( ".moon" ).toggle( "slow", function() {
    
     
  });
    
    
});
    });

//music moon


// music both

$(function(){
    var state = true;
    
    
$( ".blacktile3" ).click(function() {
   if(state == true){
        $(".audio7").trigger('play');
       state= false;
   }
    else if(state == false){
        $(".audio7").trigger('pause');
        state = true;
    }
  $( ".moon2" ).toggle( "slow", function() {
    
     
  });
    
     $( ".sun2" ).toggle( "slow", function() {
    
     
  });
    
    
});
    });

// music both




$( ".whitetile1" ).click(function() {
    $(".audio1").trigger('play');
  $( ".animation1" ).toggle( "slow", function() {
    // Animation complete.
        
        $(".animation1").finish();
        $(".animation1").fadeOut(1500);
  });
});

$( ".whitetile2" ).click(function() {
    $(".audio2").trigger('play');
  $( ".animation2" ).toggle( "slow", function() {
    // Animation complete.
        $(".animation2").finish();
        $(".animation2").fadeOut(1500);
  });
});

$( ".whitetile3" ).click(function() {
    $(".audio3").trigger('play');
  $( ".animation3" ).toggle( "slow", function() {
    // Animation complete.
      $(".animation3").finish();
        $(".animation3").fadeOut(1500);
  });
});

$( ".whitetile4" ).click(function() {
    
  $( ".animation4" ).toggle( "slow", function() {
    // Animation complete.
    $(".audio4").trigger('play');
  });
     $( ".animation42" ).toggle( "slow", function() {
    // Animation complete.
        
  });
});


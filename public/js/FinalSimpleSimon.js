// $(document).ready(function(){
    "use strict";

    var sequenceArray = [];

    var usersTurn = [];
   
    var counter = 0;

    var round = 0;

    var audio = new Audio('audio/GameOver.mp3');

    var audioOot = new Audio('audio/NextRound.wav');

    var squares = ["topButton", "rightButton", "downButton", "leftButton"]; 

    //Start by clicking the button and set the array to empty 
    $("#start").click(function(){
   
        $("#gameOver").removeClass('fadeIn');
   
        sequenceArray = [];
   
        simonsArray();
   
        $("#start").fadeOut(1000);
    });
   
    // Get a random Number 
    function getRandomNumberBetween0And(){
          
          return Math.floor(Math.random() * 4);
    }

    // Animate the arrow buttons from turning the opacity up and down on the click event.
    function animate(element){
          
          $(element).animate({
              opacity: .20
    
          }, 500).animate({
                  opacity: 1
                 
          });
    }

    // Game Over is displayed when the user gets the sequence wrong. 
    function gameover(){

        // Plays Sonic Game Over music.
        audio.play();
        
        $("#gameOver").addClass('fadeIn');

        $("#start").fadeIn(5000);

        round = 0;

        $("#round").html("Round: " + round);

        //Reset the sequenceArray, usersTurn array and round counter to empty.
        sequenceArray = [];
        usersTurn = [];
    }
   
    
    //logs the Simon's Sequence and compares the Users Input 
    function compareMove(usersTurn){
        
        if (usersTurn != sequenceArray[counter]){
           
           gameover();

       } else {

            if(counter == sequenceArray.length -1){
                
                round++;
                $("#round").html("Round: " + round);
                
                audioOot.play();
                
                counter = 0;
                simonsArray();

            }else{

               counter++;

            }
        }
    }

    // Declaring variables to be used for Simon's Array 
    function simonsArray(input){
    
        var randomIndex = getRandomNumberBetween0And();
        
        var randomSquare = squares[randomIndex];
        
        sequenceArray.push(randomSquare);

        var i = 0;

        var intervalId = setInterval(function(){
            
            switch (sequenceArray[i]){
                case "topButton": 
                    animate('#topButton');
                    break;
                case "rightButton":
                    animate('#rightButton');
                    break;
                case "downButton":
                    animate('#downButton');
                    break;
                case "leftButton":
                    animate('#leftButton');
                    break;
            }

            if(i < sequenceArray.length){
                
                i++;
   
            } else {
   
                clearInterval(intervalId);
            }
   
        }, 1000);
    }
        console.log()
    // Assign a click function for animate
    $(".button").click(function(){
       
        animate("#" + $(this).attr("id"));
        compareMove($(this).attr("id"));
    });
    
// }); 
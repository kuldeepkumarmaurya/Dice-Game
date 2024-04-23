
var dise_one = document.querySelector(".dice_1");
var dise_Two = document.querySelector(".dice_2");
var random_one = Math.round(Math.random() * 6) + 1;
var random_two = Math.round(Math.random() * 6) + 1;
var gameResult = document.querySelector(".container h1")
function roledice(){
    switch(random_one){
        case 1 :
            document.querySelector(".dice_1 img").setAttribute("src" ,"./images/dice1.png" )
            break;
        case 2 :
            document.querySelector(".dice_1 img").setAttribute("src" ,"./images/dice2.png" )
            break; 
        case 3 :
            document.querySelector(".dice_1 img").setAttribute("src" ,"./images/dice3.png" )
            break; 
        case 4 :
            document.querySelector(".dice_1 img").setAttribute("src" ,"./images/dice4.png" )
            break;
        case 5 :
            document.querySelector(".dice_1 img").setAttribute("src" ,"./images/dice5.png" )
            break; 
        default:
            document.querySelector(".dice_1 img").setAttribute("src" ,"./images/dice6.png" )

    }

    switch(random_two){
        case 1 :
            document.querySelector(".dice_2 img").setAttribute("src" ,"./images/dice1.png" )
            break;
        case 2 :
            document.querySelector(".dice_2 img").setAttribute("src" ,"./images/dice2.png" )
            break; 
        case 3 :
            document.querySelector(".dice_2 img").setAttribute("src" ,"./images/dice3.png" )
            break; 
        case 4 :
            document.querySelector(".dice_2 img").setAttribute("src" ,"./images/dice4.png" )
            break;
        case 5 :
            document.querySelector(".dice_2 img").setAttribute("src" ,"./images/dice5.png" )
            break; 
        default:
            document.querySelector(".dice_2 img").setAttribute("src" ,"./images/dice6.png" )

    }

    if(random_one > random_two){
        gameResult.innerText = " 👑 Player 1 Wins!"
    }else if(random_one < random_two){
        gameResult.innerText = "Player 2 Wins! 👑 "
    }else{
        gameResult.innerText = " 😂 Draw ! 😂"
    }
}

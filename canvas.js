//<canvas widht="250" height="800"></canvas>

//prettier
 
let tablero = document.getElementById("canvas").getContext("2d"); 
let buttonStartGame = document.getElementById("btn-startGame")
//tablero.fillStyle = "lightgrey"
//tablero.fillRect(0,0,600,800);
var x=100

function drawRectangle(x){
     
    tablero.fillStyle = "red"                 
    tablero.fillRect(x,500,40,5);
  }
  
function rectangle(x){
    x=195
    for(i=1; i <= selectedWord.length;i++){
         
        drawRectangle(x)
     x+=50
    }

}  
console.log(selectedWord.length);
tablero.onclick = rectangle();

drawRectangle(250);






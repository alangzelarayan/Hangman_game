var arrayWord =["html", "css","java","mongodb","react","nodejs","angular","philips","samsung","apple"]; 
var selectedWord = arrayWord[ Math.floor(Math.random()*arrayWord.length)];

// el siguient codigo dice el índice en que se encuentra el valor buscado 
const result = selectedWord.indexOf("l")
console.log(result+1);

function takeSelectedWord (){

}




//console.log(selectedWord);
//btn-addWord.onclick = console.log(selectedWord);


function printWord(){
    console.log(selectedWord);
}
console.log(selectedWord);

function showGame(){
    document.getElementById("canvas").style.display="block";
}




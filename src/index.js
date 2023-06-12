import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`
let textarea = document.querySelector("textarea");

textarea.addEventListener('keyup', (event) =>{
    let text = event.target.value;
    let characterCount= analyzer.getCharacterCount(text);
    document.getElementById("characters").innerHTML=characterCount;

    let wordCount=analyzer.getWordCount(text);
    document.getElementById("words").innerHTML=wordCount;
});



let button =document.getElementById("reset-button");
    button.addEventListener("click", ()=>{
    let textarea = document.querySelector("textarea");
    textarea.value ='';
    document.getElementById("characters").innerHTML='0';
    document.getElementById("words").innerHTML='0';
});
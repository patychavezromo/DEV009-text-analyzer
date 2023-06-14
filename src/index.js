import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`
const textarea = document.querySelector("textarea");

textarea.addEventListener('keyup', (event) =>{
    let text = event.target.value;
    let characterCount= analyzer.getCharacterCount(text);
    document.getElementById("characters").innerHTML=characterCount;

    let wordCount=analyzer.getWordCount(text);
    document.getElementById("words").innerHTML=wordCount;

    let charactersWithoutSpaces= analyzer.getCharacterCountExcludingSpaces(text);
    document.getElementById("charactersWithoutSpaces").innerHTML=charactersWithoutSpaces;

    let numbersCount= analyzer.getNumberCount(text);
    document.getElementById("numbers").innerHTML=numbersCount;

    let sumOfNumbers= analyzer.getNumberSum(text);
    document.getElementById("sumOfNumbers").innerHTML=sumOfNumbers;

    let averageWordLength= analyzer.getAverageWordLength(text);
    document.getElementById("average").innerHTML=averageWordLength;
});



let button =document.getElementById("reset-button");
    button.addEventListener("click", ()=>{
    let textarea = document.querySelector("textarea");
    textarea.value ='';
    document.getElementById("characters").innerHTML='0';
    document.getElementById("words").innerHTML='0';
    document.getElementById("charactersWithoutSpaces").innerHTML='0';
    document.getElementById("numbers").innerHTML='0';
    document.getElementById("sumOfNumbers").innerHTML='0';
    document.getElementById("average").innerHTML='0';
});
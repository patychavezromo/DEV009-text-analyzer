import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`
const textarea = document.querySelector("textarea");

textarea.addEventListener('keyup', (event) =>{
  const text = event.target.value;
  const characterCount= analyzer.getCharacterCount(text);
  document.getElementById("characters").innerHTML=characterCount;
  const wordCount=analyzer.getWordCount(text);
  document.getElementById("words").innerHTML=wordCount;
  const charactersWithoutSpaces= analyzer.getCharacterCountExcludingSpaces(text);
  document.getElementById("charactersWithoutSpaces").innerHTML=charactersWithoutSpaces;
  const numbersCount= analyzer.getNumberCount(text);
  document.getElementById("numbers").innerHTML=numbersCount;
  const sumOfNumbers= analyzer.getNumberSum(text);
  document.getElementById("sumOfNumbers").innerHTML=sumOfNumbers;
  const averageWordLength= analyzer.getAverageWordLength(text);
  document.getElementById("average").innerHTML=averageWordLength;
});

const button =document.getElementById("reset-button");
button.addEventListener("click", ()=>{
  const textarea = document.querySelector("textarea");
  textarea.value ='';
  document.getElementById("characters").innerHTML='0';
  document.getElementById("words").innerHTML='0';
  document.getElementById("charactersWithoutSpaces").innerHTML='0';
  document.getElementById("numbers").innerHTML='0';
  document.getElementById("sumOfNumbers").innerHTML='0';
  document.getElementById("average").innerHTML='0';
});
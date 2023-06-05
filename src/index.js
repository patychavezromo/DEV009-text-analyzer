import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`
let textarea = document.querySelector("textarea");
textarea.addEventListener('keyup', (event) =>{
    let text = event.target.value;
    //console.log(text);
    let characterCount= analyzer.getCharacterCount(text);
    //console.log(characterCount);
    document.getElementById("caracteres").innerHTML=characterCount;

})
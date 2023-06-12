const analyzer = {  
  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    let arrayStringOrigin= text.split(' ');
    let filteredArray= [];
    for(let i=0; i<arrayStringOrigin.length; i++){
      let currentString= arrayStringOrigin[i];
      if(currentString.length>0){
        filteredArray.push(currentString);      
      }
    }
    let totalWords= filteredArray.length;
    return totalWords;
  },

  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    let totalcharacteres = text.length;
    return totalcharacteres;
  },

  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    const filteredString= text.replace (/[^a-zA-Z0-9]/g, '');
    let totalCharactersWithoutSpaces= filteredString.length;
    return totalCharactersWithoutSpaces;
  },
  getAverageWordLength: (text) => {    
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
  },
  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    let regex = /(\d+)/g;
    let numbers= text.match(regex);
    let totalNumbers=numbers.length;
    return totalNumbers;


  },
  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
  },
};

export default analyzer;

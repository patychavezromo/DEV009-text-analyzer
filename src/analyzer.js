const analyzer = {  
  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const arrayStringOrigin= text.split(' ');
    const filteredArray= [];
    for(let i=0; i<arrayStringOrigin.length; i++){
      const currentString= arrayStringOrigin[i];
      if(currentString.length>0){
        filteredArray.push(currentString);      
      }
    }
    const totalWords= filteredArray.length;
    return totalWords;
  },

  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    const totalcharacteres = text.length;
    return totalcharacteres;
  },

  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    const filteredString= text.replace (/[^a-zA-Z0-9]/g, '');
    const totalCharactersWithoutSpaces= filteredString.length;
    return totalCharactersWithoutSpaces;
  },
  getAverageWordLength: (text) => {    
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const filteredString=text.split(/\s+/).join('');
    const totalCharacteresWithoutSpaces=filteredString.length;
    let average=0;
    
    const allWords= text.split(' ');
    const allWordsNotEmpty= [];
    for(let i=0; i<allWords.length; i++){
      const currentWord= allWords[i];
      if(currentWord.length>0){
        allWordsNotEmpty.push(currentWord);      
      }
    }
    const totalWords= allWordsNotEmpty.length;    
    if(totalWords===0){
      return average;
    }
    average=totalCharacteresWithoutSpaces/totalWords;
    average=parseFloat(average.toFixed(2));
    
     

    return average;

  },
  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    const allWords= text.split(' ');
    const allWordsNotEmpty=[];
    let totalNumbers=0;
    for(let i=0; i<allWords.length; i++){
      const currentWord=allWords[i];
      if(currentWord !== '' ){
        if(!isNaN(currentWord)){
          allWordsNotEmpty.push(parseFloat(currentWord));
        }
      }      
    }
    totalNumbers=allWordsNotEmpty.length;    
    
    return totalNumbers; 
  },

  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    const allWords=text.split(' ');
    let sum=0;
    for(let i=0; i<allWords.length; i++){
      const currentWord=allWords[i];
      if(currentWord !== ''){
        if(!isNaN(currentWord)){
          sum =sum + parseFloat(currentWord);          
        }
      }
    }
    return sum;
  },
};

export default analyzer;

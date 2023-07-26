const analyzer = {  
  getWordCount: (text) => {
    const words = text.match(/\b\w+\b/g) || [].length;
    return words
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
  },
  getCharacterCount: (text) => {
    const characters = text.length;
    return characters
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
  },
  getCharacterCountExcludingSpaces: (text) => {
    const charactersNoSpaces = text.replace(/\s/g, '').length;
    return charactersNoSpaces
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
  },
  getAverageWordLength: (text) => { 
    const wordLengths = text.map(word => word.length);
    const wordLengthsSum = wordLengths.reduce((acc, len) => acc + len, 0);
    const wordLengthsAverage = wordLengths.length ? (wordLengthsSum / wordLengths.length).toFixed(2) : 0;
    return wordLengthsAverage
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
  },
  getNumberCount: (text) => {
    const numbers = text.match(/\d+/g) || [].length;
    return numbers
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
  },
  getNumberSum: (text) => {
    const numbersSum = text.reduce((acc, num) => acc + parseInt(num), 0);
    return numbersSum
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
  },
};

export default analyzer;

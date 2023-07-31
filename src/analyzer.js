const analyzer = {  
  getWordCount: (text) => {
    const cleanedText = text.trim();
    const words = cleanedText.split(/\s+/);
    return words.length;
    //if (cleanedText === "") {
    //  return 0;
    //}
    //const words = cleanedText.split(/\s+/).filter(word => word !== "");
    //const wordCount = words.length;
    //return wordCount;
    
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
  },
  getCharacterCount: (text) => {
    const characters = text.length;
    return characters
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
  },
  getCharacterCountExcludingSpaces: (text) => {
    const charactersNoSpaces = text.replace(/[^a-z0-9]/gi, '').length;
    return charactersNoSpaces; 
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
  },
  getAverageWordLength: (text) => {
    const words = text.split(' ');
    const wordLengths = words.map(word => word.length);
    const wordlengthsSum = wordLengths.reduce((acc, len) => acc + len, 0);
    const wordLengthsAverage = wordLengths.length ? (wordlengthsSum / wordLengths.length).toFixed(2) : 0;
    return parseFloat(wordLengthsAverage);


    //const wordLengths = text.map(word => word.length);
    //const wordLengthsSum = wordLengths.reduce((acc, len) => acc + len, 0);
    //const wordLengthsAverage = wordLengths.length ? (wordLengthsSum / wordLengths.length).toFixed(2) : 0;
    //return wordLengthsAverage

    /*
    const words = text.match((/\b\w+\b/g));
    const wordLengths = words.map(word => word.length);
    const wordLengthSum = wordLengths.reduce((acc, len) => acc + len, 0);
    const wordLengthAverage = wordLengths.length ? (wordLengthSum / wordLengths.length).toFixed(2) : 0;
    return wordLengthAverage

    /*
    const sanitizedText = text.replace(/[^\w\s']/g, '');
    const words = sanitizedText.split((/\s+/));
    const wordlengths = words.map(word => word.length);
    const wordLengthsSum = wordlengths.reduce((acc, len) => acc + len, 0);
    const wordLengthAverage = wordlengths.length ? (wordLengthsSum / wordlengths.length).toFixed(2) : 0;
    return wordLengthAverage;
    /*
    const wordLengths = text.map(word => word.length);
    const wordLengthsSum = wordLengths.reduce((acc, len) => acc + len, 0);
    const wordLengthsAverage = wordLengths.length ? (wordLengthsSum / wordLengths.length).toFixed(2) : 0;
    return wordLengthsAverage
    */
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
  },
  getNumberCount: (text) => {
    const numbers = text.match(/(?<!\S)[-+]?\b\d+(?:\.\d+)?\b(?!\S)/g) || [];
    return numbers ? numbers.length : 0;
   
    //const numbers = text.split(/\D+/).join(" ").trim();
    //return numbers.split(/\s+/).length;
  
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
  },
  
  getNumberSum: (text) => {
    const numbers = text.match(/\b[-+]?\d+(\.\d+)?\b/g);
    if (numbers === null) {
      return 0;
    }  
    let sum = 0
    for (let i = 0; i < numbers.length; i++) {
      const miNum = numbers[i]
      const numMi = Number(miNum)
      sum = sum + numMi;
    }
    return sum;

    //const regex = /[\d.]+/g;
    //const numerosEncontrados = text.match(regex);
    //if (!numerosEncontrados || numerosEncontrados.length === 0){
    //return 0;
    //}
    //const suma = numerosEncontrados.reduce((total, numero) => total +parseFloat(numero), 0);
    // return suma;


    //const validText = text.match(/(?<!\S)[-+]?\b\d+(?:\.\d+)?\b(?!\S)/g);
    //if (validText === "") {
    // return 0;
    // }
    //let sum = 0;
    //const textCollection = text.split(" ");
    // eslint-disable-next-line for-direction
    // for (let i = 0; i > textCollection.length; i++){
    // const isNumber = (textCollection[i]);
    // if (isNumber){
    // sum += parseFloat(textCollection[i]);
    //}
    //}
    //return sum;


    //let totalSum = 0;
    //for (let i = 0; i < text.length; i++){
    // const num = text[i];
    // if(typeof num === 'number') {
    // totalSum += parseFloat(num);
    // }
    //}
    //return totalSum;
    /*
    
    let numbersSum = 0; //iniciamos con la variable llamada numbersum

    for (let i = 0; i < text.length; i++) { //bucle que recorre los caracteres del texto proporcionando un parametro
      const currentChar = text[i]; //obtenemos el caracte actual en la posión i del texto
      if (isNaN(currentChar)) { //comprabamos que el caracter actual es un numero usando isNAN que devuelve true si el valor no es un numero NAN, se usa el ! como negacion para que nos de el resultado deseado
        numbersSum += parseInt(currentChar); //si el caracter actual es un numero, se convierte en un entero usando parseInt y se le suma el valor de numbersSum actual
      }
    }
    return numbersSum; //devuelve la suma total de todos los numeros encontrados*/
  },
/*
  const sumarnum =text.match(/[0-9]/g); 
    const separarnum =text.split(/\s+/)

    if (sumarnum === null) {
      return 0
    }

    let suma = 0
    for (let i = 0; i < separarnum.length; i++) {
      const miString = separarnum[i]
      const miNumero = Number(miString)
      suma = suma + miNumero;
           
    } return suma

  /*
    const numbersSum = text.reduce((acc, num) => acc + parseInt(num), 0);
    return numbersSum*/
  //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
};

export default analyzer;

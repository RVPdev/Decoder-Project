// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  // Polybius cipher uses a 5x5 grid containing letters of the alphabet
  const alphabet = [
    ["a", "b", "c", "d", "e"],
    ["f", "g", "h", "i/j", "k"],
    ["l", "m", "n", "o", "p"],
    ["q", "r", "s", "t", "u"],
    ["v", "w", "x", "y", "z"],
  ];

  function polybiusEncoder(lowerInput) {
    // This function encodes a text using the Polybius cipher
    let encodedMsg = "";
    for (let i = 0; i < lowerInput.length; i++) {
      let char = lowerInput[i];

      // If the character is a space, keep it
      if (char === " ") {
        encodedMsg += " ";
      }

      // If the character is 'i' or 'j', treat it as 'i/j'
      if (char === "i" || char === "j") char = "i/j";

      // Loop through the 5x5 grid to find the character
      for (let row = 0; row < alphabet.length; row++) {
        for (let col = 0; col < alphabet[row].length; col++) {
          // Once the character is found, add its grid position to the encoded message
          if (alphabet[row][col] === char) {
            encodedMsg += `${col + 1}${row + 1}`; // we add 1 because the grid starts from 0 not 1
          }
        }
      }
    }
    return encodedMsg;
  }

  function polybiusDecoder(input) {
    // This function decodes a text using the Polybius cipher
    let decodedMessage = "";

    for (let i = 0; i < input.length; i += 2) {
      // we increment by 2 because each letter is represented by two digits in the encoded message
      // If the character is a space, keep it and adjust the index
      if (input[i] === " ") {
        decodedMessage += " ";
        i--; // to adjust for the space. the next loop iteration will move to the next character
        continue;
      }

      // convert the two numbers to row and column of the grid
      let row = parseInt(input[i]) - 1;
      let col = parseInt(input[i + 1]) - 1;

      // Add the corresponding grid character to the decoded message
      decodedMessage += alphabet[col][row];
    }
    return decodedMessage;
  }

  function polybius(input, encode = true) {
    // Main function that either encodes or decodes a text using the Polybius cipher depending on the 'encode' parameter
    const inputWithoutSpaces = input.replace(" ", ""); // Remove spaces

    // If the text is supposed to be decoded, and its length (excluding spaces) is odd, return false. It's impossible to decode such a string
    if (inputWithoutSpaces.length % 2 === 1 && !encode) return false;

    // The input is converted to lower case for the encoding or decoding process
    const lowerInput = input.toLowerCase();

    // If 'encode' is true, encode the text; otherwise, decode the text
    if (encode) {
      return polybiusEncoder(lowerInput);
    } else {
      return polybiusDecoder(lowerInput);
    }
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };

// function polybiusEncoder(lowerInput) {
//   let encodedMsg = "";
//   for (let i = 0; i < lowerInput.length; i++) {
//     let char = lowerInput[i].toLowerCase();

//     if (char === " ") {
//       encodedMsg += " ";
//     }

//     if (char === "i" || char === "j") char = "i/j";

//     for (let row = 0; row < alphabet.length; row++) {
//       for (let col = 0; col < alphabet[row].length; col ++) {
//         if (alphabet [row][col] === char) {
//           encodedMsg += `${col + 1}${row + 1}`;
//         }
//       }
//     }
//   }
//   console.log(encodedMsg);
//   // 3251131343 2543241341
//   return encodedMsg;
// }

// polybiusEncoder("Hello world");

// const alphabet = [
//   ['a', 'b', 'c', 'd', 'e'],
//   ['f', 'g', 'h', 'i/j', 'k'],
//   ['l', 'm', 'n', 'o', 'p'],
//   ['q', 'r', 's', 't', 'u'],
//   ['v', 'w', 'x', 'y', 'z']
// ];

// function polybiusDecoder(lowerInput) {
//   let decodedMsg = "";

//   for (let i = 0; i < lowerInput.length; i += 2) {
//     if (lowerInput[i] === " ") {
//       decodedMsg += " ";
//       i--;
//     }

//     let row = parseInt(lowerInput[i]) - 1;
//     let col = parseInt(lowerInput[i + 1]) - 1;

//     decodedMsg += alphabet[row][col];
//   }
//   console.log(decodedMsg);
//   return decodedMsg;
// }

// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // Defining the alphabet to be used in the Caesar Cipher
  const alphabetArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  // Function to perform the Caesar Cipher operation on a string
  function caesarEncode(lowerInput, shift) {
    // Define a string to hold the output
    let output = "";
  
    // Iterate over the input string
    for (let i = 0; i < lowerInput.length; i++) {
      // Get the current character
      let char = lowerInput[i];
  
      // If the character is a letter, shift it
      if (alphabetArray.includes(char)) {
        // Calculate the index of the shifted letter
        // The "+ 26" and "% 26" ensure the shift wraps around the ends of the alphabet
        let shiftIndex = (alphabetArray.indexOf(char) + shift + 26) % 26;
        // Append the shifted letter to the output string
        output += alphabetArray[shiftIndex];
      } else {
        // If the character is not a letter, append it to the output string as is
        output += char;
      }
    }
  
    // Return the output string
    return output;
  }  

  // Function to encode or decode a string using the Caesar Cipher
  function caesar(input, shift, encode = true) {
    // Check the shift value for errors, return false if an error is found
    if (shift === 0 || shift === undefined || shift < -25 || shift > 25)
      return false; // return early error
  
    // Convert the input to lower case
    let lowerInput = input.toLowerCase();

    // If encode is true, perform the encoding operation
    if(encode) {
      const result = caesarEncode(lowerInput, shift);
      return result;
    } else {
      // If encode is false, perform the decoding operation by negating the shift
      const result = caesarEncode(lowerInput, shift * -1);
      return result;
    }
  }
  // Return the caesar function as part of the module
  return {
    caesar,
  };
})();


// const alphabetArray = [
//   "a",
//   "b",
//   "c",
//   "d",
//   "e",
//   "f",
//   "g",
//   "h",
//   "i",
//   "j",
//   "k",
//   "l",
//   "m",
//   "n",
//   "o",
//   "p",
//   "q",
//   "r",
//   "s",
//   "t",
//   "u",
//   "v",
//   "w",
//   "x",
//   "y",
//   "z",
// ];

// function caesar(input, shift, encode = true) {
//   // your solution code here
//   if (shift === 0 || shift === undefined || shift < -25 || shift > 25)
//     return false; // return early error

//   let lowerInput = input.toLowerCase();
//   let output = "";

//   for (let i = 0; i < lowerInput.length; i++) {
//     let char = lowerInput[i];

//     if (alphabetArray.includes(char)) {
//       let shiftIndex = (alphabetArray.indexOf(char) + shift) % 26;
//       output += alphabetArray[shiftIndex];
//     } else {
//       output += char;
//     }
//   }

//   return output;
// }



module.exports = { caesar: caesarModule.caesar };

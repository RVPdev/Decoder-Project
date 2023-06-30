// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // This function is used for encoding or decoding a string using a substitution cipher.

    // Check if the alphabet is provided and if it is exactly 26 characters long. If not, return false.
    if (!alphabet || alphabet.length !== 26) return false;

    // Create an array of unique characters from the substitution alphabet.
    // If the length of this array is not 26 (i.e., there were duplicate characters), return false.
    let unique = [...new Set(alphabet)];
    if (unique.length !== 26) return false;

    // Normalize the input to lowercase.
    const inputLower = input.toLowerCase();

    // Create a base alphabet array for easy lookup.
    const baseAlphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    let result = "";

    // If encoding, loop through each character of the input.
    if (encode) {
      for (let i = 0; i < inputLower.length; i++) {
        // If the character is a space, add a space to the result.
        if (inputLower[i] === " ") {
          result += " ";
        } else {
          // Find the index of the current character in the base alphabet.
          // Add the character from the substitution alphabet at the same index to the result.
          let baseIndex = baseAlphabet.indexOf(inputLower[i]);
          result += alphabet[baseIndex];
        }
      }
    } else {
      // If decoding, loop through each character of the input.
      for (let i = 0; i < inputLower.length; i++) {
        // If the character is a space, add a space to the result.
        if (inputLower[i] === " ") {
          result += " ";
        } else {
          // Find the index of the current character in the substitution alphabet.
          // Add the character from the base alphabet at the same index to the result.
          let encodeIndex = alphabet.indexOf(inputLower[i]);
          result += baseAlphabet[encodeIndex];
        }
      }
    }

    // Return the encoded or decoded result.
    return result;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };

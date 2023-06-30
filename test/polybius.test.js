// Write your tests here!
const expect = require("chai").expect;
const { polybius } = require("../src/polybius");

describe("test polybius function", () => {
  // This is the beginning of the test suite for the polybius function.

  describe("check validity of input and output", () => {
    // This nested describe block contains tests related to checking the validity of the input and output.

    it("output should be a 'string'", () => {
      // This test checks if the output of the polybius function is a string when encoding.
      const actual = polybius("abc");
      expect(actual).to.be.a("string");
    });

    it("input should be an even number of characters", () => {
      // This test checks if the function correctly returns false when trying to decode and the input does not have an even number of characters.
      const actual = polybius("12345", false);
      expect(actual).to.be.false;
    });
  });

  describe("check for proper functionality of function", () => {
    // This nested describe block contains tests related to checking the functionality of the polybius function.

    it("encode a word", () => {
      // This test checks if the function correctly encodes a word using the Polybius square cipher.
      const actual = polybius("thinkful");
      const expected = "4432423352125413";
      expect(actual).to.eql(expected);
    });

    it("encode a sentence", () => {
      // This test checks if the function correctly encodes a sentence, maintaining spaces, using the Polybius square cipher.
      const actual = polybius("Hello world");
      const expected = "3251131343 2543241341";
      expect(actual).to.eql(expected);
    });

    it("decode a sentence", () => {
      // This test checks if the function correctly decodes a sentence, maintaining spaces, using the Polybius square cipher.
      const actual = polybius("3251131343 2543241341", false);
      const expected = "hello world";
      expect(actual).to.eql(expected);
    });

    it("decode a word", () => {
      // This test checks if the function correctly decodes a word using the Polybius square cipher.
      // Notably, when "i" or "j" is decoded, it is represented as "(i/j)".
      const actual = polybius("4432423352125413", false);
      const expected = "thi/jnkful";
      expect(actual).to.eql(expected);
    });
  });
});

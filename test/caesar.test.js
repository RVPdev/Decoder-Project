// Write your tests here!
const expect = require("chai").expect;
const { caesar } = require("../src/caesar");

describe("Check ceasar encoding", () => {
  // The `describe` function is used to group related tests. In this case, 
  // all tests related to the `ceasar` function are grouped together.

  describe("check validity of 'shift' argument", () => {
    // Another group of tests is nested inside the first one. This group is 
    // specifically for checking that the `shift` argument is valid.

    it("check 'shift' parameter values is not present", () => {
        // The `it` function is used to define a single test. This test checks 
        // that the function returns `false` when the `shift` argument is not provided.
        const actual = caesar("test");
        expect(actual).to.be.false;
      });
    
    it("check 'shift' parameter values is zero", () => {
      // This test checks that the function returns `false` when the `shift` argument is zero.
      const actual = caesar("test", 0);
      expect(actual).to.be.false;
    });
    
    it("check 'shift' parameter values is less than -25", () => {
      // This test checks that the function returns `false` when the `shift` argument is less than -25.
      const actual = caesar("test", -26);
      expect(actual).to.be.false;
    });
    
    it("check 'shift' parameter values is more than 25", () => {
      // This test checks that the function returns `false` when the `shift` argument is more than 25.
      const actual = caesar("test", 26);
      expect(actual).to.be.false;
    });
  });

  describe("encoder checker", () => {
    // This group of tests is for checking that the encoding and decoding functionality works correctly.

    it("encode with spaces and other symbols inlcuding UpperCase", () => {
      // This test checks that encoding works correctly, even with spaces, symbols, and uppercase letters.
      const expected = "bpqa qa i amkzmb umaaiom!";
      const actual = caesar("This is a secret message!", 8);
      expect(actual).to.eql(expected);
    });
    
    it("decode with spaces and other symbols inlcuding UpperCase", () => {
      // This test checks that decoding works correctly, even with spaces, symbols, and uppercase letters.
      const expected = "this is a secret message!";
      const actual = caesar("BPQA qa I amkzmb umaaiom!", 8, false);
      expect(actual).to.eql(expected);
    });

    it("encode one word", () => {
        // This test checks that encoding a single word works correctly.
        const expected = "wklqnixo";
        const actual = caesar("thinkful", 3);
        expect(actual).to.eql(expected);
    });

    it("decode one word", () => {
        // This test checks that decoding a single word works correctly.
        const expected = "thinkful";
        const actual = caesar("wklqnixo", 3, false);
        expect(actual).to.eql(expected);
    });
  });
});

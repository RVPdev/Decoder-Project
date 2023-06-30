// Write your tests here!
const expect = require('chai').expect;
const { substitution } = require('../src/substitution');

describe('substitution', () => {
    // This `describe` block groups together all tests related to the `substitution` function

    it('should return false if the substitution alphabet is missing', () => {
        // This test checks if the `substitution` function correctly handles the case when the substitution alphabet is missing
        const actual = substitution('thinkful');
        expect(actual).to.be.false;
    });

    it('should return false if the substitution alphabet is not 26 characters long', () => {
        // This test checks if the `substitution` function correctly handles the case when the substitution alphabet is less than 26 characters
        const actual = substitution('thinkful', 'short');
        expect(actual).to.be.false;
    });

    it('should return false if the substitution alphabet does not contain unique characters', () => {
        // This test checks if the `substitution` function correctly handles the case when the substitution alphabet contains duplicate characters
        const actual = substitution('thinkful', 'abcabcabcabcabcabcabcabcab');
        expect(actual).to.be.false;
    });

    it('should correctly translate the given phrase, maintaining spaces', () => {
        // This test checks if the `substitution` function correctly translates an input string while maintaining spaces
        const actual = substitution('hello world', 'zyxwvutsrqponmlkjihgfedcba');
        const expected = 'svool dliow';
        expect(actual).to.equal(expected);
    });

    it('should return the same result regardless of case of the input', () => {
        // This test checks if the `substitution` function correctly handles input with mixed casing (both uppercase and lowercase letters)
        const actual = substitution('Hello World', 'zyxwvutsrqponmlkjihgfedcba');
        const expected = 'svool dliow';
        expect(actual).to.equal(expected);
    });

    it('should decode as well as encode', () => {
        // This test checks if the `substitution` function correctly decodes an input string
        const actual = substitution('svool dliow', 'zyxwvutsrqponmlkjihgfedcba', false);
        const expected = 'hello world';
        expect(actual).to.equal(expected);
    });
});

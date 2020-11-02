const { assert } = require("chai");

const assertEqual = require ('../assertEqual');
const tail = require ('../tail');
const result = tail(["Hello", "Lighthouse", "Labs"]);


describe("#tail", () => {
  it("should return 2 elements", () => {
    assert.StrictEqual(result.length, 2);
  });
  it("ensure first element is Lighthouse", () => {
    assert.StrictEqual(result[0], "Lighthouse");
  });
});

/* Test Case 1: Check the returned array elements
const result = tail(["Hello", "Lighthouse", "Labs"]);
console.log(assertEqual(result.length, 2)); // ensure we get back two elements
console.log(assertEqual(result[0], "Lighthouse")); // ensure first element is "Lighthouse"
console.log(assertEqual(result[1], "Labs")); // ensure second element is "Labs"
*/
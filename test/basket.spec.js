const { assertEquals } = require("../test-framework");
const { Basket } = require("../src/basket");
const { Item } = require("../src/item");


let input, expected, actual, result;
let stub = new Basket();

console.log(`Test 1: new Item() => 1`)

//Arrange
expected = 1;
input = new Item();

//Act
actual = stub.addItem(input);
console.log(actual);

//Assert
result = assertEquals(actual, expected);

console.log(`Test 1: new Item() => 1: ${result ? `Passed` : `Failed`}`);

expected = undefined;
input = undefined;
actual = undefined;
result = undefined;



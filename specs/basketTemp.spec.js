const BasketClass = require("../src/basketClass");
const ItemClass = require("../src/itemClass");
const assertEquals = require("../test-framework");

let input, expected, actual, result, tempClass;

// Arrange, Act, Assert, Clean up

// Test 1
console.log(`Test 1: new ItemClass() => 1`);

// Arrange
input = new ItemClass();
expected = 1;
tempClass = new BasketClass();

// Act
actual = tempClass.addItem(input);

// Assert
result = assertEquals(expected, actual);
console.log(`Test new ItemClass() => 1 - new basket list size: ${result ? `Passed` : `Failed`}`);

// Clean up
input = undefined;
expected = undefined;
actual = undefined;
result = undefined;
tempClass = undefined;
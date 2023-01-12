const BasketClass = require("../src/basketClass");
const ItemClass = require("../src/itemClass");
const assertEquals = require("../test-framework");

let input, expected, actual, result, tempClass;

// Arrange, Act, Assert, Clean up

// Test 1
console.log(`Test 1: tempClass.addItem(new Item()) => 1`);

// Arrange
input = new ItemClass();
expected = 1;
tempClass = new BasketClass();

// Act
actual = tempClass.addItem(input);
console.log(`output: ${actual}`);

// Assert
result = assertEquals(expected, actual);
console.log(`Test new ItemClass() => 1: ${result ? `Passed` : `Failed`}\n`);

// Clean up
input = undefined;
expected = undefined;
actual = undefined;
result = undefined;
tempClass = undefined;


// Test 2
console.log(`Test 2: tempClass.removeItem(new Item()) => 0 - new basket list size`);

// Arrange
input = new ItemClass();
expected = 0;
tempClass = new BasketClass();

// Act
actual = tempClass.removeItem(input);
console.log(`output: ${actual}`);

// Assert
result = assertEquals(expected, actual);
console.log(`Test new ItemClass() => 0: ${result ? `Passed` : `Failed`}\n`);

// Clean up
input = undefined;
expected = undefined;
actual = undefined;
result = undefined;
tempClass = undefined;


// Test 3
console.log(`Test 3: tempClass.addItem() => 0 - can't add nothing to basket`);

// Arrange
expected = 0;
tempClass = new BasketClass();

// Act
actual = tempClass.addItem();
console.log(`output: ${actual}`);

// Assert
result = assertEquals(expected, actual);
console.log(`Test 3 n/a => 0: ${result ? `Passed` : `Failed`}\n`);

// Clean up
input = undefined;
expected = undefined;
actual = undefined;
result = undefined;
tempClass = undefined;


// Test 4
console.log(`Test 4: tempClass.addItem(7) => 0 - can't add non-items to basket`);

// Arrange
input = 7;
expected = 0;
tempClass = new BasketClass();

// Act
actual = tempClass.addItem(input);
console.log(`output: ${actual}`);

// Assert
result = assertEquals(expected, actual);
console.log(`Test 7 => 0: ${result ? `Passed` : `Failed`}\n`);

// Clean up
input = undefined;
expected = undefined;
actual = undefined;
result = undefined;
tempClass = undefined;


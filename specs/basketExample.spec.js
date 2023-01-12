const assertEquals = require(`../test-framework`);
const Basket = require(`../src/Basket`);
const Item = require(`../src/Item`);

let expected, actual, result, basket, item;


// Test 1
console.log(`==================================================================`);
console.log(`*** Test 1 - addItem puts Item into the basket ***`);

// Arrange
basket = new Basket();
item = new Item();
expected = 1;

// Act
basket.addItem(item);
actual = basket.basketItems.length;

// Assert
result = assertEquals(actual, expected);
console.log(`Test 1 - Item added to basket: ${result ? `Passed` : `Failed`}`);

// Clean up
expected = undefined;
actual = undefined;
result = undefined;
basket = undefined;
item = undefined;

console.log(`==================================================================`);



// Test 2
console.log(`==================================================================`);
console.log(`*** Test 2: addItem should only add Item instances to the basketList ***`);

// Arrange
basket = new Basket();
item = `something`;
expected = 0;

// Act
basket.addItem(item);
actual = basket.basketItems.length;

// Assert
result = assertEquals(actual, expected);
console.log(`Test 2 - Only Item instances added to the basket: ${result ? 'Passed' : 'Failed'}`);

// Clean up
expected = undefined;
actual = undefined;
result = undefined;
basket = undefined;
item = undefined;


// Test 3
console.log(`==================================================================`);
console.log(`*** Test 3: Edge case - falsy values should not be added to the basket ***`);

// Arrange
basket = new Basket();
item = null;
expected = 0;

// Act
basket.addItem(item);
actual = basket.basketItems.length;

// Assert
result = assertEquals(actual, expected);
console.log(`Test 3 - Edge case - falsy values should not be added to the basket: ${result ? 'Passed' : 'Failed'}`);

// Clean up
expected = undefined;
actual = undefined;
result = undefined;
basket = undefined;
item = undefined;


// Test 4 - basketItems length decreases by 1 when Item is found and removed
console.log(`==================================================================`);
console.log(`*** Test 4: basketItems length decreases to 0 when Item is found and removed ***`);

// Arrange
basket = new Basket();
item = new Item(`test1`);
basket.addItem(item);  // it's legal to use previous things as they passed earlier tests
expected = basket.basketItems.length - 1;

// Act
basket.removeItem(item);
actual = basket.basketItems.length;

// Assert
result = assertEquals(actual, expected);
console.log(`Test 4 - basketItems length decreases by 1 when Item is found and removed: ${result ? 'Passed' : 'Failed'}`);

// Clean up
expected = undefined;
actual = undefined;
result = undefined;
basket = undefined;
item = undefined;

console.log(`==================================================================`);
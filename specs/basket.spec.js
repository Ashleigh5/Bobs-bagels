
// everything in the file 'basket' will be called 'BasketClass' in this file
const BasketClass = require("../src/basketClass");
const ItemClass = require("../src/itemClass");
const assertEquals = require("../test-framework");

//simple test
//console.log(assertEquals(1, 1));

let basketObject, expectedArraySize, actualArraySize, itemObject;

console.log('Test 1: Can add item to basket');
//Arrange - Given
itemObject = new ItemClass('ItemId1');
basketObject = new BasketClass();
expectedArraySize = 1;

//Act - When
basketObject.addItem(itemObject);

//Assert - Then
actualArraySize = basketObject.basketItems.length;
console.log(assertEquals(actualArraySize, expectedArraySize));

basketObject = undefined;
expectedArraySize = undefined;
actualArraySize = undefined;
itemObject = undefined;

console.log('Test 2: Can remove an item from the basket');

//Arrange - Given
itemObject = new ItemClass('ItemId1');
basketObject = new BasketClass();
basketObject.addItem(itemObject);
expectedArraySize = 0;

//Act - When
basketObject.removeItem(itemObject);

//Assert - then
actualArraySize = basketObject.basketItems.length;
console.log(assertEquals(actualArraySize, expectedArraySize));
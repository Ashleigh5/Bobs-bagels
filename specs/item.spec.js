const ItemClass = require("../src/itemClass");
const assertEquals = require("../test-framework");



console.log('Test 3: Can get item ID');

//Arrange - Given
itemObject = new ItemClass('ItemId1');
expectedItemId = 'ItemId1';

//Act - When
actualItemId = itemObject.getID();

//Assert - then
console.log(assertEquals(actualItemId, expectedItemId));
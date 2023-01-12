class ItemClass {
    constructor(itemId) { // properties you want to pass to object
        this.itemId = itemId; // properties the object has
    }

    getID() {
        return this.itemId;
    }

}

module.exports = ItemClass;
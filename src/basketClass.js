class BasketClass {

    // this means each new basket has an empty array
    constructor() {
        this.basketItems = [];
    }

    addItem(item) {
        this.basketItems.push(item);
        return this.basketItems.length;
    }

    removeItem(item) {
        this.basketItems.pop(item);
    }

}

// exports has to be at the bottom of the file
module.exports = BasketClass;
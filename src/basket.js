class Basket {
    basketItems = [];
    addItem(item) {
        this.basketItems.push(item);
        return this.basketItems.length;
    }
};

module.exports = {
    Basket
};
"use strict";
const score = [];
const fname = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
//once you passed any datatype that type is locked here
function identityThree(val) {
    return val;
}
//same as above
function identityFour(val) {
    return val;
}
const MyBottle = {
    brand: "Mendis", type: 2
};
const result = identityFour(MyBottle);
console.log(result.brand);
//===========================================================================================================================
function getSearchProducts(product) {
    const myIndex = 3;
    return product[myIndex];
}
//converting the same code into array function
const getMoreSearchProducts = (product) => {
    const myIndex = 4;
    return product[myIndex];
};
//numbers array
const getMoreSearchProduct = (product) => {
    const myIndex = 4;
    return product[myIndex];
};
function anotherFunction(valOne, valTwo) {
    return {
        valOne, valTwo
    };
}
const result1 = anotherFunction(3, { connection: "12435", username: "amandi", password: "1234redfg" });
console.log(result1.valTwo);
//here we take T as generic
class syllabul {
    constructor() {
        this.cart = [];
    }
    addToCart(products) {
        this.cart.push(products);
    }
}
//# sourceMappingURL=generics.js.map
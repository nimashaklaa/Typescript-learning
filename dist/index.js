"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chicken_1 = require("./chicken");
//first code========================================================================================
//console.log("Hello Amandi");
//calling a function=================================================================================
const chicken = new chicken_1.Chicken();
//chicken.cluck();
//using variables====================================================================================
let user = { name: "Amandi", age: 10 };
//console.log(user.name)
let greeting = "Hello Riya";
let mynum = 6;
console.log(greeting, mynum);
//calling a function==================================================================================
function add(num) {
    return num + 2;
}
let sum = add(5);
console.log(sum);
//============================================================
function UserLoggin(name, email, Ispaid) {
    if (Ispaid) {
        console.log("you successfully login");
    }
    else {
        console.log("Please pay");
    }
}
UserLoggin("Amandi", "amandi@gmail.com", false);
//passing default values into a function=======================
//here in let SignUp=()=> the parameters can be changed
let SignUp = (name, email, Ispaid = false) => {
    console.log("You are " + Ispaid);
};
SignUp("Amandi", "amandi@gmail.com");
//fixing the return type=========================================
function addNum(num) {
    return num + 3;
}
let sum1 = addNum(5);
console.log(sum1);
//================================================================
const getHello = (s) => {
    s = "I'm Nimasha";
    return s;
};
console.log(getHello("I'm Amandi"));
const heros = ["thor", "Spiderman", "IronMan"];
heros.map((hero) => {
    console.log(`hero is ${hero}`);
});
//Handling errors============================================================================================================
function consoleError(errMsg) {
    console.log(errMsg);
}
/*function handleError(errmsg: String ):never{
    throw new Error(errmsg);
}*/
//# sourceMappingURL=index.js.map
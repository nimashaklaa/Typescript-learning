"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User = {
    name: "Amandi",
    email: "amandinimasha@gmail.com",
    IsActive: true
};
//fucntions without return type====================================================================================
function CreateUser({ name, Ispaid }) {
    console.log(`Hi ${name}`);
}
CreateUser({ name: "Amashi", Ispaid: true });
//functions with return type =======================================================================================
function CreateCourse() {
    return { name: "ReactJs", price: 35000 };
}
console.log(CreateCourse());
//fucntion with additional inputs===================================================================================
function CreateNewUser({ name, email, Ispaid = true }) {
    const newUser = { name, email, Ispaid };
    return newUser;
}
let user1 = { name: "Amandi", email: "amandi@gmail.com", IsPaid: true };
console.log(CreateNewUser(user1));
//# sourceMappingURL=function.js.map
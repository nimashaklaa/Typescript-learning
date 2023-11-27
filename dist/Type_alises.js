"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function CreateUser(user) {
    return { name: '', email: '', isActive: true };
}
console.log(CreateUser({ name: 'Amandi', email: 'ama@gmail.com', isActive: false }));
function PointCode(pt) {
    console.log(`x-cordinate is ${pt.x + 2}`);
    console.log(`y-cordinate is ${pt.y + 2}`);
}
PointCode({ x: 20, y: 50 });
let MyUser = {
    _id: "12345",
    name: "Amandi",
    email: "amandi@gmail.com",
    isActive: true
};
MyUser.email = "nimasha@gmail.com";
console.log(MyUser);
let cardNumber = {
    CardNumber: "1234 5678 9012 3456"
};
let cardDate = {
    CardDate: "12/24"
};
let cardDetails = Object.assign(Object.assign(Object.assign({}, cardNumber), cardDate), { cvv: "123" });
console.log(cardDetails);
//# sourceMappingURL=Type_alises.js.map
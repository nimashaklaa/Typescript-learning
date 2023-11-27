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
//we can give access to hithesh as a Student or as an Admin
let hithesh = {
    name: "hithesh",
    id: 123456
};
hithesh = { username: "hithesha", id: 23567 };
console.log(hithesh);
//=====================================================================================================
function getDBid(id) {
    if (typeof id === "string") {
        id = id.toLowerCase();
        console.log(`DB id is ${id}`);
    }
    //console.log(`DB id is ${id}`)
}
getDBid("SGye");
//====================================================================================================
const data = [1, 2, 3];
const data2 = ["1", "2", "3"];
const data3 = ["1", 2, 3];
//========================================================================================================
//fixed values
let pi = 3.14;
let seatAllotment;
seatAllotment = "window";
// seatAllotment ="crew" => this does not give chance
//======================......tuples.......================================================================
// use instances like API calls
let tUser;
tUser = ["Ama", 2, true]; //order is really matters
let rgb = [255, 234, 123];
//================...enums...=============================================================================
//enums are used to choose the elements
var SeatChoice;
(function (SeatChoice) {
    SeatChoice[SeatChoice["AISLE"] = 1000] = "AISLE";
    SeatChoice[SeatChoice["MIDDLE"] = 1001] = "MIDDLE";
    SeatChoice[SeatChoice["WINDOW"] = 1002] = "WINDOW";
})(SeatChoice || (SeatChoice = {}));
const hsheat = SeatChoice.AISLE;
//# sourceMappingURL=Type_alises.js.map
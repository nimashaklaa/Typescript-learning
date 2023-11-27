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
//# sourceMappingURL=Type_alises.js.map
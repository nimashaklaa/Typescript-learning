"use strict";
class UserLogin {
    constructor(email, name) {
        //if taking a variable that is not comming from constructor
        this.city = '';
        this.email = email;
        this.name = name;
        this.city = "Jayapur";
        //console.log(this.city)
    }
}
const amandi = new UserLogin("amandi@gmail.com", "amandi");
console.log(amandi.email);
// console.log(amandi.city) as this is private and cannot be retrieved from outside of the class
//==============================.....proffesional practice....=============================================
//proffesionals do not use this.name .. for their code
class UserLogin2 {
    constructor(email, username, 
    //private _courseCount = 1
    _courseCount = 10) {
        this.email = email;
        this.username = username;
        this._courseCount = _courseCount;
    }
    //example of a getter
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    //here set courseCount(courseNum):void{} here we do not use void though this does not return nothing 
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course COunt should be more than 1");
        }
        this._courseCount = courseNum;
        console.log(this._courseCount);
    }
}
class subUser extends UserLogin2 {
    //protected can be achieved from any subclasses
    changeCourse() {
        this._courseCount = 4;
    }
}
const amandii = new UserLogin2("amandi@gmail.com", "ama");
console.log(amandii.username);
console.log(amandii.getAppleEmail);
//# sourceMappingURL=project.js.map
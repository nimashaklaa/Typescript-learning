"use strict";
class UserLogin {
    constructor(email, name) {
        //if taking a variable that is not comming from constructor
        this.city = '';
        this.email = email;
        this.name = name;
    }
}
const amandi = new UserLogin("amandi@gmail.com", "amandi");
console.log(amandi.email);
//# sourceMappingURL=project.js.map
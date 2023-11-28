"use strict";
function providid(s) {
    if (!s) {
        return "No added Id";
    }
    return s + 2;
}
const sum = providid(null);
console.log(sum);
//==================================================================================
function printAll(strs) {
    if (strs) {
        if (typeof strs === "object") {
            for (const s of strs) {
                console.log(s);
            }
        }
        else if (typeof strs === "string") {
            console.log(strs);
        }
    }
}
printAll(["hi", "hiks", "hiruks"]);
function isAdminAccount(account) {
    if ("isAdmin" in account) {
        return account.isAdmin;
    }
}
function move(animal) {
    var _a, _b;
    if ("swim" in animal && typeof animal.swim === "function") {
        (_a = animal.swim) === null || _a === void 0 ? void 0 : _a.call(animal); // Optional chaining to safely call swim function
    }
    else if ("fly" in animal && typeof animal.fly === "function") {
        (_b = animal.fly) === null || _b === void 0 ? void 0 : _b.call(animal); // Optional chaining to safely call fly function
    }
    else {
        console.log("The animal can neither swim nor fly.");
    }
}
// Example usage:
const fish = { swim: () => console.log("Fish is swimming.") };
const bird = { fly: () => console.log("Bird is flying.") };
const human = { swim: () => console.log("Human is swimming."), fly: () => console.log("Human is flying.") };
move(fish); // Output: Fish is swimming.
move(bird); // Output: Bird is flying.
move(human); // Output: Human is swimming.
//=============================================================================================
function logValue(x) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    }
    else {
        console.log(x.toUpperCase());
    }
}
function isFish(pet) {
    return pet.swim !== undefined;
}
function getfood(pet) {
    if (isFish(pet)) {
        pet;
        return "Fish food";
    }
    else {
        pet;
        return "bird food";
    }
}
//# sourceMappingURL=narrowing.js.map
function providid(s:number|null){
    if (!s){
        return "No added Id"
    }
    return s+2
}
const sum = providid(null)
console.log(sum)
//==================================================================================
function printAll(strs: string | string[] | null) {
    
    if (strs) {
      if (typeof strs === "object") {
        for (const s of strs) {
          console.log(s);
        }
      } else if (typeof strs === "string") {
        console.log(strs);
      }
    }
  }

printAll(["hi","hiks","hiruks"])

//====================================================================================

interface UserAd{
    name:String,
    email:String
}

interface AdminAd{
    name:String,
    email:String,
    isAdmin:boolean
}

function isAdminAccount (account: UserAd| AdminAd){
    if ("isAdmin"in account){
        return account.isAdmin
    }
}

//====================================================================================
type Fish = { swim: () => void };
type Bird = { fly: () => void };
type Human = { swim?: () => void; fly?: () => void };
 
function move(animal: Fish | Bird | Human) {
  if ("swim" in animal && typeof animal.swim === "function") {
    animal.swim?.(); // Optional chaining to safely call swim function
  } else if ("fly" in animal && typeof animal.fly === "function") {
    animal.fly?.();  // Optional chaining to safely call fly function
  } else {
    console.log("The animal can neither swim nor fly.");
  }
}

// Example usage:
const fish: Fish = { swim: () => console.log("Fish is swimming.") };
const bird: Bird = { fly: () => console.log("Bird is flying.") };
const human: Human = { swim: () => console.log("Human is swimming."), fly: () => console.log("Human is flying.") };

move(fish);  // Output: Fish is swimming.
move(bird);  // Output: Bird is flying.
move(human); // Output: Human is swimming.
//=============================================================================================

function logValue(x: Date | string) {
    if (x instanceof Date) {
      console.log(x.toUTCString());
                 
  
    } else {
      console.log(x.toUpperCase());
                 

    }
  }

//==========================================================================================
type Fish1 = {swim:()=>void}
type bird1 = {fly:()=>void}

function isFish (pet: Fish1| bird1): pet is Fish{
    return (pet as Fish1).swim !== undefined
}

function getfood( pet:Fish1| bird1){
    if (isFish(pet)){
        pet
        return "Fish food"
    }
    else{
        pet
        return "bird food"
    }
}


















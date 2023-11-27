import { Chicken } from "./chicken";

//first code========================================================================================
//console.log("Hello Amandi");

//calling a function=================================================================================
const chicken = new Chicken();
//chicken.cluck();
 
//using variables====================================================================================
let user={name:"Amandi", age :10}
//console.log(user.name)

let greeting: string ="Hello Riya";
let mynum =6
console.log(greeting, mynum)

//calling a function==================================================================================
function add(num:number){

    return num+2
}
let sum:number =add(5)
console.log(sum)
//============================================================
function UserLoggin(name: String ,email:String, Ispaid:boolean){
 if (Ispaid){
    console.log("you successfully login");
 } 
 else{
    console.log("Please pay")
 }  
}
UserLoggin("Amandi","amandi@gmail.com",false)

//passing default values into a function=======================
//here in let SignUp=()=> the parameters can be changed
let SignUp=(name:String, email:String ,Ispaid:boolean =false)=>{
    console.log("You are "+Ispaid)
}
SignUp("Amandi","amandi@gmail.com")
//fixing the return type=========================================
function addNum(num:number):number{

    return num+3
}
let sum1:number =addNum(5)
console.log(sum1)
//================================================================
const getHello= (s:String):String=>{
    s="I'm Nimasha"
    return s;

}
console.log(getHello("I'm Amandi"))

const heros=["thor","Spiderman","IronMan"]
heros.map((hero:String)=>{
    console.log(`hero is ${hero}`) 
})
//Handling errors============================================================================================================
function consoleError (errMsg: String):void{
    console.log(errMsg)
}

/*function handleError(errmsg: String ):never{
    throw new Error(errmsg);
}*/


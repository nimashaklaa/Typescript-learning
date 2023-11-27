type User ={
    name:String;
    email: String;
    isActive:boolean
}
function CreateUser(user:User):User{
    return {name:'',email:'',isActive:true}
}
console.log(CreateUser({name:'Amandi',email:'ama@gmail.com',isActive:false}))
//example 2 ======================================================================================================
type Point ={
    x:number;
    y:number;
}

function PointCode(pt:Point){
    console.log(`x-cordinate is ${pt.x+2}`)
    console.log(`y-cordinate is ${pt.y+2}`)
}
PointCode({x:20,y:50})

//example 3 ==================================================================================================

type Users ={
    readonly _id: String; //no body will be able to touch / manupulate this data 
    name:String;
    email: String;
    isActive:boolean;
    credictCardDetails?:number;  // ? is used for optinal details
}
let MyUser:Users ={
    _id :"12345",
    name:"Amandi",
    email:"amandi@gmail.com",
    isActive: true

}
MyUser.email ="nimasha@gmail.com"
console.log(MyUser)

//====================================================================================================================
type CardNumber ={
    CardNumber:String
}

type CardDate ={
    CardDate:String
}
type CardDetails = CardNumber & CardDate &{
    cvv:String
}
let cardNumber: CardNumber = {
    CardNumber: "1234 5678 9012 3456"
};

let cardDate: CardDate = {
    CardDate: "12/24"
};

let cardDetails: CardDetails = {
    ...cardNumber,
    ...cardDate,
    cvv: "123"
};

console.log(cardDetails);



export{}
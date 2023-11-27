const User={
    name: "Amandi",
    email: "amandinimasha@gmail.com",
    IsActive: true
}
//fucntions without return type====================================================================================
function CreateUser({name,Ispaid}:{name:String ,Ispaid:boolean}):void{
    console.log(`Hi ${name}`)

}
CreateUser({name:"Amashi",Ispaid:true})

//functions with return type =======================================================================================
function CreateCourse():{name:String, price:number}{
    return{name:"ReactJs", price: 35000}
}
console.log(CreateCourse())

//fucntion with additional inputs===================================================================================
function CreateNewUser({name,email,Ispaid = true}:{name:String, email:String, Ispaid?:boolean}):{name:String, email:String,Ispaid:boolean}{
    const newUser ={name,email,Ispaid};
    return newUser;
}
let user1 = {name:"Amandi",email:"amandi@gmail.com", IsPaid:true}

console.log(CreateNewUser(user1))


export{}
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







export{}
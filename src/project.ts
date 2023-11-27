class UserLogin{
    email:String
    name: String
    //if taking a variable that is not comming from constructor
    city:String =''
    constructor(email:String, name:String){
        this.email =email;
        this.name= name;
    }
}
const amandi=new UserLogin("amandi@gmail.com","amandi")
console.log(amandi.email)
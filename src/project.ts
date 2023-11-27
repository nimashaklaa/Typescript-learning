class UserLogin{
    //every thing that you donot mark is public
    public email:String
    name: String
    //if taking a variable that is not comming from constructor
    private readonly city:String =''
    constructor(email:String, name:String){
        this.email =email;
        this.name= name;
        this.city ="Jayapur"
        //console.log(this.city)
    }
}
const amandi=new UserLogin("amandi@gmail.com","amandi")
console.log(amandi.email)
// console.log(amandi.city) as this is private and cannot be retrieved from outside of the class

//==============================.....proffesional practice....=============================================
//proffesionals do not use this.name .. for their code
class UserLogin2{
    constructor(
        public email:String,
        public username: String,
        //private _courseCount = 1
        protected _courseCount = 10

    ){}
    //example of a getter
    get getAppleEmail():String{
        return `apple${this.email}`

    }

    get courseCount():number{
        return this._courseCount
    }

    //here set courseCount(courseNum):void{} here we do not use void though this does not return nothing 
    set courseCount(courseNum){
        if (courseNum<=1){
            throw new Error("Course COunt should be more than 1")
        }
        this._courseCount=courseNum
        console.log(this._courseCount)
    }

    
}

class subUser extends UserLogin2{
    //protected can be achieved from any subclasses
    changeCourse(){
         this._courseCount = 4
    }
}
const amandii = new UserLogin2("amandi@gmail.com","ama")

console.log(amandii.username)
console.log(amandii.getAppleEmail)
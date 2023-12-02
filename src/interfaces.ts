// type no.1
interface UserNo{
    readonly dbId :number,
    email :string;
    userId :number;
    googleId ?:number;
    //startTrial:()=>string ;
    startTrial():string
    getCoupen(coupenName:String):number

}
//***********If I want a github token we do not need to touch the previous interface again===================
//ReOpening of the interface
interface UserNo{
    githubToken:String
}

const Amandi: UserNo ={dbId: 22234, email:"amandi@gmail.com",userId:12334345,
startTrial:() =>{
    return "trail started";
},
getCoupen(coupenName="SamanMal") {
    return 10  
},
githubToken:"tAhbshehsHH"
}
console.log(Amandi.startTrial())

//===========..........inheritance.......========================================================================
interface Admin extends UserNo{
    role:"admin"|"TA"|"Learner"

}
const Nilumi: Admin ={dbId: 22234, email:"amandi@gmail.com",userId:12334345,
startTrial:() =>{
    return "trail started";
},
getCoupen(coupenName="SamanMal") {
    return 10  
},
githubToken:"tAhbshehsHH",
role:"admin"
}
// interface vs type is type cannot be changed after creating but not interface
//can extend via intercetion in type 



export{}

// type no.1
interface UserNo{
    readonly dbId :number;
    email :string;
    userId :number;
    googleId ?:number;
    //startTrial:()=>string ;
    startTrial():string

}

const Amandi: UserNo ={dbId: 22234, email:"amandi@gmail.com",userId:12334345,
startTrial:() =>{
    return "trail started";
}

}
console.log(Amandi.startTrial())

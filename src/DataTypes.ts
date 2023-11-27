//Array
const SuperHeros : String[] = []

SuperHeros.push("SuperMan")
SuperHeros.push("IronMan")

SuperHeros.map((heros:String)=>{
    console.log(`${heros}`)

})
//same as previous 
const HeroPower : Array<number> =[]
HeroPower.push(1)

// using type here===================================================================
type User ={
    name: String;
    isActive: boolean;
}

const AllUsers: User[] =[]

AllUsers.push({name:"Amandi", isActive:true})
AllUsers.push({name:"Nimasha", isActive:true})
AllUsers.map((users:User)=>{
    console.log(users.name)

})
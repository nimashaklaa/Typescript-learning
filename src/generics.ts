const score:Array<number>=[]
const fname: Array<String> = []

function identityOne(val: boolean| number):(boolean|number){
    return val;
}

function identityTwo(val:any):any{
    return val;
}
//once you passed any datatype that type is locked here
function identityThree<Type>(val:Type):Type{
    return val;
}
//same as above
function identityFour<T>(val:T):T{
    return val;
}
//the advantage is we can define your own types and can pass into it''s generic

interface bottle{
    brand:String,
    type: number
}
const MyBottle: bottle ={
    brand:"Mendis", type:2
}
const result = identityFour<bottle>(MyBottle)


console.log(result.brand)
//===========================================================================================================================

function getSearchProducts<T>(product:T[]):T{
    const myIndex=3
    return product[myIndex]
}
//converting the same code into array function
const getMoreSearchProducts = <T>(product:T[]):T =>{
    const myIndex = 4
    return product[myIndex]
}
//numbers array
const getMoreSearchProduct = (product:number[]):number =>{
    const myIndex = 4
    return product[myIndex]
} 

//=============================================================================================================================

interface dataBase{
    connection: String,
    username: String,
    password :String
}


function anotherFunction <T,U extends dataBase>(valOne:T,valTwo:U):{valOne:T,valTwo:U}{
    
    return{
        valOne,valTwo
    }
}
const result1=anotherFunction(3,{connection:"12435", username:"amandi",password:"1234redfg"})
console.log(result1.valTwo)
//=============================================================================================================================

interface Quiz{
    name:String
    type:String
}

interface courses{
    name:String,
    auth: String,
    author: String
}
//here we take T as generic
class syllabul<T>{
    public cart: T[]=[]
    addToCart(products:T){
        this.cart.push(products)
    }

}
















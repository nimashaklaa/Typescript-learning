interface circle{
    kind:"circle",
    radius:number
}

interface square{
    kind: "square"
    side:number
}

interface rectangle{
    kind:"rectangle",
    hight:number,
    width:number
}

type Shape =circle|square

function getTrueShape(shape : Shape) {
    if(shape.kind==="circle"){
        return Math.PI*shape.radius ** 2
    }
    return shape.side**2
}  

const circle1: circle = { kind: "circle", radius: 5 };
console.log(getTrueShape(circle1));

//==============================================================================================================

function getArea (shape:Shape){
    switch(shape.kind){
        case "circle":
            return Math.PI*shape.radius ** 2
        case "square":
            return shape.side**2
        //case "rectangle":
            //return shape.hight*shape.width  this generates error so we need to make a default value
        default:
            const _defaultforshape: never =shape
            return _defaultforshape
}
}
 




















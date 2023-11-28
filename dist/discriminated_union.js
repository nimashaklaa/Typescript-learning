"use strict";
function getTrueShape(shape) {
    if (shape.kind === "circle") {
        return Math.PI * shape.radius ** 2;
    }
    return shape.side ** 2;
}
const circle1 = { kind: "circle", radius: 5 };
console.log(getTrueShape(circle1));
//==============================================================================================================
function getArea(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.side ** 2;
        //case "rectangle":
        //return shape.hight*shape.width  this generates error so we need to make a default value
        default:
            const _defaultforshape = shape;
            return _defaultforshape;
    }
}
//# sourceMappingURL=discriminated_union.js.map
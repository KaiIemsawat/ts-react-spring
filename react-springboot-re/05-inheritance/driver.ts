import { Circle } from "./Circle";
import { Regtangle } from "./Regtangle";
import { Shape } from "./Shaps";

let myShape = new Shape(10, 15);
console.log(myShape.getInfo());

let myCircle = new Circle(5, 10, 20);
console.log(myCircle.getInfo());

let myReg = new Regtangle(2, 2, 4, 6);
console.log(myReg.getInfo());

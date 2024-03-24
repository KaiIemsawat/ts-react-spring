import { Circle } from "./Circle";
import { Regtangle } from "./Regtangle";
import { Shape } from "./Shaps";

let myCircle = new Circle(5, 10, 20);
let myReg = new Regtangle(2, 2, 4, 6);

let theShapes: Shape[] = [];

theShapes.push(myCircle);
theShapes.push(myReg);

for (let shape of theShapes) {
    console.log(shape.getInfo());
    console.log(shape.calculateArea(), "\n");
}

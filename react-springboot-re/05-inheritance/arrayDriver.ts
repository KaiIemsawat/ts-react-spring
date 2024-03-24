import { Circle } from "./Circle";
import { Regtangle } from "./Regtangle";
import { Shape } from "./Shaps";

let myShape = new Shape(10, 15);
let myCircle = new Circle(5, 10, 20);
let myReg = new Regtangle(2, 2, 4, 6);

let theShapes: Shape[] = [];

theShapes.push(myShape);
theShapes.push(myCircle);
theShapes.push(myReg);

for (let tempShap of theShapes) {
    console.log(tempShap.getInfo());
}

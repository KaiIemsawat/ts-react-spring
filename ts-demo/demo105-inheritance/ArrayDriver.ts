import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";
import { Shape } from "./Shape";

let myShape = new Shape(10, 15);

let myCircle = new Circle(5, 10, 20);

let myRectangle = new Rectangle(7, 0, 3, 5);

let theShapes: Shape[] = [];

theShapes.push(myShape);
theShapes.push(myCircle);
theShapes.push(myRectangle);

for (let tempShape of theShapes) {
    console.log(tempShape.getInfo());
}

// Since Circle and Rectangle extends Shape they are of type Shape ?

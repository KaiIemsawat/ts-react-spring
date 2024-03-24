"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Circle_1 = require("./Circle");
const Regtangle_1 = require("./Regtangle");
let myCircle = new Circle_1.Circle(5, 10, 20);
let myReg = new Regtangle_1.Regtangle(2, 2, 4, 6);
let theShapes = [];
theShapes.push(myCircle);
theShapes.push(myReg);
for (let shape of theShapes) {
    console.log(shape.getInfo());
    console.log(shape.calculateArea(), "\n");
}

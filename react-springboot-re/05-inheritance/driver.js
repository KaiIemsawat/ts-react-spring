"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Circle_1 = require("./Circle");
const Regtangle_1 = require("./Regtangle");
const Shaps_1 = require("./Shaps");
let myShape = new Shaps_1.Shape(10, 15);
console.log(myShape.getInfo());
let myCircle = new Circle_1.Circle(5, 10, 20);
console.log(myCircle.getInfo());
let myReg = new Regtangle_1.Regtangle(2, 2, 4, 6);
console.log(myReg.getInfo());

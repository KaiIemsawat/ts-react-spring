"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Circle_1 = require("./Circle");
const Shaps_1 = require("./Shaps");
let myShape = new Shaps_1.Shape(10, 15);
console.log(myShape.getInfo());
let myCycle = new Circle_1.Circle(5, 10, 20);
console.log(myCycle.getInfo());

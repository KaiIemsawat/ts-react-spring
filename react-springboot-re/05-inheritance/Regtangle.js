"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Regtangle = void 0;
const Shaps_1 = require("./Shaps");
class Regtangle extends Shaps_1.Shape {
    constructor(theX, theY, _width, _length) {
        super(theX, theY);
        this._width = _width;
        this._length = _length;
    }
    get width() {
        return this._width;
    }
    set width(value) {
        this._width = value;
    }
    get length() {
        return this._length;
    }
    set length(value) {
        this._length = value;
    }
    getInfo() {
        return (super.getInfo() + `, width=${this._width}, length=${this._length}`);
    }
}
exports.Regtangle = Regtangle;

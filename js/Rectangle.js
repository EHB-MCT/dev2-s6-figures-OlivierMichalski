import Figure from './Figure.js';
export default class Rectangle extends Figure {
    constructor(width, height) {
    super(width, height)
    }
    get circumference(){
        return (this.width + this.height) * 2;
    }
    get area() {
    return this.width * this.height;
    }
    }

    
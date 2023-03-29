import Figure from './Figure.js';

export default class Circle extends Figure {
    constructor(radius) {
    super(radius)
    }

    get circumference(){
        return (2 * this.radius) * π;
        }

    get diameter(){
    return this.radius * 2;
    }

    get area() {
    return π * this.radius^2;
    }
    }

    
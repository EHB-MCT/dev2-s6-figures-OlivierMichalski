class Circle extends Shape {
    constructor(radius) {
    super(radius)
    }

    get circumference(){
        return (2 * this._radius) * π
        }

    get diameter(){
    return this._radius * 2
    }

    get area() {
    return π * this._radius^2
    }
    }
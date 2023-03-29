class Square extends Shape {
    constructor(width, height) {
    super(width, height)
    }
    get circumference(){
        return (this._width + this._height) * 2
    }
    get area() {
    return this._width * this._height
    }
    }
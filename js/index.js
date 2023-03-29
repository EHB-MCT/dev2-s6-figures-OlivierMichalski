"use strict";
import Figure from './Figure.js';
import Circle from './Circle.js';
import Rectangle from './Rectangle.js';
import Square from './Square.js';

const form = {
    changeSelect(e) {

    },
    init() {
        console.log('Form init!');

      //  const r = new Circle(15);
   // console.log (r.area);

   const a = new Rectangle(5, 2);
    console.log(a.area);
    
    },
    inputElementsWithLabel(label, id) {

    },
    submitForm(e) {

    }
};

form.init();
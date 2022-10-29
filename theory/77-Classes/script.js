'use strict';

class Rectangle {
  constructor(height, width) {
     this.height = height;
     this.width = width;
  }

  calcArea() {
    return this.height * this.width;
  }
}

class ColoredRectangleWithText extends Rectangle{
  constructor (height, width, text, bgColor) {
    super (height, width); //call the same that we had in the Parent
    this.text = text;
    this.bgColor = bgColor;
  }

  showMyProps() {
    console.log(`Text: ${this.text}, color ${this.bgColor}`); 
  }
}

// const square = new Rectangle(10, 10); //get variable which has one object and one function
// const long = new Rectangle(20, 100);

// console.log(square.calcArea(), long.calcArea());


//Клас title - різноманітні статті, які можуть бути на сайті. Пізніше сайт розростається і необхідно зробити статті під різними рубриками: для готування і машинобудування. КОжна стаття буде трохи кастомізуватися але при цьому вони всеодно будуть прототипом на основі якого буде щось створюватися. Зявляється ієрархія: головний клас title, далі розприділення на тематики які матимуть свої особливості, і далі від тематик пачкуємо окремі екземпляри. 

const div = new ColoredRectangleWithText(25, 10, 'Hello World', 'red');

div.showMyProps();
console.log(div.calcArea());
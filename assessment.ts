// rectangle properties
interface Rectangle {
  x1: number;
  x2: number;
  y1: number;
  y2: number;
}

class Calculation {
    
  private rec1: Rectangle;
  private rec2: Rectangle;

  constructor(rectangle1: Rectangle, rectangle2: Rectangle) {
    this.rec1 = rectangle1;
    this.rec2 = rectangle2;
  }

  calculateIntersaction = (): String => {

    // check the rectangles are intersacting or not
    let x1 = Math.max(this.rec1.x1, this.rec2.x1);
    let y1 = Math.max(this.rec1.y1, this.rec2.y1);
    let x2 = Math.min(this.rec1.x2, this.rec2.x2);
    let y2 = Math.min(this.rec1.y2, this.rec2.y2);

    if (x1 > x2 || y1 > y2) {
      return "No intersaction found";
    }

    // if rectangles are not intersacting then we got the points 
    let intersactionRect: Rectangle = {
      x1: x1,  // max of x1 point from 2 rectangles
      x2: x2, // min of x2 point from 2 rectangles
      y1: y2, // max of y point from 2 rectangles
      y2: y1, // min of y point from 2 rectangles
    };

    return `Intersaction Rectangle (x1, y1, x2, y2) is (${intersactionRect.x1}, ${intersactionRect.y1}, ${intersactionRect.x2}, ${intersactionRect.y2})`;
  };
}

// rectangle 1 cordinates
let rec1: Rectangle = {
    x1: 1,
    x2: 4,
    y1: 1,
    y2: 3
}

// rectangle 2 cordinates
let rec2: Rectangle = {
    x1: 2,
    x2: 5,
    y1: 2,
    y2: 4
}

// instance of class with constructor
const rectangle = new Calculation(rec1, rec2);

// call to the class method and store result in variable
const intersactionRectangle = rectangle.calculateIntersaction();

// print the result in console
console.log(intersactionRectangle);
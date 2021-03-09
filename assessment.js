var Calculation = /** @class */ (function () {
    function Calculation(rectangle1, rectangle2) {
        var _this = this;
        this.calculateIntersaction = function () {
            // check the rectangles are intersacting or not
            var x1 = Math.max(_this.rec1.x1, _this.rec2.x1);
            var y1 = Math.max(_this.rec1.y1, _this.rec2.y1);
            var x2 = Math.min(_this.rec1.x2, _this.rec2.x2);
            var y2 = Math.min(_this.rec1.y2, _this.rec2.y2);
            if (x1 > x2 || y1 > y2) {
                return "No intersaction found";
            }
            // if rectangles are not intersacting then we got the points 
            var intersactionRect = {
                x1: x1,
                x2: x2,
                y1: y2,
                y2: y1
            };
            return "Intersaction Rectangle (x1, y1, x2, y2) is (" + intersactionRect.x1 + ", " + intersactionRect.y1 + ", " + intersactionRect.x2 + ", " + intersactionRect.y2 + ")";
        };
        this.rec1 = rectangle1;
        this.rec2 = rectangle2;
    }
    return Calculation;
}());
// rectangle 1 cordinates
var rec1 = {
    x1: 1,
    x2: 4,
    y1: 1,
    y2: 3
};
// rectangle 2 cordinates
var rec2 = {
    x1: 2,
    x2: 5,
    y1: 2,
    y2: 4
};
// instance of class with constructor
var rectangle = new Calculation(rec1, rec2);
// call to the class method and store result in variable
var intersactionRectangle = rectangle.calculateIntersaction();
// print the result in console
console.log(intersactionRectangle);

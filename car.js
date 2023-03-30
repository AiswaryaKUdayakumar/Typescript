var MyCar = /** @class */ (function () {
    function MyCar(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.currentSpeed = 0;
    }
    MyCar.prototype.accelerate = function (speed) {
        this.currentSpeed += speed;
        console.log("The ".concat(this.year, " ").concat(this.make, " ").concat(this.model, " is now traveling at ").concat(this.currentSpeed, " mph."));
    };
    MyCar.prototype.decelerate = function (speed) {
        this.currentSpeed -= speed;
        console.log("The ".concat(this.year, " ").concat(this.make, " ").concat(this.model, " is now traveling at ").concat(this.currentSpeed, " mph."));
    };
    MyCar.prototype.stop = function () {
        this.currentSpeed = 0;
        console.log("The ".concat(this.year, " ").concat(this.make, " ").concat(this.model, " has stopped."));
    };
    return MyCar;
}());
// Example usage
var myCar = new MyCar("Toyota", "Corolla", 2018);
myCar.accelerate(30);
myCar.decelerate(10);
myCar.accelerate(20);

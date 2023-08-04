class Vehicle{
    constructor(a, b, c){
        this.make = a;
        this.model = b;
        this.year = c;
    }
    honk(){
        return `Beep.`
    }
    toString(){
        return `This vehicle is a ${this.make} ${this.model} from ${this.year}.`
    }
}

class Car extends Vehicle{
    constructor(a,b,c){
    super(a, b, c);
    this.numWheels = 4
    }
}

class Motorcycle extends Vehicle{
    constructor(a,b,c){
        super(a,b,c);
        this.numWheels = 2;
    }
    revEngine(){
        return `VROOM!!!`
    }
}

class Garage{
    constructor(a){
        this.capacity = a;
        this.vehicle = [];
    }
    add(newVehicle){
    if(!(newVehicle instanceof Vehicle)){
        return `Only vehicles are allowed inhere!`;
    }
    if(this.vehicle.length >= this.capacity){
        return `Sorry, we're full.`
      }
        this.vehicle.push(newVehicle);
        return `Vehicle Added!`;
    }
}
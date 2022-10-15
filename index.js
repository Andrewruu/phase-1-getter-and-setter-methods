// Add your Circle class here

class Circle{

    constructor(radius){
        this.radius = radius;
    }
    get diameter(){
        return 2*this.radius
    }
    get circumference(){
        return Math.PI*this.diameter
    }
    get area(){
        return Math.PI*this.radius*this.radius
    }

    set diameter(diameter){
        this.radius = diameter/2
    }
    set circumference(circumference){
        this.radius = circumference/Math.PI/2
    }
    set area(area){
        this.radius = Math.sqrt(area/Math.PI)
    }
}

const x = new Circle(3)
console.log(x.diameter)
console.log(x.circumference)
console.log(x.area)
x.diameter = 8
console.log(x.radius)
x.circumference = 8
console.log(x.radius)
x.area = 8
console.log(x.radius)

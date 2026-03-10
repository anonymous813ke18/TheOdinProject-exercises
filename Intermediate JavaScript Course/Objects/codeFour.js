let animal = {
    eats: true,
    walk() {
        console.log("Animal Walk");
    }
};

let rabbit = {
    jumps: true
};

let longEar = {
    earLength: 10,
};

Object.setPrototypeOf(rabbit, animal);
Object.setPrototypeOf(longEar, rabbit);

console.log (rabbit.eats);
console.log (rabbit.jumps);

rabbit.walk();
longEar.walk();
alert(longEar.jumps);
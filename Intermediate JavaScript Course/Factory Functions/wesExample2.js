function createGreeting (greeting = "") {
    const myGreet = greeting.toUpperCase();

    return function (name) {
        return `${myGreet} ${name}`;
    };
}

const sayHello = createGreeting('Hello');
const sayHey = createGreeting('Hey');

console.log(sayHello('Hammad'));
console.log(sayHey('also Hammad'));
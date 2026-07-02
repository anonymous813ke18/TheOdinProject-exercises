const calculator = (() => {
    let lastResult;

    const add = (a, b) => {
        lastResult = a + b;
        return lastResult;
    }

    const subtract = (a, b) => {
        lastResult = a - b;
        return lastResult;
    }

    const multiply = (a, b) => {
        lastResult = a * b;
        return lastResult;
    }

    const divide = (a, b) => {
        lastResult = a / b;
        return lastResult;
    }

    const getLastResult = () => lastResult;

    return {add, subtract, multiply, divide, getLastResult};
})();

console.log(calculator.add(3, 5));
console.log(calculator.subtract(6, 2));
console.log(calculator.getLastResult());
console.log(calculator.multiply(14, 5534));
console.log(calculator.divide(16, 5));
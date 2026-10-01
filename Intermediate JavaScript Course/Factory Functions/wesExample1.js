function outer () {
    const outerVar = "Hey I am an outer var";

    function inner () {
        const innerVar = "Hey I am an inner var";
        console.log(outerVar);
        console.log(innerVar);
    }

    return inner;
}

const innerFn = outer()
innerFn()
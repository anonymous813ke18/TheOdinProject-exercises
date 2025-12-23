let arr = [1, 2, 3, 4, 5];

function sumOfTripledEvens(array) {
    // let filteredArray = array.filter((num) => num % 2 == 0); 
    // let mappedArray = filteredArray.map((num) => num * 3); 
    // let reducedArray = mappedArray.reduce((total, num) => total + num); 

    return array
        .filter((num) => num % 2 == 0)
        .map((num) => num * 3)
        .reduce((total, num) => total + num)
}

console.log(`Sum of Tripled Evens is: ${sumOfTripledEvens(arr)}`);
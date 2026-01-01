let arr = [5, 3, 8, 1];
console.log(arr);
filterRangeInPlace(arr, 1, 4);
console.log(arr);

function filterRange (arr, a, b) {
    return arr.filter((item) => (a <= item && item <= b))
}

function filterRangeInPlace (arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
        let val = arr[i];

        if (a > val || val > b){
            arr.splice(i, 1);
            i--
        }
    }
}

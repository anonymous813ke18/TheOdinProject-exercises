let head = {
    glasses: 1
};

let table = {
    pen: 3
};

let bed = {
    sheet: 1,
    pillow: 2
};

let pockets = {
    money: 2000,
};

Object.setPrototypeOf(table, head)
Object.setPrototypeOf(bed, table)
Object.setPrototypeOf(pockets, bed)

console.log(pockets.pen)
console.log(bed.glasses)
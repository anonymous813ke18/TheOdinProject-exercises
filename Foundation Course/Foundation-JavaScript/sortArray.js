let arr = [5, 2, 1, -10, 8];


// for (let i = 0; i < arr.length; i++) {      
//     for (let j = i + 1; j < arr.length; j++) {
//         if (arr[j] > arr[i]) {
//             let temp = arr[j];
//             arr[j] = arr[i];
//             arr[i] = temp;
//         }
//     }
// }

arr.sort((a, b) => b - a);
alert( arr ); // 8, 5, 2, 1, -10

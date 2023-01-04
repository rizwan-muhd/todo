const arr = [2, 3, 5, 2, 7, 6, 3, 4, 2, 3, 3, 3];
// var newarr = [];

const newarr = arr.filter((val, index) => {
  return arr.indexOf(val) !== index;
});

// for (let i = 0; i <= arr.length; i++) {
//   for (let j = i + 1; j <= arr.length; j++) {
//     if (arr[i] == arr[j]) {
//       newarr.push(arr[i]);

//       newarr.filter((val) => {
//         return val === arr[i];
//       });
//       //   break;
//     }
//   }
// }

// newarr.filter((val) => {
//   return
// });
console.log(arr);

console.log(newarr);

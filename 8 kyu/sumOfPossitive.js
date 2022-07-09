// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

// function positiveSum(arr) {
//   let sum = 0;
//   for(const arrayItem of arr){
//     console.log(arrayItem)
//     if(arrayItem > 0){
//       sum += arrayItem;
//     } else if (arrayItem == undefined){
//       return 0;
//     }
//   }
// 	return sum;
// }

function positiveSum(arr) {
    return arr.reduce((a, b) => a + (b > 0 ? b : 0), 0);
}

positiveSum([-1, 2, 3, 4, 5]);

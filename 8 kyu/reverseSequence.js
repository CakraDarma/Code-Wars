// const reverseSeq = n => {
//   let myArray = [];
//   for(n; n > 0; n--){
//     myArray.push(n);
//   }
//   return myArray;
// };
const reverseSeq = (n) => {
    return Array(n)
        .fill(0)
        .map((e, i) => n - i);
};

reverseSeq(5);

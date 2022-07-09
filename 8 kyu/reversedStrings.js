// function solution(str) {
//     let reverseString = '';
//     for (let i = str.length - 1; i >= 0; i--) {
//         // console.log(str[i]);
//         reverseString += str[i];
//     }
//     return reverseString;
// }

function solution(str) {
    return str.split('').reverse().join('');
}
solution('world');

// console.log("Hello I am coming from a separate JS file.")

/* 
  Array: Push Front
  Given array and an additional value, insert this value 
  at the beginning of the array. Do this without using any 
  built-in array methods except push. ex. arr.push(7)
*/

/* starting from the back and moving every element to the right by 1 removes the need to have a temp var for the value that is being overwritten */

function pushFront(arr, val) {

  for (let i = arr.length - 1; i >= 0 ; i--) {
    arr[i + 1] = arr[i];
  //  arr[1] = arr[0]
  //  arr[1] = 37
  }
  arr[0] = val;
  return arr;
}
 

//     0  1  2  3   4  5             0   1  2  3  4  5   6
arr = [37, 6, 5, 3, 10, 7] //   --> [16, 37, 6, 5, 3, 10, 7]

//    var       val
//    val        16
//      0  1  2  3  4   5  6
//    arr  [37, 6, 5, 3, 10, 10, 7] -> [37, 6, 5, 3, 3, 10, 7] -> [37, 6, 5, 5, 3, 10, 7]
//         [37, 6, 6, 5, 3, 10, 7]  -> [37, 37, 6, 5, 3, 10, 7] -> [16, 37, 6, 5, 3, 10, 7]
//    i    5 ->             4         -> 3                 ->    2
//          1 ---------------------> 0-------------------------> -1

pushFront(arr, 16);
console.log(arr)

// [37, 6, 5, 3, 10, 7, 37]

// Array
//           0  1  2  3  4
var nums = [3, 4, 5, 6, 7] // -> [3, 4, 5, 6, 7, 9]

nums.push(9)
nums.push(8)

console.log(typeof nums);

//  var user1 = ["Sadie", "Flick", "sflick@codingdojo.com"]

//  console.log(nums[2]) // 5

// Objects
//
var user1 = {
    first_name: "Sadie",
    last_name: "Flick",
    email: "sflick@codingdojo.com",
    married: true,
    enrolled: true,
    middle_name: "Valerio",
    updateGrade:
        function () {
            // do something
        }
}
user1.updateGrade();



//  console.log(user1["first_name"]) // Sadie
//  console.log(user1.last_name) // Flick
// //  console.log(user1.middle name)

// user1.birthday = "11-24";
// user1["birthday"] = "12-24"

// console.log(user1);

var students = [
    //   0
    { f_name: "Bennie", l_name: "Walker" },
    //   1
    { f_name: "Cleve", l_name: "Molette", },
    //   2 
    { f_name: "Elyzar", l_name: "Tria", }
]

// for (var i = 0; i < students.length; i++) {
//     console.log(students[i].f_name);
//     console.log(typeof students[i]);
// }

function countupper() {
    var num = 0;
    for (var i = 0; i <= 10; i++) {
        if (i % 2 == 0) {
            num = num + i;
            console.log(num);
            // console.log(num); //counts evens
        }
    }
    // console.log(i);
}
countupper();
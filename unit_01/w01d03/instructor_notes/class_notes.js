// console.log('jello')
          //   0  1   2              3
var myArray = [1, 5, 'hello world', [1, 2, 3, 4]]
// console.log(myArray)

// Arrays are indexed starting from zero
// log the fourth element OR the item with an index of 3
//           [1, 2, 3, 4] [0]
// console.log( myArray[3][0] )

var newArray = []
newArray[0] = 11

// () denote invocation

// we can add to an array with bracket notation myArray[0] = 5
// we can add to an array using the push method myArray.push(5) it does two things,
// it appends the data passed to the end of the array AND it returns the new length of the array
// we can remove the last item from the array using .pop() and it returns the item removed


var array = [1, 2, 3, 4, 5];

for (var i = 0; i < array.length; i++) {
  console.log(i);
}

// Overall behavior is we want to perform some action
// on each element of the array

//           0          1            2         3  < teams.length | 4 !< array.length
var teams = ['Bruins', 'Cal Bears', 'Ravens', 'Ducks'];

for (var i = 0; i < teams.length; i++) {
  console.log(teams[i]);
}

var nums = [1,2,3,4,5,6,7]

for (var i = 0; i < nums.length; i++) {
  console.log(i)
}

var names = ['Colin', 'Cal', 'Marc', 'Christine'];
for (var i = 0; i <= names.length; i++) {
  console.log(names[i]);
}

var nums = [1,2,3,4,5,6,7]

for (var i = 0; i < nums.length; i++) {
  console.log(nums[i] * 5)
}

for (var i = 0; i < 15; i++) {
  console.log(i * 5)
}


// ==================
// Arrays []
      //     key      value
var myObj = { item1: 'I am item 1', }

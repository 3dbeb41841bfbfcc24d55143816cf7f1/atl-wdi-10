var test = {
  hello: function(name) {
    console.log("Hi!, I'm " + name)
  }
}

// Examine the output of process.argv in the terminal $`node mta.js hello`.
console.log("I'm terminal args >>> \n", process.argv)

// There are four elements in the logged array:

// [ '/usr/local/Cellar/node/7.1.0/bin/node',
//  '/Users/colinhart/ga/classes/matey/wdi-remote-matey/unit_01/w01d05/student_labs/mta.js',
//  'hello',

// The first element is the version of node we're using and where it's saved.
// The second element is the path to the file we're running
// the third is the second argument we passed. First arg was mta.js second was a string hello

// We can then use the string hello process.argv[2] to call the function hello in the test object
// If we pass a third argument to node, like a name, we can pass that as an argument to the hello function
// $`node mta.js hello Colin`

// Execute/Invoke the hello function in test using args passed from the terminal
test[process.argv[2]](process.argv[3])

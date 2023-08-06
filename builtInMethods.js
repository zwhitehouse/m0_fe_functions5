// SECTION 1: Calling methods on string or integer objects.
// Run each line of code below (either from this file or in dev tools).
// Then, in a comment, write 1-2 sentences describing what is happening, using ALL the involved vocabulary terms you've learned in this lesson so far.

// EXAMPLE
// The toLowerCase() method is called on the string "Hello World"
// No arguments are passed; toLowerCase() has one clear job which is to lowercase all letters that exist in the String
// The return value is "hello world"
"Hello World".toLowerCase();


"Hello World".includes("Hello");
// The "includes" method is used on the string "Hello World" to see if the string includes the string "hello". This method will return a boolean value depending on whether the string is included or not. The boolean value would be true.

"Hello World".endsWith("Hello");
// This endWith method is used here on the string "Hello World" to see if the string ends with the smaller string "hello". This method will also return a boolean value depending on whether the string ends with "hello" or not. The boolean value would be false.

"Hello World".endsWith("rld");
// Just like the endsWith method above, it is checking to see if the string ends with the letters rld. It would return a boolean value of true.s


// SECTION 2: Calling methods on variables assigned to strings.
// Declare 2 variables assigned to strings.
// Call a different built-in JavaScript method on each of your variables. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// Include comments above each method call explaining the impact and return value of that method.

// EXAMPLE
// The startsWith() method is called on the firstName variable, which stores the string object "Jeff". 
// The startsWith() method returns true if the data in the firstName variable starts with the argument passed in.
// In this example, the return value is true, because "Jeff" does start with "J".
// The console.log() statements prints the return value of the startsWith() method (true) to the console.
var firstName = "Jeff";
console.log(firstName.startsWith("J"));

var lastName = 'Perkins';
console.log(lastName.endsWith('s'))
// The endsWith method is called on the lastName variable which stores the value 'Perkins'
// The endsWith method returns a boolean value based on whether the lastName variable ends with an 's'
// In this example, the return value would be true because the lastName variable does indeed end with an 's'

var horse = 'Jerry'
console.log(horse.includes('e'))
// The includes method is called on the horse variable which stores the value 'Jerry'
// The includes method returns a boolean value based on whether the horse variable includes the string 'e' within it
// In this example, the return value would be true because the horse variable does include the string 'e'



// SECTION 3: Calling methods on variables assigned to arrays.
// Declare 2 variables assigned to arrays.
// Call a different built-in JavaScript method on each of your variables. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// Include comments above each method call explaining the impact and return value of that method.

var array1 = [1, 3, 6, 9, 15]
var array2 = ['Harry', 'Ned', 'David',]

// This method call takes in whatever value you put within the parenthsis and adds it to the end of the array called. In this case, the numer '517' is going to be added to the end of the variable 'array1'
array1.push(517);

// This method call is similar to the one above, but instead takes in the value entered in the parenthsis and adds it to the very beginning of the array called. In this example the string 'Donna' will be put in the very first spot of the variable 'array2'
array2.unshift('Donna');

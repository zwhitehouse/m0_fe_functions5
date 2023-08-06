// Each example below has at least one opportunity for improvement.

// YOUR TASK:
  // Modify the code to make that improvement(s)
  // write a JS comment to explain what you changed, and why
  // make sure the code you submit WORKS - you can run this entire file 
    // using `node cleanUp.js` or copy and paste into a replit


// EX 1:
function askForName() { console.log("Hello, what is your name?") }

askForName();
// I added the semicolen to signal the end of the line of code.

// EX 2:
function addThreeNums(first, second, third) {
var sum = first + second + third
return sum;
      }

console.log(addThreeNums(1, 2, 3));
console.log(addThreeNums(4, 2, 7));
// Here I added the console.log function so the result would display on the console.


// EX 3:
function makeFreshPesto(){
  console.log("Buy ingredients: basil, parmesan, romano, olive oil, pine nuts, garlic, salt, pepper");
  console.log("Pulse basil and pine nuts");
  console.log("Add garlic and cheeses");
  console.log("Slowly pour in oil");
  console.log("Season");    
}

makeFreshPesto();
// I moved the curly bracket down to the line below the rest of the function. I also finished the word "function" so the code knows we are declaring a function.

//  EX 4:
function average(num1, num2) {
var sum = num1 + num2;
var avg = sum / 2;
return avg
}
// I arranged the curly brackets so they are holding the code block within them.s
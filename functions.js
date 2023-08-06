// Defining Our Own Functions
// For each exercise below, write the function according to the requirements. 
// Call each method at least twice and store the return value in a variable. 
// Use console.log() to see the return value in the console.

// 1: Write a function named greeting that returns a string with a general greeting. 

function greeting() {
    return ('Hello how are you today?');
}

var greet1 = greeting();
var greet2 = greeting();


// 2: Write a function named customGreeting that returns a greeting WITH a specific name.

function customGreeting(name) {
    return `Hey there how are you ${name}`
}

var greeting1 = customGreeting('Richard');
var greeting2 = customGreeting('Jennifer');

// 3: Write a function named greetPerson that takes in 3 strings, a first, middle, and last name, and returns a sentence with the full name.

function greetPerson(firstName, middleName, lastName) {
    return `hello ${firstName} ${middleName} ${lastName} how are you today?`
}

var fullNameGreet1 = greetPerson('Tiffany', 'Boe', 'Jingleson');
var fullNameGreet2 = greetPerson('John', 'Ruffle', 'Tiki')


// 4: Write a function named square that takes in one number, and returns the square of that number.
// BONUS: Print a sentence that interpolates the return value of your square function.

function square(number) {
    var sum = number*number
    return `The square of ${number} is ${sum}.`
}

var squared1 = square(5);
var squared2 = square(7);

// 5: Write a function named checkStock that satisfies the following interaction pattern:
// Hint: You will only write one checkStock function that checks the quantity and then prints the corresponding statement.

checkStock(4, "Coffee");
// => "Coffee is stocked"

checkStock(3, "Tortillas");
// => "Tortillas - running LOW"

checkStock(0, "Cheese");
// => "Cheese - OUT of stock!"

checkStock(1, "Salsa");
// => "Salsa - running LOW"

function checkStock(quantity, item) {
    if (quantity < 1) {
        console.log(`${item} is out of stock`);
    } else if (quantity < 4) {
        console.log(`${item} is running LOW`);
    } else {
        console.log(`${item} is at a good quantity`);
    }
}
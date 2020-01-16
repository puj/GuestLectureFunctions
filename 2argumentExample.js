// A: Single-argument example
// const sayHello = (name) => {
//     console.log(`Hello ${name},`);
// }
// sayHello("Van");
// sayHello("Nina");

// console.log("Hello Van,");
// console.log("Hello Nina,");
// console.log("Hello Ivett,");
// console.log("Hello Niclas");
// ...


// B: Say Hello to First and Last Name
const greet = (firstName, lastName) => {
    // Check if all parameters are valid
    // If arguments are not valid then print an error
    console.log(`Hello ${firstName} ${lastName}`);
}
greet("Van", "Taylor"); 


// C: Add two numbers together

// D: EXTRA: Rest parameters
const makeSentence = (...args) => {
    console.log(args.join(" "));
}
makeSentence("hi", "everyone", "I'm", "passing", "a lot", "of", "arguments");
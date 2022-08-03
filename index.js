console.log("working");

// JAVASCRIPT Interview Questions Day 1 -

// var a = 10;
// function add(num){
//     return num*num;
// }
// const store = add(10);
// console.log(a);
// console.log(store);

// Q1. Difference between “ == “ and “ === “ operators.

// "==" operator is a comparison operator that checks only the values of two variables. It returns the output in true or false.
// "===" operator is a comparison operator that checks both the values as well as the datatype of two variables. It returns the output in true or false.

// Q2. What is the spread operator?

// Spread Operators were first introduced in ES6 version. It is represented using (...) and it allows us to quickly copy all or part of an existing array or object into another array or object.

let arrOne = ["a","b","c"]
let arrTwo = [1,2,3]
console.log(...arrOne,...arrTwo);//a b c 1 2 3

// Q3. What are the differences between var, let and const?

// var,let and const are 3 keywords that are used to declare a variable in Javascript. var came in earlier version of ES whereas let and const came into effect from ES6 onwards

// let-
// 1. let can be declared on one line and initialise on the next line or within the same line itself.
// 2. Two variables having same names are not possible in let.
// 3. We can reassign or update the values of the variable which have already been initialised.
// 4. let is block scoped.
// 5. let doesn't support hoisting.

// Const-
// 1. Constant or Const can be declared and initialise on the same line itself.
// 2. Two variables having same names are not possible in const.
// 3. We cannot reassign or update the values of the variable which have already been initialised.
// 4. Const is block scoped.
// 5. Const doesn't support hoisting.

// Var-
// 1. var can be declared on one line and initialise on the next line.
// 2. Two variables having same names are possible in var.
// 3. We can reassign or update the values of the variable which have already been initialised.
// 4. var is global scoped.
// 5. var supports hoisting.

// Q4. What is execution context ?

// The browser's JavaScript engine then creates a special environment to handle the transformation and execution of this JavaScript code. This environment is known as the Execution Context.

// The Execution Context contains the code that's currently running, and everything that aids in its execution.

// During the Execution Context run-time, the specific code gets parsed by a parser, the variables and functions are stored in memory, executable byte-code gets generated, and the code gets executed.

// There are two kinds of Execution Context in JavaScript:

// Global Execution Context (GEC)
// Function Execution Context (FEC)

// 1. Memory Allocation Phase or the Creation Phase- Here,the variable will not be initialised, intead it will take default value as undefined.
// 2. Code Execution Phase or the Thread of Execution- Here, the variable will be assigned with its true values i.e, undefined will be replaced with the true values.

// Q5. What is creation phase and execution phase?

// 1. Memory Allocation Phase or the Creation Phase- Here,the variable will not be initialised, intead it will take default value as undefined.Some Memory is allocated to the variable.
// 2. Code Execution Phase or the Thread of Execution- Here, the variable will be assigned with its true values i.e, undefined will be replaced with the true values.

// Q6. What are closures? Give an example of closure.

// A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.

function outerFunction() {
    let a = 5;

    function innerFunction(){
        console.log(a);
    }
    innerFunction();
}
outerFunction();//5

//-----------------------------------------------------------------------------------------------------------------------------------------------


// // first class functions-

// function add(a, b) {
//     return a + b;
// }

// let sum = add;

// function average(a, b, fn) {
//     return fn(a, b) / 2;
// }

// let result = average(10, 20, sum);

// console.log(result);//15

// // call,bind and apply

// // objects-

// let user = {
//     name : "Shubham",
//     age : 23,
//     salary : 50000,
//     city : "Ahmedabad"
//     }
// console.log(user);

//------------------------

    // Day 2-

    // Q1. First Class Functions-

    // First Class Function : It is also called first class citizen function, there are three points
    // to remember are below:
    // 1. Function can be assigned to a variables.
    let myFunction = function(){
    console.log('This is function that is assigned to a variable');
    }
    myFunction();
    // 2. Function can be passed as an argument to other function.
    function printHello() {
    console.log("Hi I am function passed as an argument so I am a first class Function");
    }
    function executeFn(functionAsArgument) {
    functionAsArgument();
    }
    executeFn(printHello); // passing printHi function as an argument
    // 3.Function can be returned from other function
    function getFunction() {
    return function(){
    console.log("I am function returned from another function so i am a first-class function")
    }
    }
    let fn = getFunction();
    fn(); // this will call the returned function
    
    
    // Q2. CALL, BIND AND APPLY IN JAVASCRIPT------------------
    
    // These are just different ways of invoking or calling a function
    // When you are calling a function using any of these 3 then you dont have to define in the function that it will be taking obj as a parameter
    // It will assume that the first argument which is coming while calling the function will be an object only.
    //creating an object for the reference
    let user1 = {
    name : "Shubham",
    age : 23,
    salary : 50000,
    city : "Ahmedabad"
    }
    let userr2 = {
    name : "Vishnu",
    age : 21,
    salary : 60000,
    city : "Kashmir"
    }
    console.log(user1);
    console.log(userr2);
    
    // creating a function which will be using this object
    
    // When using call bind or apply
    
    function UserDetails (company, designation) {
    // console.log("Hello inside function", this);
    console.log(this.name + " is " + this.age + " years old. ", company, " ", designation);
    }
    // Call : In case of call each and every argument which is required to be passed to the function will be passed individually.
    
    UserDetails.call(user2, "Google", "Backend Developer");
    
    // Apply : In case of apply each and every argument which is required to be passed to the function will be passed inside an array .
    
    UserDetails.apply(user2, ["Amazon", " Full Stack Developer"]);
    
    // Bind : In case of bind, it will return you a new function. And this new function you can use anytime anywhere.
    
    const newFunction = UserDetails.bind(user);
    newFunction("Flipkart", "Data Scientist")
    
    
    // Q3. Objects in JavaScript-
    
    // Objects are the non-primitive datatypes and are use to store multiple data in the form of key value pairs.
    
    const ObjName = {
    name : 'Sairam',
    age : 24,
    }
    console.log('I am ' + ObjName.age + 'years old ')
    
    // Q4. Function Constructor-
    
    // Function constructor is kind of regular function to create multiple objects at a time. When creating function constructor, it is good practice to keep the first letter of the name, capital.
    // new keyword is mandatory to be used with function constructor.
    
    function Person(name, salary){
    this.name = name,
    this.salary = salary
    }
    const per1 = new Person('Baba', "8000AED");
    console.log(per1.name);
    
    // Q5. and Q6. What is prototype and Prototype chaining?
    
    function Person(name, age){
    this.name = name;
    this.age=age;
    this.salary = 100000;
    }
    let person1 = new Person("Anwar",23);
    let person2 = new Person("Shanth",45);
    console.log(person1);
    console.log(person2);
    
    // // in case, if you want to add other properties by using function constructor.
    
    per1.salary = 50000;
    console.log(per1);
    
    // // in case when you want to add properties inside the function constructor.
    
    Person.prototype.Nationality = "India";
    person1.Nationality = "American";
    console.log(person1.Nationality);
    
    // Q7. Example of inheritance using function constructor-
    
    function Animal(name, color){
        this.name = name;
        this.color = color;
    }
    function AnimalDescription(name, color, age, sound){
        Animal.call (this.name, this.color);
        this.age = age;
        this.sound = sound;
    }
    let Animal1 = new AnimalDescription('Bruno', 'Dark', 2, 'Barks')
    // console.log(Animal.prototype);
    console.log(Animal1);
    
    
    // Q8. CALL BACK: function which is passed as argument to another function.
    function output(callback){
        console.log("out");
        callback()
    };
    function input(){
        console.log("in")
    };
    output(input);
    
    //Why do we use it? ---The callbacks are needed because javascript is an event driven language. That means instead of waiting for a response javascript will keep executing while listening for other events. Let's take an example with the first function invoking an API call(simulated by setTimeout) and the next function which logs the message.
    
    function firstFunction() {
        // Simulate a code delay
        setTimeout(function () {
          console.log("First function called");
        }, 1000);
      }
      function secondFunction() {
        console.log("Second function called");
      }
      firstFunction();
      secondFunction();
    
    // Q9. SETTIMEOUT-
    
    // The setTimeout() method is used to call a function or evaluate an expression 'after' a specified number of milliseconds. For example, let's log a message after 2 seconds using setTimeout method,
    
    setTimeout(function () {
    console.log("Good Afternoon");
    }, 2000);

    // Q10. event loop and call stack-

    // Calling setTimeout triggers the execution of the web API, which adds the callback to the callback queue. The event loop then takes the callback from the queue and adds it to the stack as soon as it's empty.

    //Event loop
    //The JavaScript event loop takes the first call in the callback queue and adds it to the call stack as soon as it's empty.

    //JavaScript code is being run in a run-to-completion manner, meaning that if the call stack is currently executing some code, the event loop is blocked and won't add any calls from the queue until the stack is empty again.

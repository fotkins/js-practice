// varuable is declaring through the command let
// the second way is "const"
// it is possible to use letters, numbers, $ symbol and "_" underscore. 
// its not allowed to use numerals at the beginning of a variable
// use camel case style to name a variable
// its necessary to put semicolon at the and of every expression
// third way to declare of a variable is "var" (outdated way)
// caniuse.com - is way to check displaying commands in differents versions of browsers


let number = 5;
const leftBordeWidth = 1;

'use strict'; 


number = 10;
console.log(number);



alert ('message'); // "alert" is command to call modal window in browser with warning message
const result = confirm("are u here?"); // "confirm" - is calling alert modal window with question yes/no. 
//the answer will be written in variable "result" (can see in conslole)
console.log(result);

const answer = prompt("are u 18?", ""); //"prompt"  is calling alert modal window with question and user can insert his answer
console.log(answer);

//all information from user will return as string type
const scndAnswer = +prompt("are u 18?", "");
console.log(typeof(scndAnswer)); // "+" before "prompt" change string type to number

const answers = [];
answers[0] = prompt ("who?","");
answers[1] = prompt ("where?","");
answers[2] = prompt ("why?","");

console.log(answers);
document.write(answers);

//alert, comfirm, prompt - are commands only for browsers

//_______________________________________
//concatenation - is operation of joining characters strings end-to-end

const category = 'toys';
console.log(`https://toys.com/${category}/5`);

//backticks: ``

const user = "Ivan";
alert(`Hi, ${user}!`);

let decr = 10,
    incr = 10;

    ++incr; // prefix increment
    --decr; // prefix decrement

    incr++; // postfix increment
    decr--; // postfix decrement

    console.log(incr);
    console.log(decr);

    console.log(13%4);

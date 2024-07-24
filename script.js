// -Scopes- //
// Scopes are used to show where a certain variable or function is accessible. There are types of scopes like global scopes. Here's a practical example:

function lol() {

  var cat = "cute";
  // code within this function can use the variable cat

} // code here cant


// -Block scoped variables- //
// Block scoped variables are variables that are only accessible within their own block of code. Here is an example code snippet I have:

const isLoggedIn = true;

if (isLoggedIn == true) {
  const statusMessage = 'User is logged in.';
}

console.log(statusMessage);

// Uncaught ReferenceError: statusMessage is not defined



// -Global Variables- //
// Variables expressed outside of a block or function are Global Variables. They can be used anywhere in code. For example:
const hackClubFounder = 'zach';

function printFounderName() {
  console.log(hackClubFounder);
}

printFounderName();








// -To Create an Array- //
// An array is basically a list or collection of items in Javascript. A main way to create an array is to surround the items in square brackets. Here is an example:
const arcadePrizes = ['Frameworks', 'IPads', 'MacBooks', 'Stickers', 'Soldering Irons']


// -To Access an Array- //
// To access an array, you can use the index number of the item you want to access. The index number starts at zero, so the first item is assigned to index 0. Here is an example:
const planets = ['Mercury', 'Venus', 'Earth', 'Mars']
console.log(planets[0]) // this will print mercury


// -Update Elements- //
// To update an element in an array, you can use the index number of the element you want to update. Here is an example:
const OS = ['Windows', 'MacOS', 'Linux']
OS[1] = 'IOS'



// -Arrays with const and let- //
// Arrays with const and let are almost the same. The difference is that const variables cannot be updated, while variables using let can. Here is an example:
let rats = ['Cuddly', 'Scary', 'Disease Superspreaders']
rats[2] = 'Awesome'
// re-assigned


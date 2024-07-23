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
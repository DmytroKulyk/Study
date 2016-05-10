//Recursive function is the function that call itself!

var puzzlers = [
  function(a) { return 8 * a - 10; },
  function(a) { return (a - 3) * (a - 3) * (a - 3); },
  function(a) { return a * a + 4; },
  function(a) { return a % 5; }
];
var start = 2;

// build applyAndEmpty function expression here
var applyAndEmpty = function(input, queue){
  for(var i = 0; i<queue.length; i++){
  	console.log(queue.length)
  input = queue.shift()(input);
  console.log(input)
  }
  return input;
}; // return 27

// var applyAndEmpty = function(input, queue){
// 	var length = queue.length;
// 	console.log(length)
//   for(var i = 0; i<length; i++){
//   input = queue.shift()(input); 
//   }
//   return input;
// }; // return 3



console.log(applyAndEmpty(start, puzzlers));
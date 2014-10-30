while(true) {
  // request that user provides an equation
  var expr = prompt("enter an expression to evaluate: ('quit' will exit)");

  // if they gave us an empty string '' or quit then break out of the loop
  if(expr.length === 0 || expr === 'quit')
    break;

  // otherwise use the 'eval' function to run the expression
  var res = eval(expr);

  // log the resulting value
  console.log("result: " + res);
}

console.log("exited expression evaluator.");
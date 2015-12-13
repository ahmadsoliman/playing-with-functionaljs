var R = require('ramda');


// pure

var fact = 

function fact(x) {
  return (x <= 1) ? 1 : x * fact(x-1);
}

function calcAns(a) {
  return a.map(fact);
}

// non pure

var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var t = -1;
var a = [];
rl.prompt();
rl.on('line', function(line) {
  if(t === -1) t = line;
  else {
    a.push(line);
    if(!(--t)) {
      solve(a);
    }
  }
});

rl.write(''+fact(line));




/*
4
1 = 1
2 = 2
5 = 120
3 = 6
*/

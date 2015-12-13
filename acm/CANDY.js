var R = require('ramda');
var 

// pure



var solve = R.compose(R.sum);

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
  if(line == -1) {
    rl.close();
    return;
  }
  if(t === -1) t = line;
  else {
    a.push(line);
    if(!(--t)) {
      t = -1;
      rl.write(solve(a));
    }
  }
});

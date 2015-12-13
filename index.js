(function(){
  var _ = require('lodash');

  var curry = _.curry;

  mod = {};

  mod.match = curry(function(what, str) {
    return str.match(what);
  });

  mod.replace = curry(function(what, replacement, str){
    return str.replace(what, replacement);
  });

  mod.filter = curry(function(f, ary){
    return ary.filter(f);
  });

  mod.map = curry(function(f, ary){
    return ary.map(f);
  });

  mod.hasSpaces = mod.match(/\s+/g);

  mod.findSpaces = mod.filter(mod.hasSpaces);

  mod.noVowels = mod.replace(/[aeiou]/ig);

  mod.censored = mod.noVowels("*");



  module.exports = mod;

}());

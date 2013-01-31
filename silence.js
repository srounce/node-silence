var noop = function(){};

Object.keys(console).forEach(function(fn) {
  console[fn] = noop;
  console.log(fn);
});

console.dir(console);

module.exports = exports = console;

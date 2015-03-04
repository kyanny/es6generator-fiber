function* generatorFunc(a) {
  console.log(a);
  var b = yield 1;
  console.log(b);
  var c = yield 2;
  console.log(c);
}

var generator = generatorFunc('a');
console.log(generator.next('b'));
console.log(generator.next('c'));
console.log(generator.next('d'));

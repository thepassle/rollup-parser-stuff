import foo from './foo.js';
import { bar } from './bar.js';
// await import('./baz.js');

class Foo {
  bar;
}

console.log('hello', Foo, foo, bar);

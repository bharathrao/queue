# queue

Queue is a data structure which implements an array friendly interface

# Class Methods

```javascript
Queue.prototype.push(data)
Queue.prototype.pop()
Queue.prototype.unshift(data)
Queue.prototype.shift()
Queue.prototype.forEach(func, condition)
Queue.prototype.concat()
```

# Class Getters

```javascript
Queue.prototype.head
Queue.prototype.tail
```

# Example

```javascript

var Queue = require('queue.js')

```
# Create empty queue

```javascript

var q = new Queue();

console.log('q.head:', q.head); // should be undefined
console.log('q.tail:', q.tail); // should be undefined

```
# Instantiation

```javascript

var q1 = new Queue().push(1).push(2).push(3);

var q2 = new Queue();

[1,2,3].forEach(function(a) { q2.push(a) });

var q3 = new Queue();

[4,5,6].forEach(function(a) { q3.unshift(a) } );

```

# concatenate multiple queues in O(1) performance

```javascript
var allq = new Queue().concat(q1).concat(q2).concat(q3);
```

# peek

```javascript

console.log('allq.head', allq.head.data); // 1
console.log('allq.head.next', allq.head.next.data); // 2
console.log('allq.tail.prev.data', allq.tail.prev.data); // 5
console.log('allq.tail.data', allq.tail.data); // 4

```

# remove from queue

```javascript

console.log('tail and head', allq.pop(), allq.shift()); // 4, 1

```

# Traverse: Use this to implement map, filter, fold, etc.

```javascript

var i = 0;
allq.forEach(function(a) {
    console.log('Item at', i, 'is', a);
})

# iterate until condition met
var condition = function(a) { return a < 4; }

allq.forEach(function(a) {
  console.log('Must be < 4:', a);
}, condition);

# Create a map

var qmap = [];

allq.forEach(function(a) {
  qmap.push(a*a);
})

console.log('Squares', qmap);

```

Look at the test suite for more example

# How to contribute

This repository follows (more or less) the [Felix's Node.js Style Guide](http://nodeguide.com/style.html), your contribution must be consistent with this style.

The test suite is written on top of [visionmedia/mocha](http://visionmedia.github.com/mocha/) and it took hours of hard work. Please use the tests to check if your contribution is breaking some part of the library and add new tests for each new feature.

    ⚡ npm test


## License

_This software is released under the MIT license cited below_.

    Copyright (c) 2015 Bharath Rao, bharath.raoREMOVE_THIS@gmail.com. All Rights Reserved.

    Permission is hereby granted, free of charge, to any person
    obtaining a copy of this software and associated documentation
    files (the 'Software'), to deal in the Software without
    restriction, including without limitation the rights to use,
    copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the
    Software is furnished to do so, subject to the following
    conditions:

    The above copyright notice and this permission notice shall be
    included in all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
    EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
    OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
    NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
    HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
    WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
    FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
    OTHER DEALINGS IN THE SOFTWARE.

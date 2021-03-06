# Queue

Queue is a data structure which implements an array friendly interface

## Class Methods

```javascript
push(data)
pop()
unshift(data)
shift()
forEach(func, condition)
concat()
```

## Getters

```javascript
head    // points to head node. head.data points to queue data at head
tail    // same as above for tail
length  // number of items in queue
```

## Example

```javascript

var Queue = require('queue.js')

```
### Create empty queue

```javascript

var q = new Queue();

console.log('q.head:', q.head); // should be un defined
console.log('q.tail:', q.tail); // should be un defined

```
### Instantiation

```javascript

var q1 = new Queue().push(1).push(2).push(3);

var q2 = new Queue();

[1,2,3].forEach(function(a) { q2.push(a) });

var q3 = new Queue();

[4,5,6].forEach(function(a) { q3.unshift(a) } );

```

### concatenate multiple queues

```javascript
var allq = new Queue().concat(q1).concat(q2).concat(q3);
```

### peek

```javascript

console.log('allq.head',      allq.head.data);      // 1
console.log('allq.head.next', allq.head.next.data); // 2
console.log('allq.tail.prev', allq.tail.prev.data); // 5
console.log('allq.tail',      allq.tail.data);      // 4

```

## remove from queue

```javascript

// pop removes from end of queue, shift from start
console.log('tail and head', allq.pop(), allq.shift()); // 4, 1

```
### remove an arbitrary node

```javascript

var q4 = new Queue().push(1).push(2).push(3);
q4.remove(q4.head.next);

```
### forEach: General purpose iterator

```javascript

var i = 0;
allq.forEach(function(a) {
    console.log('Item at', i++, 'is', a);
})

```
### map using forEach. Use similarly for filter, fold, etc.

```javascript

var qmap = [];

allq.forEach(function(a) {
  qmap.push(a*a);
})

console.log('Squares', qmap);

```
### iterate until condition met

```javascript
var condition = function(a) { return a < 4; }

allq.forEach(function(a) {
  console.log('Must be < 4:', a);
}, condition);

```

Look at the test suite for more example

## How to contribute

This repository follows (more or less) the [Felix's Node.js Style Guide](http://nodeguide.com/style.html), your contribution must be consistent with this style.

The test suite is written on top of [visionmedia/mocha](http://mochajs.org/) and it took hours of hard work. Please use the tests to check if your contribution is breaking some part of the library and add new tests for each new feature.

    ⚡ npm test


## License

_This software is released under the MIT license cited below_.

    Copyright (c) 2015 Bharath Rao. All Rights Reserved.

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

module.exports = function() {
  this.head = undefined;
  this.tail = undefined;
}

function Item(data, prev, next) {
  this.data = data;
  this.prev = prev;
  this.next = next;
}

module.exports.prototype.push = function(data) {
  this.add(new Item(data, this.tail, undefined));
  return this;
}

module.exports.prototype.pop = function() {
  return this.tail && this.remove(this.tail).data;
}

module.exports.prototype.shift = function() {
  return this.head && this.remove(this.head).data;
}

module.exports.prototype.unshift = function(data) {
  this.add(new Item(data, undefined, this.head));
  return this;
}

module.exports.prototype.add = function(item) {
  if(!item) return undefined;

  if(item.prev) item.prev.next = item;
  if(item.next) item.next.prev = item;

  if(item.prev == undefined) this.head = item;  // add before head
  if(item.next == undefined) this.tail = item;  // add to end

  return item;
}

module.exports.prototype.remove = function(item) {
  if(!item) return undefined;

  if(this.head == item) this.head = item.next;  // removing head
  if(this.tail == item) this.tail = item.prev;  // removing tail

  if(item.prev) item.prev.next = item.next;
  if(item.next) item.next.prev = item.prev;

  return item;
}

module.exports.prototype.concat = function(queue) {
  this.tail.next = queue.head;
  queue.head.prev = this.tail;
  this.tail = queue.tail;
}

// Use this to implement sort, insert, filter, take, drop, fold, map
module.exports.prototype.forEach = function(func, condition) {
  for(var current = this.head; current; current = current.next) {
    if(condition && !condition(current.data)) break;
    func(current.data);
  }
}

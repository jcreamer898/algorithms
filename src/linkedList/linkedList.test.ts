import assert from 'assert';
import { LinkedList } from '.';

const list = new LinkedList<string>();

list.append('hello there')
    .append('hello again')
    .append('one more for good measure');

assert.equal(list.head.value, 'hello there');
assert.equal(list.head.next.value, 'hello again');
assert.equal(list.tail.value, 'one more for good measure');

list.append('oh heck why not');

assert.equal(list.tail.value, 'oh heck why not');

list.prepend('put this at the beginning');

assert.equal(list.head.value, 'put this at the beginning');
assert.equal(list.head.next.value, 'hello there');

const node = list.search('hello again');
const nope = list.search('not in the list');

assert.equal(node.value, 'hello again');
assert.equal(nope, null);

const deleted = list.deleteHead();

assert.equal(deleted.value, 'put this at the beginning');

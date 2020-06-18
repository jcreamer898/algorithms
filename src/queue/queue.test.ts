import assert from 'assert';
import { LinkedList } from "../linkedList";
import { Queue } from "./";

const q = new Queue(new LinkedList<string>());

q.enqueue('one');
q.enqueue('two');
q.enqueue('three');

assert.equal(q.peak(), 'one');

const removed = q.dequeue();
assert.equal(removed, 'one');

const nextRemoved = q.dequeue();
assert.equal(nextRemoved, 'two');
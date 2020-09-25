import assert from 'assert';
import { LRU } from './lru';

const cache = new LRU<string>(5);

cache.set({ key: 'foo', value: 'bar' });
cache.set({ key: 'bar', value: 'foo' });
cache.set({ key: 'baz', value: 'bazinga' });
cache.set({ key: 'bazinga', value: 'baz' });

const node = cache.get('baz');

assert.equal(node.value, 'bazinga');
assert.equal(cache.size, 4);
assert.equal(cache.items.head.value.key, 'baz');

const nowNode = cache.get('foo');
assert.equal(nowNode.key, 'foo');
assert.equal(nowNode.value, 'bar');
assert.equal(cache.items.head.value.key, 'foo');

cache.set({ key: 'abc123', value: 'my value' });
assert.equal(cache.items.head.value.key, 'abc123');
assert.equal(cache.size, 5);

cache.set({ key: 'abc456', value: 'my last value' });
assert.equal(cache.size, 5);
assert.equal(cache.items.head.value.key, 'abc456');
assert.equal(cache.cache.has('bar'), false);
assert.equal(cache.cache.get('abc456').value.value, 'my last value')
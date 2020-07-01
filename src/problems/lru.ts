import { DoublyLinkedList } from '../doublyLinkedList/doublyLinkedList';
import { DoublyLinkedListNode } from '../doublyLinkedList/doublyLinkedListNode';

export interface CacheItem<T> {
    key: string;
    value: T;
}

export class LRU<ValueType> {
    limit: number = 10;
    size: number = 0;
    items: DoublyLinkedList<CacheItem<ValueType>>;
    cache: Map<string, DoublyLinkedListNode<CacheItem<ValueType>>> = new Map();

    constructor() {
        this.items = new DoublyLinkedList<CacheItem<ValueType>>();
    }

    set(item: CacheItem<ValueType>) {
        if (this.items.count > this.limit) {
            this.items.deleteTail();
        }

        this.items.prepend(item);
        this.cache.set(item.key, this.items.head);
        this.size += 1;
    }

    get(key: string) {
        if (this.cache.has(key)) {
            const node = this.cache.get(key);

            this.remove(key);
            this.set(node.value);

            return node.value;
        }
    }

    remove(key: string) {
        this.items.delete((node) => node.value.key === key);
        this.cache.delete(key);
        this.size -= 1;
    }
}

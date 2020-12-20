class LRUCache {
    capacity: number;
    cache: Map<number, number> = new Map();

    constructor(capacity: number) {
        this.capacity = capacity;
    }

    get(key: number): number {
        if (this.cache.has(key)) {
            const value = this.cache.get(key);

            this.cache.delete(key);
            this.cache.set(key, value);

            return value;
        }

        return -1;
    }

    put(key: number, value: number): void {
        if (this.cache.has(key)) {
            this.cache.delete(key);
        }

        this.cache.set(key, value);

        if (this.cache.size > this.capacity) {
            this.evict();
        }
    }

    evict() {
        const keys = this.cache.keys();
        this.cache.delete(keys.next().value);
    }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

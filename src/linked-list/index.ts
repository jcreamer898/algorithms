export class LinkedListNode<T> {
    value: T;
    next: LinkedListNode<T>;

    constructor(value: T, next: LinkedListNode<T> = null) {
        this.value = value;
        this.next = next;
    }
}

export class LinkedList<T> {
    head: LinkedListNode<T>;
    tail: LinkedListNode<T>;

    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(value) {
        const node = new LinkedListNode(value)
        
        if (!this.head) {
            this.head = node;
            this.tail = node;

            return this;
        }

        this.tail.next = node;
        this.tail = node;

        return this;
    }

    prepend(value) {
        const node = new LinkedListNode(value, this.head);

        this.head = node;
    }

    remove() {}

    search(value) {
        let current = this.head;

        while(current) {
            if (current.value === value) {
                return current;
            } else {
                current = current.next;
            }
        }

        return null;
    }
    traverse() {}
}

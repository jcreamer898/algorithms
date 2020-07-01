import { DoublyLinkedListNode } from './doublyLinkedListNode';

export class DoublyLinkedList<T> {
    count: number = 0;
    head: DoublyLinkedListNode<T> | null;
    tail: DoublyLinkedListNode<T> | null;

    append(value: T) {
        const node = new DoublyLinkedListNode<T>(value);
        this.count += 1;

        if (!this.head) {
            this.head = node;
            this.tail = node;

            return this;
        }

        this.tail.next = node;
        node.previous = this.tail;
        this.tail = node;

        return this;
    }

    prepend(value: T) {
        const node = new DoublyLinkedListNode<T>(value, this.head);
        this.count += 1;

        if (this.head) {
            this.head.previous = node;
        }

        this.head = node;

        if (!this.tail) {
            this.tail = node;
        }

        return this;
    }

    delete(comparatorFn: (node: DoublyLinkedListNode<T>) => boolean) {
        if (!this.head) {
            return null;
        }

        let deleted: DoublyLinkedListNode<T> = null;
        let current = this.head;

        while (current) {
            if (comparatorFn(current)) {
                deleted = current;
                this.count -= 1;

                if (deleted === this.head) {
                    this.head = deleted.next;

                    if (this.head) {
                        this.head.previous = null;
                    }

                    if (deleted === this.tail) {
                        this.tail = null;
                    }
                } else if (deleted === this.tail) {
                    this.tail = deleted.previous;
                    this.tail.next = null;
                } else {
                    const previous = deleted.previous;
                    const next = deleted.next;

                    previous.next = next;
                    next.previous = previous;
                }
            }

            current = current.next;
        }

        return deleted;
    }

    find(comparatorFn: (node: DoublyLinkedListNode<T>) => boolean) {
        if (!this.head) {
            return null;
        }

        let current = this.head;
        while (current) {
            if (comparatorFn(current)) {
                return current;
            }

            current = current.next;
        }
    }

    deleteTail() {
        if (!this.tail) {
            return null;
        }

        if (this.tail === this.head) {
            const deleted = this.tail;

            this.tail = null;
            this.head = null;

            return deleted;
        }

        const deleted = this.tail;
        this.tail = this.tail.previous;
        this.tail.next = null;

        return deleted;
    }
}

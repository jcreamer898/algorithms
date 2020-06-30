export class DoublyLinkedListNode<T> {
    value: T;
    previous: DoublyLinkedListNode<T>;
    next: DoublyLinkedListNode<T>;

    constructor(value, next = null, previous = null) {
        this.value = value;
        this.next = next;
        this.previous = previous;
    }
}

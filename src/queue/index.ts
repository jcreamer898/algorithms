import { LinkedList } from "../linkedList";

export class Queue<T> {
  list: LinkedList<T>;
  
  constructor(list: LinkedList<T>) {
    this.list = list;
  }

  enqueue(value) {
    this.list.append(value);
  }
  dequeue() {
    return this.list.deleteHead().value;
  }
  peak() {
    return this.list.head.value;
  }
}
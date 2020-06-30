import assert from 'assert';
import { DoublyLinkedList } from './doublyLinkedList';

const list = new DoublyLinkedList<string>();

list.append('Phillip Coulson');
list.append('Daisy Johnson');
list.append('Melinda May');
list.prepend('Alphonso Mackenzie');

assert.equal(list.count, 4);
assert.equal(list.head.value, 'Alphonso Mackenzie');

list.delete((node) => node.value === 'Melinda May');
assert.equal(list.count, 3);

const node = list.find((node) => node.value === 'Daisy Johnson');
assert.equal(node.value, 'Daisy Johnson');

class Agent {
    name: string;
    level: number;

    constructor(name: string, level: number) {
        this.name = name;
        this.level = 1;
    }
}

const listPeople = new DoublyLinkedList<Agent>();

listPeople.append(new Agent('Phillip Coulson', 10));
listPeople.append(new Agent('Melinda May', 7));
listPeople.append(new Agent('Daisy Johnson', 1));
listPeople.append(new Agent('Jemma Simmons', 5));

const daisy = listPeople.find((agent) => agent.value.name === 'Daisy Johnson');
assert.equal(daisy.value.name, 'Daisy Johnson');

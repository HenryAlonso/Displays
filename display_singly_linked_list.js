class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SLL {
    constructor() {
        this.head = null;
    }

    addFront(val) {
        let new_node = new Node(val);

        if(!this.head) {
            this.head = new_node;
            return this;
        }
        new_node.next = this.head;
        this.head = new_node;
        return this;
    }

    display() {
        let values = '';
        if(!this.head) {
            console.log(values);
            return;
        }

        let runner = this.head;

        while (runner != null) {
            values += runner.data
            if (runner.next) {
                values += ', '
            }
            runner = runner.next;
        }
        console.log(values);
        return;
    }
}

const SLL1 = new SLL();
console.log("Adding nodes to our list");
SLL1.addFront(10);
SLL1.addFront(20);
console.log(SLL1);

console.log('\n');

console.log("Display a string that contains all the values in our nodes");
SLL1.display();
console.log('\n');

SLL1.addFront(12.25);
SLL1.display();
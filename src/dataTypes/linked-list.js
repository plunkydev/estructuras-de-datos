class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    add(data) {
        let newNode = new Node(data)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.size++;
    }

    print() {
        if(!this.size) return null;
        let result = ''
        let current = this.head
        for (let i = 0; i < this.size; i++) {
            result += `[${current.data}] -> `
            if(!current.next) {
                result += 'null'
            }
            current = current.next
        }
        return result
    }
}

const list = new LinkedList();
for (let i = 1; i < 10; i++) {
    list.add(i)
}
console.log(list.print())
console.log(list)
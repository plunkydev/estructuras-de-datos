class Queue {
    constructor() {
        this.item = {};
        this.front = 0;
        this.end = 0;
    }

    enqueue(item) {
        this.item[this.end] = item;
        this.end++;
    }
}

export const queue = new Queue();
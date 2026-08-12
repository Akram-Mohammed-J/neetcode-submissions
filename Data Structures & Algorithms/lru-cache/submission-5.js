class Node {
    constructor(key, val) {
        this.key = key;
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    addToFront(node) {
        node.next = this.head;
        node.prev = null;
        if (this.head === null) {
            this.head = node;
            this.tail = node;
        } else {
            this.head.prev = node;
            this.head = node;
        }
    }

    removeFromEnd() {
        if (!this.tail) return null;
        let poppedNode = this.tail;
        this.tail = this.tail.prev;
        if (this.tail === null) {
            this.head = null;
        } else {
            this.tail.next = null;
        }
        poppedNode.prev = null;
        poppedNode.next = null;
        return poppedNode;
    }
    
    remove(node) {
        if (node === this.head) {
            this.head = node.next;
        }
        if (node === this.tail) {
            this.tail = node.prev;
        }
        if (node.prev !== null) {
            node.prev.next = node.next;
        }
        if (node.next !== null) {
            node.next.prev = node.prev;
        }
        node.prev = null;
        node.next = null;
    }

    printList() {
        let dummy = this.head;
        while (dummy !== null) {
            console.log(dummy.val);
            dummy = dummy.next;
        }
    }
}

class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.cache = new Map();
        this.lru = new DoublyLinkedList();
    }
    
    get(key) {
        if (this.cache.has(key)) {
            const node = this.cache.get(key);
            this.lru.remove(node); // remove the node from the current position and add it to the front
            this.lru.addToFront(node);
            return node.val;
        }
        return -1;
    }

    put(key, value) {
        if (this.cache.has(key)) {
            // if the key is already present
            const node = this.cache.get(key);
            node.val = value; // Update value
            this.lru.remove(node);
            this.lru.addToFront(node);
        } else {
            if (this.cache.size >= this.capacity) {
                let deletedNode = this.lru.removeFromEnd();
                if (deletedNode) {
                    this.cache.delete(deletedNode.key); // Fix: Delete by key, not value
                }
            }
            const newNode = new Node(key, value);
            this.lru.addToFront(newNode);
            this.cache.set(key, newNode);
        }
    }
}

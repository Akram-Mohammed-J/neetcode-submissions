class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.map = new Map();
        
        // Sentinel nodes — never hold real data, just simplify edge cases
        this.head = new Node(0, 0);
        this.tail = new Node(0, 0);
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }
    
    // Disconnect a node from its current position in the list
    removeNode(node) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
    }
    
    // Insert a node right after head (most recent position)
    addToFront(node) {
        node.next = this.head.next;
        node.prev = this.head;
        this.head.next.prev = node;
        this.head.next = node;
    }
    
    get(key) {
        if (!this.map.has(key)) return -1;
        
        const node = this.map.get(key);
        this.removeNode(node);   // unlink from current position
        this.addToFront(node);    // move to front (mark as recently used)
        return node.value;
    }
    
    put(key, value) {
        if (this.map.has(key)) {
            // Update existing key
            const node = this.map.get(key);
            node.value = value;
            this.removeNode(node);
            this.addToFront(node);
            return;
        }
        
        // New key
        const newNode = new Node(key, value);
        this.map.set(key, newNode);
        this.addToFront(newNode);
        
        // Evict LRU if over capacity
        if (this.map.size > this.capacity) {
            const lru = this.tail.prev;
            this.removeNode(lru);
            this.map.delete(lru.key);
        }
    }
}
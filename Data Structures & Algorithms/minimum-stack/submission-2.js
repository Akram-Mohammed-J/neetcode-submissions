class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    push(val) {
        this.stack.push(val);
        if (this.minStack.length === 0 || val <= this.minStack[this.minStack.length - 1]) {
            this.minStack.push(val);
        }
    }

    pop() {
        let removed = this.stack.pop();
        if (removed === this.minStack[this.minStack.length - 1]) {
            this.minStack.pop();
        }
    }

    top() {
        if (this.stack.length === 0) return null;
        return this.stack[this.stack.length - 1];
    }

    getMin() {
        return this.minStack[this.minStack.length - 1];
    }
}

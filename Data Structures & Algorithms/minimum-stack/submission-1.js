class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val);
        if (this.minStack.length === 0) {
            this.minStack.push(val);
        } else {
            let topElement = this.minStack[this.minStack.length - 1];
            let newMin = Math.min(topElement, val);

            this.minStack.push(newMin);
        }
    }

    /**
     * @return {void}
     */
    pop() {
        this.stack.pop();
        this.minStack.pop();
    }

    /**
     * @return {number}
     */
    top() {
        if (this.stack.length > 0) {
            let topElement = this.stack[this.stack.length - 1];
            return topElement;
        }
    }

    /**
     * @return {number}
     */
    getMin() {
        if (this.minStack.length > 0) {
            let topElement = this.minStack[this.minStack.length - 1];
            return topElement;
        }
    }
}

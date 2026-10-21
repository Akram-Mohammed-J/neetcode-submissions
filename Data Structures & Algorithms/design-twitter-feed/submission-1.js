class MaxHeap {
    constructor() {
        this.heap = [];
    }

    size() {
        return this.heap.length;
    }

    peek() {
        return this.heap[0];
    }

    push(value) {
        this.heap.push(value);

        let i = this.heap.length - 1;

        while (i > 0) {
            const parent = Math.floor((i - 1) / 2);

            if (this.heap[parent].time >= this.heap[i].time) {
                break;
            }

            [this.heap[parent], this.heap[i]] =
                [this.heap[i], this.heap[parent]];

            i = parent;
        }
    }

    pop() {
        if (this.heap.length === 0) {
            return null;
        }

        if (this.heap.length === 1) {
            return this.heap.pop();
        }

        const max = this.heap[0];

        this.heap[0] = this.heap.pop();

        let i = 0;

        while (true) {
            let largest = i;

            const left = 2 * i + 1;
            const right = 2 * i + 2;

            if (
                left < this.heap.length &&
                this.heap[left].time > this.heap[largest].time
            ) {
                largest = left;
            }

            if (
                right < this.heap.length &&
                this.heap[right].time > this.heap[largest].time
            ) {
                largest = right;
            }

            if (largest === i) {
                break;
            }

            [this.heap[i], this.heap[largest]] =
                [this.heap[largest], this.heap[i]];

            i = largest;
        }

        return max;
    }
}


class Twitter {
    constructor() {
        this.tweetMap = new Map();
        this.followMap = new Map();
        this.time = 0;
    }

    /**
     * @param {number} userId
     * @param {number} tweetId
     * @return {void}
     */
    postTweet(userId, tweetId) {
        if (!this.tweetMap.has(userId)) {
            this.tweetMap.set(userId, []);
        }

        this.tweetMap.get(userId).push({
            tweetId,
            time: this.time++
        });
    }

    /**
     * @param {number} userId
     * @return {number[]}
     */
    getNewsFeed(userId) {
        const heap = new MaxHeap();

        // Users whose tweets we need to consider
        const users = new Set();

        // Include user's own tweets
        users.add(userId);

        // Include followed users
        if (this.followMap.has(userId)) {
            for (const followeeId of this.followMap.get(userId)) {
                users.add(followeeId);
            }
        }

        /*
         * Put the latest tweet of every relevant user
         * into the MaxHeap.
         */
        for (const id of users) {
            if (!this.tweetMap.has(id)) {
                continue;
            }

            const tweets = this.tweetMap.get(id);

            const index = tweets.length - 1;

            heap.push({
                tweetId: tweets[index].tweetId,
                time: tweets[index].time,
                userId: id,
                index
            });
        }

        const result = [];

        /*
         * Every time we remove the newest tweet,
         * add that user's previous tweet to the heap.
         */
        while (heap.size() > 0 && result.length < 10) {
            const current = heap.pop();

            result.push(current.tweetId);

            const previousIndex = current.index - 1;

            if (previousIndex >= 0) {
                const previousTweet =
                    this.tweetMap.get(current.userId)[previousIndex];

                heap.push({
                    tweetId: previousTweet.tweetId,
                    time: previousTweet.time,
                    userId: current.userId,
                    index: previousIndex
                });
            }
        }

        return result;
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    follow(followerId, followeeId) {
        if (!this.followMap.has(followerId)) {
            this.followMap.set(followerId, new Set());
        }

        this.followMap.get(followerId).add(followeeId);
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    unfollow(followerId, followeeId) {
        if (this.followMap.has(followerId)) {
            this.followMap.get(followerId).delete(followeeId);
        }
    }
}
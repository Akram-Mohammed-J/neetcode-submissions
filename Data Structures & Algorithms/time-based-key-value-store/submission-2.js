class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if (!this.keyStore.has(key)) {
            this.keyStore.set(key, []);
        }
        this.keyStore.get(key).push([value, timestamp]);
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        let data = this.keyStore.get(key);
        if (!data) return "";
        let l = 0;
        let h = data.length -1;
        let result = ""

        while (l <= h) {
            let mid = Math.floor((l + h) / 2);
            let [value, time] = data[mid];
            if (time === timestamp) return value;
            if (timestamp > time) {
                result = value
                l = mid + 1;
            } else {
                h = mid - 1;
            }
           
        }
        return result;
    }
}

class Solution {
    /**
     * @param {number} n
     * @param {number[][]} flights
     * @param {number} src
     * @param {number} dst
     * @param {number} k
     * @return {number}
     */
    findCheapestPrice(n, flights, src, dst, k) {
        let price = new Array(n).fill(Infinity);
        price[src] = 0;
        for (let i = 0; i < k + 1; i++) {
            let temp = [...price];
            for (let flight of flights) {
                let [u, v, w] = flight;
                if (price[u] != Infinity && price[u] + w < temp[v]) {
                    temp[v] = price[u] + w;
                }
            }
            price = temp;
        }

        return price[dst] !== Infinity ? price[dst] : -1;
    }
}

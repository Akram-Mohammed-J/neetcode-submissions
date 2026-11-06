class Solution {
    findCheapestPrice(n, flights, src, dst, k) {
        let adjacencyList = new Map();
        for (let i = 0; i < n; i++) adjacencyList.set(i, []);
        for (const [u, v, w] of flights) {
            adjacencyList.get(u).push([v, w]);
        }

        let price = new Array(n).fill(Infinity);
        price[src] = 0;

        for (let i = 0; i < k + 1; i++) {
            let temp = [...price];   // snapshot -- this round can only use what LAST round already knew

            for (let u of adjacencyList.keys()) {
                if (price[u] === Infinity) continue;
                let edges = adjacencyList.get(u);
                for (let [v, w] of edges) {
                    let newPrice = price[u] + w;
                    if (newPrice < temp[v]) {
                        temp[v] = newPrice;
                    }
                }
            }

            price = temp;
        }

        return price[dst] !== Infinity ? price[dst] : -1;
    }
}
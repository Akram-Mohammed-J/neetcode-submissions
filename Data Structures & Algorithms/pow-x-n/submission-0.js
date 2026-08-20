class Solution {
    /**
     * @param {number} x
     * @param {number} n
     * @return {number}
     */
    myPow(x, n) {
        function recursiveHelper(x, n) {
            if (n === 0) return 1; // base case: anything^0 = 1

            if (n < 0) {
                return 1 / recursiveHelper(x, -n); // negative exponent = reciprocal
            }

            const half = recursiveHelper(x, Math.floor(n / 2));
            if (n % 2 === 0) {
                return half * half; // x^n = (x^(n/2))^2 for even n
            } else {
                return half * half * x; // x^n = (x^(n/2))^2 * x for odd n
            }
        }
        return recursiveHelper(x, n);
    }
}

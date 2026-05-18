class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     * bruteforce
     */
    productExceptSelf(nums) {
    let zeroCount = 0;
    let productOfNonZeros = 1;
    
    for (const n of nums) {
        if (n === 0) zeroCount++;
        else productOfNonZeros *= n;
    }
    
    // Case 1: two or more zeros — every position has at least one zero on either side
    if (zeroCount >= 2) {
        return new Array(nums.length).fill(0);
    }
    
    // Case 2: exactly one zero — only the zero's position gets the non-zero product;
    //         everywhere else has the zero somewhere on its side
    if (zeroCount === 1) {
        return nums.map(n => n === 0 ? productOfNonZeros : 0);
    }
    
    // Case 3: no zeros — safe to divide
    const totalProduct = productOfNonZeros;
    return nums.map(n => totalProduct / n);
}
}

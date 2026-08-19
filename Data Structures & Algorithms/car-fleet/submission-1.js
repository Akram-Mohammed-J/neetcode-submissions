class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let pairs = position.map((p, i) => {
            return [p, speed[i]];
        });
       
        pairs.sort((a, b) => {
            return  b[0] - a[0];
        });
       let stack  = []
       
       for(let i = 0; i< pairs.length; i++) {
        let [p, s] = pairs[i]
        let time =  (target - p) / s
        stack.push(time)
        if(stack.length >=2 && stack[stack.length -1] <= stack[stack.length -2] ) {
            stack.pop()
        }
       }
       return stack.length
    }
}

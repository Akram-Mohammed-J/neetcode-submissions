class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encode = "";
        for (let str of strs) {
            encode += str.length + "#" + str;
        }
        return encode;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        console.log(`Input: "${str}"\n`);

        const res = [];
        let i = 0;
        let step = 1;

        while (i < str.length) {
            console.log(`--- Step ${step} ---`);
            console.log(`i = ${i}  (start looking here)`);

            // 1. Find the next '#' starting from position i
            const j = str.indexOf("#", i);
            console.log(`j = ${j}  (position of next '#')`);

            // 2. The chars between i and j are the length number
            const lengthStr = str.substring(i, j);
            const length = parseInt(lengthStr);
            console.log(`length text = "${lengthStr}"  →  length = ${length}`);

            // 3. The actual string starts at j+1 and is `length` chars long
            const word = str.substring(j + 1, j + 1 + length);
            console.log(`word = str.substring(${j + 1}, ${j + 1 + length}) = "${word}"`);

            res.push(word);

            // 4. Move i past the word we just read
            i = j + 1 + length;

            step++;
        }

        return res;
    }
}

class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @param {string} s3
     * @return {boolean}
     */
    isInterleave(s1, s2, s3) {
        const m = s1.length;
        const n = s2.length;

        // If s3 isn't even the right LENGTH to contain every character of
        // s1 and s2, there's no point checking anything else -- it's a no.
        if (s3.length != m + n) {
            return false;
        }

        // Think of dp[i][j] as answering one yes/no question:
        // "If I've already used the first i letters of s1 and the first
        //  j letters of s2 (mixed together in SOME order), have I managed
        //  to build the first (i+j) letters of s3 correctly so far?"
        //
        // We start every cell at "no" (false), and only flip specific
        // cells to "yes" (true) once we prove they actually work.
        const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(false));

        // The very first cell: "I haven't used ANY letters from s1 or s2
        // yet, and I haven't built ANY of s3 yet." That's trivially true --
        // there's nothing to check, nothing has gone wrong, we just haven't started.
        dp[0][0] = true;

        for (let i = 0; i < m + 1; i++) {
            for (let j = 0; j < n + 1; j++) {
                if (i === 0 && j === 0) continue; // already handled above, skip it

                // Picture the very last letter we just placed into s3.
                // It came from EITHER s1 or s2 -- never both. So we ask
                // two separate "what if" questions and see if either one works out.

                // What if that last letter came from s1?
                // For that to make sense:
                //   1) we actually HAVE a letter left in s1 to use (i > 0)
                //   2) that letter matches what s3 needs right here
                //   3) and -- importantly -- everything BEFORE this letter
                //      was already working out fine (dp[i-1][j] was true)
                let fromS1 = i > 0 && dp[i - 1][j] && s1[i - 1] === s3[i + j - 1];

                // What if, instead, that last letter came from s2?
                // Same three checks, just using s2 this time.
                let fromS2 = j > 0 && dp[i][j - 1] && s2[j - 1] === s3[i + j - 1];

                // If EITHER story checks out, then yes, this cell works too.
                // It doesn't matter which one is true -- one success is enough.
                dp[i][j] = fromS1 || fromS2;
            }
        }

        // By the time we reach the bottom-right corner, we've used EVERY
        // letter of s1 and EVERY letter of s2. If that cell says "true",
        // it means we successfully built the ENTIRE string s3 along the way.
        return dp[m][n];
    }
}
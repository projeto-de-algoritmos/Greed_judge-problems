/*
Leetcode - Best Time to Buy and Sell Stock IV

Problem Description: https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv
Submission: https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/submissions/879185343/
*/

var maxProfit = function(k, prices) {
    const pb = Array.from({ length: k+1 }, () => -Infinity);
    const ps = Array.from({ length: k+1 }, () => 0);

    for (let i = 0; i < prices.length; i++) {
        for (let j = 1; j <= k; j++) {
            pb[j] = Math.max(pb[j], ps[j-1] - prices[i]);
            ps[j] = Math.max(ps[j], pb[j]   + prices[i]);
        }
    }
    
    return ps[k];
};
/*
Leetcode - Best Time to Buy and Sell Stock III

Problem Description: https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii
Submission: https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/submissions/879180075/
*/

var maxProfit = function(prices) {
    const { min, max } = Math;

    return prices.reduce((p, c) => {
        const fc = min(p.fc, c);
        const fp = max(p.fp, c - fc);
        const sc = min(p.sc, c - fp);
        const sp = max(p.sp, c - sc);
        return { fc, fp, sc, sp }
    }, { fc: Infinity, sc: Infinity, fp: 0, sp: 0 }).sp;
};
/*
Leetcode - Best Time to Buy and Sell Stock II

https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/
*/

var maxProfit = function(prices) {
  return prices.reduce((p, c, i, a) => {
    const pr = a[i+1] - c;
    return p + (pr > 0 ? pr : 0);
  }, 0);
}

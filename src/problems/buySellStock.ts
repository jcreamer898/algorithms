// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/solution/

function maxProfit(prices: number[]): number {
    let min = Number.MAX_SAFE_INTEGER;
    let max = 0;
    
    for (let i = 0; i < prices.length; i ++) {
        min = Math.min(min, prices[i]);
        max = Math.max(max, prices[i] - min);
    }
    
    return max;
};
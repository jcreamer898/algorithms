// https://leetcode.com/problems/two-sum/solution/

function twoSum(nums: number[], target: number): number[] {
    let numsMap = new Map();

    nums.forEach((num, i) => {
        numsMap.set(num, i);
    });

    for (let i = 0; i < nums.length; i += 1) {
        const diff = target - nums[i];
        let complementIndex = numsMap.get(diff);

        if (numsMap.has(diff) && complementIndex !== i) {
            return [i, complementIndex];
        }
    }

    return [];
}

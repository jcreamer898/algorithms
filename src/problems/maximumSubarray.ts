// https://leetcode.com/problems/maximum-subarray/solution/

/*
[-2,1,-3,4,-1,2,1,-5,4]
[-2,1,-3,4] [-1,2,1,-5,4]

*/

// function maxSubArray(nums: number[]): number {
//     let maximum = nums[0];
//     let size = nums.length;
//     let sum = nums[0];
    
//     for (let i = 1; i < size; i++) {
//         sum = Math.max(nums[i], nums[i] + sum);
//         maximum = Math.max(sum, maximum);
//     }
    
//     return maximum;
// }

function maxSubArray(initial: number[]): number {
    const findMax = (nums) => {
      if (nums.length === 1) {
          return nums[0];
      }
        
      if (nums.length === 0) {
          return -Infinity;
      }
        
      let length = nums.length - 1;
      let mid = Math.floor(length / 2);
      let leftMax = 0, rightMax = 0;

      let leftMaxSub = findMax(nums.slice(0, mid));
      let rightMaxSub = findMax(nums.slice(mid + 1, length + 1));
      
        
      let sum = 0;
      for (let i = mid - 1; i >= 0; i--) {
          sum += nums[i];
          leftMax = Math.max(leftMax, sum);
      }
        
      sum = 0;
      for (let i = mid + 1; i <= length; i++) {
          sum += nums[i];
          rightMax = Math.max(rightMax, sum);
      }  
      
        
        
      return Math.max(leftMax + nums[mid] + rightMax, leftMaxSub, rightMaxSub);
  };

  return findMax(initial);
};
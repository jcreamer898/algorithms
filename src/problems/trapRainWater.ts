// https://leetcode.com/problems/trapping-rain-water/

/*

[0,1,0,2,1,0,1,3,2,1,2,1]
[0,1,2,2,2,2,2,3,3,3,3,3]
[3,3,3,3,3,3,3,3,2,2,2,1]
// */
function trap(height: number[]): number {
    const leftHeights = [];
    const rightHeights = [];
    
    leftHeights[0] = height[0];
    rightHeights[height.length - 1] = height[height.length -1];

    
    for (let i = 1; i < height.length; i++) {
        leftHeights[i] = Math.max(leftHeights[i - 1], height[i]);
    }
    
    for(let j = height.length -2; j >= 0; j--) {
        rightHeights[j] = Math.max(rightHeights[j + 1], height[j]);
    }
    
    let total = 0;
    for (let i = 1; i < height.length - 1; i+= 1) {
        total += Math.min(leftHeights[i], rightHeights[i]) - height[i];
    }
        
    return total;
};

// function trap(height: number[]): number {
//     let left = 0;
//     let right = height.length - 1;
//     let total = 0;
    
//     let leftMax = 0;
//     let rightMax = 0;
    
//     while (left < right) {
//         if (height[left] < height[right]) {
//             if (height[left] >= leftMax) {
//                 leftMax = height[left];
//             } else {
//                 total += leftMax - height[left];
//             }
            
//             ++left;
//         } else {
//             if (height[right] >= rightMax) {
//                 rightMax = height[right];
//             } else {
//                 total += rightMax - height[right];
//             }
            
//             --right
//         }
//     }
    
//     return total;
// }
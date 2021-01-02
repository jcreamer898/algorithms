// https://leetcode.com/problems/merge-sorted-array/solution/

/**
             M
nums1 = [1,2,3,5,6,0], m = 3
         N    
nums2 = [2,5,6]
*/

const merge = (nums1: number[], m: number, nums2: number[], n: number): void => {
    let indexM = m - 1;
    let indexN = n - 1;
    let indexLast = m + n - 1;

    while (indexN >= 0 && indexM >= 0) {
        if (nums2[indexN] >= nums1[indexM]) {
            nums1[indexLast] = nums2[indexN];
            indexN--;
        } else {
            nums1[indexLast] = nums1[indexM];
            indexM--;
        }

        indexLast--;
    }
    
    
    while(indexN >= 0) {
        nums1[indexLast] = nums2[indexN]
        indexLast--;
        indexN--;
    }
};
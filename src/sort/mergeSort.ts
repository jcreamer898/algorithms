// [5,2,3,7,3,9,6];
// [5,2,3,7] [3,9,6];
// [5,2][3,7][3][9,6]
// [5][2][3][7][3][9][6]
// [2,5] [3,7] [3] [6,9]

const merge = (left, right) => {
    const result = [];

    while (left.length && right.length) {
        const [leftItem] = left;
        const [rightItem] = right;

        result.push(leftItem < rightItem ? left.shift() : right.shift());
    }

    const sorted = result.concat(left.slice(), right.slice());

    return sorted;
};

export const mergeSort = (arr) => {
    if (arr.length <= 1) {
        return arr;
    }

    const mid = Math.floor(arr.length / 2);

    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    return merge(mergeSort(left), mergeSort(right));
};

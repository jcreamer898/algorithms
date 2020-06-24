export const quickSort = (arr) => {
    if (arr.length <= 1) {
        return arr;
    }

    const left = [];
    const right = [];

    const pivot = arr.shift();
    const center = [pivot];

    while (arr.length) {
        const current = arr.shift();

        if (current === center) {
            center.push(current);
        } else if (current < pivot) {
            left.push(current);
        } else {
            right.push(current);
        }
    }

    const leftSorted = quickSort(left);
    const rightSorted = quickSort(right);

    return leftSorted.concat(center, rightSorted);
};

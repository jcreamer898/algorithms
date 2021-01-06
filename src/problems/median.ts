import assert from 'assert';

const arr1 = [1, 3, 5];
const arr2 = [2, 4, 6];

const median = (array1, array2) => {
    if (!array1.length || !array2.length) {
        return null;
    }

    if (array1.length === 1) {
        const [first] = array1;
        const [second] = array2;
        return (first + second) / 2;
    }

    if (array1.length === 2) {
        const maxFirst = Math.max(array1[0], array2[0]);
        const minSecond = Math.min(
            array1[array1.length - 1],
            array2[array2.length - 1],
        );

        return (maxFirst + minSecond) / 2;
    }

    const isEven = array1.length % 2 === 0;

    const median1 = isEven
        ? array1[array1.length / 2 + 1] + array1[array1.length / 2] / 2
        : array1[array1.length / 2];
    const median2 = isEven
        ? array2[array2.length / 2 + 1] + array2[array2.length / 2] / 2
        : array2[array2.length / 2];

    if (median1 < median2) {
        return median(
            array1.slice(0, (array1.length - 1) / 2 + 1),
            array2.slice(array2.length / 2, array2.length - 1),
        );
    }
    return median(
        array2.slice(0, (array2.length - 1) / 2 + 1),
        array1.slice(array1.length / 2, array1.length - 1),
    );
};

assert.strictEqual(median(arr1, arr2), 3.5);

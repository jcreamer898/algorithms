const generate = (
    str: string,
    result: string[],
    left: number,
    right: number,
) => {
    if (!left && !right) {
        result.push(str);
        return result;
    }

    if (left > 0) {
        generate(str + '(', result, left - 1, right);
    }

    if (right > left) {
        generate(str + ')', result, left, right - 1);
    }
};

export const generateParenthesis = function (n: number) {
    const result = [];

    generate('', result, n, n);

    return result;
};

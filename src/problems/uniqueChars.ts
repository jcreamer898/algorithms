enum StringType {
    ASCII = 128,
    Unicode = 256,
}

export const isUniqueChars = (str: string, type = StringType.ASCII) => {
    if (str.length > type) {
        return false;
    }

    const chars = new Set();

    for (let i = 0; i < str.length; i += 1) {
        if (chars.has(str[i])) {
            return false;
        }

        chars.add(str[i]);
    }

    return true;
};

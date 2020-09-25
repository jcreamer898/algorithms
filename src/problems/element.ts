const findPath = (element) => {
    const path = [];
    let current = element;

    while (current.parentNode) {
        const index = current.parentNode.children.indexOf(current);
        path.push(index);
        current = current.parentNode;
    }

    return path;
}

const walkPath = (root, path) => {
    let current = root;

    while (path.length) {
        current = current.children[path.pop()];
    }

    return current;
}

const findElement = (root, element) => {
    const path = findPath(element);
    const foundIt = walkPath(root, path);

    return foundIt;
}
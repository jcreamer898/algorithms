import assert from 'assert';

const dfs = (grid, rowIndex, columnIndex) => {
    const rowNum = grid.length;
    const colNum = grid[0].length;

    if (
        rowIndex < 0 ||
        columnIndex < 0 ||
        rowIndex >= rowNum ||
        columnIndex >= colNum ||
        grid[rowIndex][columnIndex] === '0'
    ) {
        return;
    }

    grid[rowIndex][columnIndex] = '0';
    dfs(grid, rowIndex - 1, columnIndex);
    dfs(grid, rowIndex + 1, columnIndex);
    dfs(grid, rowIndex, columnIndex - 1);
    dfs(grid, rowIndex, columnIndex + 1);
};

function numIslands(grid: string[][]): number {
    const rowNum = grid.length;
    const colNum = grid[0].length;
    let islandNumber = 0;

    for (let rowIndex = 0; rowIndex < rowNum; rowIndex += 1) {
        for (let colIndex = 0; colIndex < colNum; colIndex += 1) {
            if (grid[rowIndex][colIndex] === '1') {
                islandNumber += 1;
                dfs(grid, rowIndex, colIndex);
            }
        }
    }

    return islandNumber;
}

const grid = [
    ['1', '1', '1', '1', '0'],
    ['1', '1', '0', '1', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '0', '0', '0'],
];

assert.strictEqual(numIslands(grid), 1);

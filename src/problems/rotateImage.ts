// https://leetcode.com/explore/interview/card/microsoft/30/array-and-strings/202/

/**
 Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix: number[][]): void {
    const rows = matrix.length;

    for (let i = 0; i < rows; i++) {
        for (let j = i; j < rows; j++) { 
            const tmp = matrix[j][i];
            matrix[j][i] = matrix[i][j];
            matrix[i][j] = tmp;
        }
    }

    let i = 0;
    let j = matrix.length - 1;
    let row = 0;

    for (let row = 0; row < matrix.length; row++) {
        while(i < j) {
            const first = matrix[row][i];
            matrix[row][i] = matrix[row][j];
            matrix[row][j] = first;
            
            i++;
            j--;
        }
        
        i = 0;
        j = matrix.length - 1;
    }
};
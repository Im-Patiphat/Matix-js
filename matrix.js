function createMatrix(rows, columns) {
    let matrix = new Array(rows);
    for (let i = 0; i < rows; i++) {
        matrix[i] = new Array(columns).fill(0);
    }
    return matrix;
}

function multiplyMatrices(matrixA, matrixB) {
    let rowsA = matrixA.length, columnsA = matrixA[0].length,
        rowsB = matrixB.length, columnsB = matrixB[0].length;
    let resultMatrix = createMatrix(rowsA, columnsB);

    if (columnsA !== rowsB) {
        return null; // ไม่สามารถคูณได้
    }

    for (let i = 0; i < rowsA; i++) {
        for (let j = 0; j < columnsB; j++) {
            for (let k = 0; k < columnsA; k++) {
                resultMatrix[i][j] += matrixA[i][k] * matrixB[k][j];
            }
        } 
    }
    return resultMatrix;
}

// ตัวอย่างการใช้งาน
// ข้อ 1
let matrixA1 = [[1, 2], [3, 4]];
let matrixB1 = [[2, 0], [1, 2]];
// ข้อ 2
let matrixA2 = [[1, 2,3], [3, 4,5]];
let matrixB2 = [[2],[1],[3]];
// ข้อ 3
let matrixA3 = [[5,2,9], [1,3,7]];
let matrixB3 = [[2,5], [1,7],[4,3]];

// ข้อ 1
console.log("ข้อ 1");
console.log(multiplyMatrices(matrixA1, matrixB1));
// ข้อ 2
console.log("ข้อ 2");
console.log(multiplyMatrices(matrixA2, matrixB2));
// ข้อ 3
console.log("ข้อ 3");
console.log(multiplyMatrices(matrixA3, matrixB3));
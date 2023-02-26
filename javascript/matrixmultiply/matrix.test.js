const matrix = require('./matrix.js');

test('mpy mat-a * mat-b should yield mat-c.', () =>{
    let matA = matrix.readMatrix("/opt/data/mat_a.csv");
    expect(matrix.matmpy(1,2)).toBe(3);
})

test('read-write-read roundtrip should be equal.', () => {
    let matA = matrix.readMatrix("/opt/data/mat_a.csv");
    matrix.writeMatrix(matA, "/tmp/test-matrix.csv");
    let matB = matrix.readMatrix("/tmp/test-matrix.csv");
    expect(matA).toEqual(matB);
})

test('matrix.multiply should produce acorrect result.', () => {
    let matA = matrix.readMatrix("/opt/data/mat_a.csv");
    let matB = matrix.readMatrix("/opt/data/mat_b.csv");
    let expected = matrix.readMatrix("/opt/data/mat_c.csv");
    let actual = matrix.multiply(matA, matB);
    expect(actual).toEqual(expected);
})

test('matrix.multiply should produce a correct result.', () => {
    let matD = matrix.readMatrix("/opt/data/mat_d.csv");
    let matE = matrix.readMatrix("/opt/data/mat_e.csv");
    let expected = matrix.readMatrix("/opt/data/mat_f.csv");
    let actual = matrix.multiply(matD, matE);
    expect(actual).toEqual(expected);
})
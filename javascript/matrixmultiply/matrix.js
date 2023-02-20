
// import { parse } from '@vanillaes/csv'
const fs = require('fs');
const csvParse = require('csv-parse/sync');
const csvGenerate = require('csv-generate/sync');

// import { parse } from '@vanillaes/csv'


function matmpy(a, b) {
    return a+b;
}

function readMatrix(filename){
    let rows = csvParse.parse(fs.readFileSync(filename));
    for(i=0;i<rows.length;i++){
        let row = rows[i];
        for(j=0;j<row.length;j++){
            rows[i][j] = parseFloat(rows[i][j]);
        }
    }
    return rows;
}

function matrixToString(matrix){
    return matrix.map(row => row.map(value => value.toString()).join(',')).join('\n');
}

function writeMatrix(matrix, filename){
    fs.writeFileSync(filename, matrixToString(matrix));
}


function multiply(matrixA, matrixB){
    let nrows = matrixA.length;
    let ncols = matrixB[0].length;
    let blen = matrixB.length;
    let result = new Array(nrows);
    
    // Loop through rows of matrix a
    for (let row_a = 0; row_a < nrows; row_a++)
    {
        // Initialize this element in the output array as an array itself
        result[row_a] = new Array(ncols);

        // Loop through columns of matrix b
        for (let col_b = 0; col_b < ncols; col_b++)
        {
            //Loop through rows of matrix b
            let tempsum = 0;
            for (let row_b = 0; row_b < blen; row_b++)
            {
                // Multiply and accumulate
                tempsum += matrixA[row_a][row_b] * matrixB[row_b][col_b];
                //result[row_a][col_b] += matrixA[row_a][row_b] * matrixB[row_b][col_b];  // Why doesnt this work?
            }

            result[row_a][col_b] = tempsum;
        }
    }

    return result;
}


/* References:
    * [fs / Node's filesystem lib](https://nodejs.org/dist/latest-v6.x/docs/api/fs.html)
    * [CSV Usage](https://github.com/adaltas/node-csv)
*/

module.exports = {matmpy, readMatrix, writeMatrix, multiply, matrixToString};
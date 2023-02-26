package main

import (
	"os"
	"testing"
)

func TestMatrixMpy(t *testing.T){
	mat_a := readMatrixOrPanic("/opt/data/mat_a.csv")
	mat_b := readMatrixOrPanic("/opt/data/mat_b.csv")
	// #mat_a.values[0][1] = 23
	expected := readMatrixOrPanic("/opt/data/mat_c.csv")
	mat_c,err := matrixMultiply(mat_a, mat_b)
	if err != nil {
		t.Errorf("Error: %v", err)
	}
	if cmpMatrix(mat_c, expected) == false{
		t.Errorf("mat_c=%v; expected=%v",mat_c, expected)
	}

}


func TestEndToEnd(t *testing.T){
	mat_a := readMatrixOrPanic("/opt/data/mat_a.csv")
	mat_b := readMatrixOrPanic("/opt/data/mat_b.csv")
	mat_c, err := matrixMultiply(mat_a, mat_b)
	panicOnError(err)
	tmp, err := os.Create("/tmp/actual.csv")
	panicOnError(err)
	writeMatrix(tmp, mat_c)
}


func TestMatrixMpyDEF(t *testing.T){
	mat_d := readMatrixOrPanic("/opt/data/mat_d.csv")
	mat_e := readMatrixOrPanic("/opt/data/mat_e.csv")
	
	expected := readMatrixOrPanic("/opt/data/mat_f.csv")
	mat_f,err := matrixMultiply(mat_d, mat_e)
	if err != nil {
		t.Errorf("Error: %v", err)
	}
	if cmpMatrix(mat_f, expected) == false{
		t.Errorf("mat_f=%v; expected=%v",mat_f, expected)
	}

}
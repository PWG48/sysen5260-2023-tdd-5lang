import pandas as pd

def mat_mpy(mat_a: pd.DataFrame, mat_b: pd.DataFrame) -> pd.DataFrame:
    """Return the mastrix-multiplication of mat_a and mat_b."""
    mat_a_cols = len(mat_a.columns)
    mat_b_rows = len(mat_b)
    data_zeros = [[0.0 for _ in range(len(mat_b.columns))] for _ in range(len(mat_a))]
    mat_c = pd.DataFrame(data_zeros)
    if mat_a_cols == mat_b_rows:
        for row_a in range(len(mat_a)):
            for col_b in range(len(mat_b.columns)):
                for row_b in range(mat_b_rows):
                    mat_c.iat[row_a,col_b] += mat_a.iat[row_a,row_b] * mat_b.iat[row_b,col_b]
        return mat_c
    raise Exception('Cannot multiply')


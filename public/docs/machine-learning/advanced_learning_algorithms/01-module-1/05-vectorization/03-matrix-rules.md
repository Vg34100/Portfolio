# General Matrix Multiplication Rules

* Matrix multiplication fundamentals:
 * A (2×3 matrix) with columns a₁, a₂, a₃
 * W (2×4 matrix) with columns w₁, w₂, w₃, w₄

* Computing A^T (transpose of A):
 * Take columns of A and "lay them on the side"
   * First column becomes first row (a₁^T)
   * Second column becomes second row (a₂^T)
   * Third column becomes third row (a₃^T)
 * A^T becomes a 3×2 matrix

* Visualizing matrix multiplication (A^T × W):
 * Columns of W affect corresponding columns of result Z
   * w₁ → first column of Z
   * w₂ → second column of Z
   * etc.
 * Rows of A^T affect corresponding rows of result Z
   * a₁^T → first row of Z
   * a₂^T → second row of Z
   * etc.

* Computing individual elements of Z:
 * Element at position (i,j) = dot product of:
   * Row i from A^T
   * Column j from W
 * Examples:
   * Z[1,1] = a₁^T · w₁ = (1×3)+(2×4) = 11
   * Z[3,2] = a₃^T · w₂ = (0.1×5)+(0.2×6) = 1.7
   * Z[2,3] = a₂^T · w₃ = (-1×7)+(-2×8) = -23

* Key requirements for matrix multiplication:
 * Number of columns in first matrix must equal number of rows in second matrix
   * "You can only take dot products between vectors that are the same length"
   * For A^T (3×2) × W (2×4): the middle dimensions (2) must match

 * Resulting matrix dimensions:
   * Z will have same number of rows as A^T (3)
   * Z will have same number of columns as W (4)
   * Z is a 3×4 matrix

> **Note:** Vectorized implementation makes neural networks "run blazingly much faster" than non-vectorized implementations

Matrix multiplication forms the foundation for efficient neural network computation, allowing operations to be performed in parallel rather than sequentially through loops. The key insight is that each element in the result matrix is computed through a systematic dot product operation.

# Matrix Multiplication Fundamentals

* Matrix = "just a block or 2D array of numbers"

## Vector Dot Products
* Building block for matrix multiplication
* Example: dot product between vectors [1,2] and [3,4]
 * z = 1×3 + 2×4 = 3+8 = 11
* General case: dot product between vectors a and w
 * Multiply corresponding elements, then sum all products

## Alternative Representation of Dot Products
* Can rewrite using transpose notation
 * Vector a = [1,2] as column vector
 * a^T (transpose) = [1,2] as row vector
 * z = a^T × w
   * "This is the same as taking the dot product between a and w"
 * "These are just two ways of writing the exact same computation"

## Vector-Matrix Multiplication
* Example: a = [1,2], a^T = [1,2], W = [3,4; 5,6]
* Computing z = a^T × W:
 * z will be a 1×2 matrix
 * First element: a^T × first column of W
   * 1×3 + 2×4 = 11
 * Second element: a^T × second column of W
   * 1×5 + 2×6 = 17
 * Result: z = [11,17]

## Matrix-Matrix Multiplication
* Generalizing from vector-matrix to matrix-matrix
* Example: A = [1,2; -1,-2], W = [3,4; 5,6]
* First find A^T:
 * "The way you transpose a matrix is you take the columns and you just lay the columns on the side"
 * A^T = [1,-1; 2,-2]

* Computing Z = A^T × W:
 * Let a₁, a₂ be columns of A
 * Let w₁, w₂ be columns of W
 * First row of Z = a₁^T × W
   * First element: a₁^T · w₁ = 1×3 + 2×4 = 11
   * Second element: a₁^T · w₂ = 1×5 + 2×6 = 17
 * Second row of Z = a₂^T × W
   * First element: a₂^T · w₁ = -1×3 + -2×4 = -11
   * Second element: a₂^T · w₂ = -1×5 + -2×6 = -17
 * Result: Z = [11,17; -11,-17]

> **Note:** Think of matrices in terms of their columns, and transposed matrices in terms of their rows

Matrix multiplication is a systematic process of computing dot products between rows of the first matrix and columns of the second matrix. This operation forms the foundation for efficient neural network implementations through vectorization.

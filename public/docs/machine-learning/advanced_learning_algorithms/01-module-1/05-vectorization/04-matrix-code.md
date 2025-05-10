# Vectorized Implementation of Neural Networks

* Matrix Multiplication in Code
 * Previous example: A^T × W = Z
   * Implementing in NumPy:
     * A^T = A.T (transpose function)
     * Z = np.matmul(AT, W)
     * Alternative syntax: Z = AT @ W (less clear)
     * "I find using np.matmul to be clearer"

* Vectorized Implementation of Forward Propagation
 * Example with coffee roasting features:
   * A^T = [200, 17] (input features in 1×2 matrix)
   * Stack parameters in columns to form W matrix
     * W = [1, -3, 5; 2, 4, 6] (2×3 matrix)
   * B = [-35, -531, -80] (bias parameters in 1×3 matrix)
   * Z = A^T × W + B = [165, -531, 900]
     * "Taking these feature values and multiplying that by the first column and then adding B to get 165"
     * Results in z^1_1, z^1_2, z^1_3 values

 * Applying activation function:
   * A = g(Z) = [1, 0, 1]
     * "Applies the sigmoid function to 165, to negative 531, and to 900"
     * Sigmoid(165) ≈ 1, Sigmoid(-531) ≈ 0, Sigmoid(900) ≈ 1

* Implementation in Code
 * A^T = np.array([[200, 17]]) (1×2 matrix)
 * W = <matrix values> (2×3 matrix)
 * B = <bias values> (1×3 matrix)
 * Forward propagation in one layer:
   ```
   def dense(A_in, W, b):
       Z = np.matmul(A_in, W) + b
       A_out = g(Z)
       return A_out
   ```

* TensorFlow Convention
 * Individual examples laid in rows in matrix X
 * "There is a convention in TensorFlow that individual examples are actually laid out in rows in the matrix X rather than in the matrix X transpose"
 * Slightly different variable name conventions from slides

> **Note:** "With just a few lines of code you can implement forward prop in the neural network and moreover, get a huge bonus because modern computers are very good at implementing matrix multiplications efficiently"

Vectorized implementation transforms neural network computation from slow loops to efficient matrix operations, allowing modern hardware to process data in parallel. This explains why deep learning frameworks can train large models so effectively.

# Data Representation in NumPy and TensorFlow

* TensorFlow and NumPy have inconsistent data representation
 * "Unfortunately there are some inconsistencies between how data is represented in NumPy and in TensorFlow"
 * Historical reason: NumPy created first, TensorFlow much later

* Matrices and Vectors Representation
 * Matrix dimensions: number of rows × number of columns
   * Example: 2×3 matrix (2 rows, 3 columns)
     * Code: `x = np.array([[1, 2, 3], [4, 5, 6]])`
   * Example: 4×2 matrix (4 rows, 2 columns)
 
 * Special matrices:
   * Row vector: 1×n matrix (1 row, multiple columns)
     * Example: `x = np.array([[200, 17]])` creates 1×2 matrix
   * Column vector: n×1 matrix (multiple rows, 1 column)
     * Example: `x = np.array([[200], [17]])` creates 2×1 matrix
 
 * Vector vs Matrix:
   * 1D vector: `x = np.array([200, 17])`
     * Single square bracket = 1D array (no rows/columns)
     * Used in Course 1 (linear/logistic regression)
   * 2D matrix: `x = np.array([[200, 17]])`
     * Double square brackets = 2D array (with rows/columns)
     * Used with TensorFlow (more computationally efficient)

* TensorFlow Data Format
 * Tensors: TensorFlow's way to store and compute matrices efficiently
   * "A tensor is a data type that the TensorFlow team had created in order to store and carry out computations on matrices efficiently"
 
 * Example outputs:
   * `a1` from first layer: TensorFlow tensor with shape (1,3)
     * Example: `tf.Tensor([[0.2, 0.7, 0.3]], shape=(1, 3), dtype=float32)`
   * `a2` from second layer: TensorFlow tensor with shape (1,1)
     * Example: `tf.Tensor([[0.8]], shape=(1, 1), dtype=float32)`
 
 * Converting between formats:
   * TensorFlow → NumPy: use `.numpy()`
     * Example: `a1.numpy()` converts tensor to NumPy array

> **Note:** "When you read the data back out you can keep it as a tensor or convert it back to a NumPy array."

TensorFlow and NumPy represent data differently due to their historical development. TensorFlow uses tensors (efficient matrix representations) while NumPy uses arrays, and you often need to convert between them when implementing neural networks.
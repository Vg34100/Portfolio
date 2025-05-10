# NumPy Implementation of Neural Networks

* Optional Lab: Building coffee roasting neural network using NumPy
 * Same network previously implemented in TensorFlow

* Dataset: Coffee roasting data
 * Features: Temperature (Celsius) and Duration (minutes)
 * Duration best kept between 12-15 minutes
 * Temperature should be between 175-260 degrees Celsius
 * "As the temperature rises, the duration should shrink"

* Data Normalization
 * Normalized using TensorFlow Keras layer
 * Before normalization:
   * Temperature: Max ~200-300, Min ~100
   * Duration: Max ~20, Min ~10
 * After normalization:
   * Temperature: Max ~2.0, Min ~-1.5
   * Duration: Max ~1.5, Min ~-1.5

* Network Architecture
 * Two layers with sigmoid activations
 * First layer: 3 units, Second layer: 1 unit

## NumPy Implementation

* Building Dense Layer Function:
 * Function signature: `my_dense(a_in, W, b)`
   * a_in: input activations (1 example)
   * W: weight matrix (n features × j units)
   * b: bias vector (j units)
   * Returns: a_out (j units)

 * Implementation:
   ```
   def my_dense(a_in, W, b):
       units = W.shape[1]
       a_out = np.zeros(units)
       for j in range(units):
           w = W[:,j]
           z = np.dot(w, a_in) + b[j]
           a_out[j] = g(z)
       return(a_out)
   ```
   * g = sigmoid function (defined externally)

* Sequential Model Function:
 * Combines multiple dense layers:
   ```
   def my_sequential(x, W1, b1, W2, b2):
       a1 = my_dense(x, W1, b1)
       a2 = my_dense(a1, W2, b2)
       return(a2)
   ```

* Prediction Function:
 * Processes multiple examples (entire matrix X):
   ```
   def my_predict(X, W1, b1, W2, b2):
       m = X.shape[0]
       p = np.zeros((m,1))
       for i in range(m):
           p[i,0] = my_sequential(X[i], W1, b1, W2, b2)
       return(p)
   ```

* Decision Making:
 * Apply threshold to probability outputs:
   * If prediction ≥ 0.5: classify as 1
   * If prediction < 0.5: classify as 0
 * Concise implementation: `yhat = (predictions >= 0.5).astype(int)`

* Visualization:
 * Left graph: Raw output probabilities with training data
 * Right graph: Decision boundaries after threshold
 * "This graph shows the operation of the whole network and is identical to the TensorFlow result"

> **Note:** This lab reveals the "fairly simple and familiar functions which make up a layer in a neural network."

The NumPy implementation demonstrates how neural networks fundamentally operate, using basic matrix operations and activation functions to transform inputs through layers. This low-level implementation matches the behavior of the TensorFlow version while providing deeper insight into neural network mechanics.

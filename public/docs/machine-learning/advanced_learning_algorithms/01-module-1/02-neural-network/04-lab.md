# Neural Networks with TensorFlow Lab

* Optional Lab explores inner workings of neurons/layers
 * Draws parallels to models from Course 1
   * Regression/linear model
   * Logistic model
 * Introduces **"TensorFlow and Keras"** implementation

* TensorFlow & Keras basics:
 * TensorFlow: Google's machine learning package
 * Keras: Framework integrated into TensorFlow 2.0
   * Creates simple, layer-centric interface
   * Course uses Keras interface

## Neuron without Activation - Regression/Linear Model

* Dataset: House prices (from Course 1)
 * X_train: size in 1000 square feet [1.0, 2.0]
 * Y_train: price in 1000s of dollars [300.0, 500.0]

* Regression implementation:
 * Function: f_w,b(x^(i)) = w·x^(i) + b
 * TensorFlow implementation:
   * `linear_layer = tf.keras.layers.Dense(units=1, activation='linear')`
   * Weights randomly initialized to small numbers
   * Bias defaults to zero
   * Can manually set weights: `linear_layer.set_weights([set_w, set_b])`
 * Verification:
   * TensorFlow prediction matches NumPy calculation
   * `prediction_tf = linear_layer(X_train)`
   * `prediction_np = np.dot(X_train, set_w) + set_b`

## Neuron with Sigmoid Activation

* Dataset: Binary classification example
 * X_train: [0,1,2,3,4,5]
 * Y_train: [0,0,0,1,1,1]

* Logistic Neuron implementation:
 * Function: f_w,b(x^(i)) = g(w·x^(i) + b) where g(x) = sigmoid(x)
 * TensorFlow Sequential model:
   ```
   model = Sequential([
       tf.keras.layers.Dense(1, input_dim=1, activation='sigmoid', name='L1')
   ])
   ```
 * Model properties:
   * One layer with one unit
   * Two parameters (w and b)
   * Can set weights manually: `logistic_layer.set_weights([set_w, set_b])`
 * Verification:
   * Model prediction matches sigmoid calculation
   * Visual confirmation with decision boundary plot
   * Shading reflects sigmoid output (0 to 1)

> **Note:** This lab demonstrates how neurons in neural networks are extensions of linear and logistic regression models from Course 1.

This lab bridges fundamental machine learning concepts with neural networks by showing how neurons implement regression and classification functionality. TensorFlow and Keras provide the framework to easily build these components into larger networks.

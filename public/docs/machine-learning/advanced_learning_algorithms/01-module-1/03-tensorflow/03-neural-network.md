# Building Neural Networks in TensorFlow

* TensorFlow provides a simpler way to build neural networks than previous methods
 * "This is also the last video on tensor flow for this week"
 * Will learn "a different way of building a neural network, that will be even a little bit simpler"

* Previous Forward Propagation Approach:
 * Initialize data X
 * Create Layer 1, compute a1
 * Create Layer 2, compute a2
 * "This was an explicit way of carrying out forward prop one layer of computation at the time"

* Sequential API - Simpler Approach:
 * Create Layer 1 and Layer 2
 * Use Sequential function to connect layers:
   * "Tell tensor flow that we would like it to take layer one and layer two and string them together"
   * `model = Sequential([layer1, layer2])`
 * TensorFlow "can do a lot of work for you" with Sequential framework

* Training a Neural Network:
 * Prepare data:
   * X as numpy array (features)
   * Y as 1D array (targets)
 * Two key functions:
   * `model.compile()` (parameters explained next week)
   * `model.fit(X, Y)` (tells TensorFlow to train the model)

* Inference with Trained Model:
 * `model.predict(X_new)` performs forward propagation
 * "This will output the corresponding value of a2 for you"

* Simplified Coding Convention:
 * Instead of creating separate layer variables:
   ```
   model = Sequential([
       Dense(units=3, activation='sigmoid'),
       Dense(units=1, activation='sigmoid')
   ])
   ```
 * "By convention we don't explicitly assign the two layers to two variables"
 * This compact form is common in TensorFlow code

* Digit Classification Example:
 * Same pattern applies to more complex models
 * Specify all layers (1, 2, 3) in Sequential function
 * Same compile, fit, and predict workflow

> **Note:** "I want you to understand how these algorithms work yourself so that if something goes wrong, you can think through for yourself"

TensorFlow's Sequential API provides a streamlined way to build neural networks by connecting layers and handling the forward propagation automatically. While it simplifies the code significantly, understanding the underlying computations remains important for effective troubleshooting and optimization.

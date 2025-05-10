# Building Complex Neural Networks

* Neural networks are built from layers that take vector inputs and output vector outputs
* Example of complex neural network:
  * Has 4 layers (not counting input layer)
    * Layers 1, 2, 3 are hidden layers
    * Layer 4 is output layer
    * Layer 0 is input layer (not counted in convention)
  * "By convention, when we say that a neural network has four layers, that includes all the hidden layers in the output layer, but we don't count the input layer"

* Layer 3 Computation Example (Third Hidden Layer):
  * Inputs: vector a^[2] (output from previous layer)
  * Outputs: vector a^[3]
  * For 3 neurons/hidden units:
    * Parameters: w₁^[3], b₁^[3], w₂^[3], b₂^[3], w₃^[3], b₃^[3]
    * Computes:
      * a₁^[3] = sigmoid(w₁^[3]·a^[2] + b₁^[3])
      * a₂^[3] = sigmoid(w₂^[3]·a^[2] + b₂^[3])
      * a₃^[3] = sigmoid(w₃^[3]·a^[2] + b₃^[3])
    * Output: vector [a₁^[3], a₂^[3], a₃^[3]]

* Notation Structure:
  * Superscript [l] denotes layer number
  * Subscript j denotes neuron/unit number
  * w^[l] and b^[l] are parameters for layer l
  * a^[l] are activations from layer l

* General Formula:
  * a_j^[l] = g(w_j^[l]·a^[l-1] + b_j^[l])
  * Where:
    * g is the **"activation function"** (sigmoid in this case)
    * a^[l-1] is output from previous layer
    * j is the neuron number

* Additional Notation:
  * Input vector X also named a^[0]
  * Makes formula consistent for first layer:
    * a^[1] = sigmoid(w^[1]·a^[0] + b^[1])
    * where a^[0] = X (input features)

> **Note:** The activation function g outputs activation values. Sigmoid is the only activation function shown so far, but others will be introduced later.

With this notation, you can compute activations for any layer in a neural network using the activations from the previous layer and the layer's parameters. This forms the foundation for the neural network inference algorithm that will be covered next.

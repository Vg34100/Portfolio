# Implementing Forward Propagation from Scratch

* Purpose of implementing forward prop manually:
 * Gain intuition about what's happening in TensorFlow/PyTorch
 * "If ever some day you decide you want to build something even better than TensorFlow and PyTorch"
 * Not recommended for most people

* Code will be shown again in labs:
 * "Don't worry about having to take notes on every line of code"
 * Goal: understand what the code is doing
 * Will appear in Jupiter notebook in optional and practice labs

* Coffee Roasting Model Implementation:
 * Using 1D arrays to represent vectors and parameters
   * "Single square bracket here" (vs 2D matrix with double brackets)

* Computing First Layer Activations:
 * Notation convention:
   * w2_1 means "w superscript 2 in square brackets and then subscript 1"

 * Computing a1_1 (first activation in layer 1):
   * Parameters: w1_1 and b1_1 (example values: [1, 2] and -1)
   * z1_1 = dot product of w1_1 and x + b1_1
   * a1_1 = g(z1_1) where g is sigmoid function

 * Computing a1_2:
   * Parameters: w1_2 = [-3, 4], b1_2 = value
   * z1_2 = dot product of w1_2 and x + b1_2
   * a1_2 = g(z1_2)

 * Computing a1_3:
   * Similar process with w1_3 and b1_3

 * Combining into array:
   * Group three values into a1 using np.array
   * a1 becomes output of first layer

* Second Layer Implementation:
 * Computing a2:
   * Parameters: w2_1 and b2_1
   * z = dot product of w2_1 and a1 + b2_1
   * a2_1 = g(z)
   * "That's it, that's how you implement forward prop using just python and np"

> **Note:** This implementation hard-codes each neuron calculation separately. The next video will show a more general approach.

This implementation demonstrates forward propagation at its most basic level, calculating each neuron's activation individually. This approach helps understand what happens "under the hood" in deep learning frameworks, though a more generalized implementation would be needed for practical use.

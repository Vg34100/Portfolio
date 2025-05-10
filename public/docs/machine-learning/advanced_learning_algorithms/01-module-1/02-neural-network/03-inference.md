# Forward Propagation Algorithm for Neural Networks

* Algorithm for neural network inference is called **"forward propagation"**
 * Example: Handwritten digit recognition (0 vs 1)
   * Input: 8×8 image (64 pixels)
   * Pixel values: 0-255 (black to white)
 * Neural network structure:
   * Hidden layer 1: 25 neurons
   * Hidden layer 2: 15 neurons
   * Output layer: 1 neuron (probability of digit being 1)

* Computation Sequence:
 * Step 1: Compute a^[1] from X
   * a^[1] = g(w^[1]·x + b^[1])
   * a^[1] has 25 numbers (one per neuron)
   * Parameters: w₁^[1] through w₂₅^[1], b₁^[1] through b₂₅^[1]
   * Note: "x here but I could also have written a^[0] here because by convention the activation of layer zero, that is a^[0] is equal to the input feature value x"

 * Step 2: Compute a^[2] from a^[1]
   * a^[2] = g(w^[2]·a^[1] + b^[2])
   * a^[2] has 15 numbers (one per neuron)
   * Parameters: w₁^[2] through w₁₅^[2], b₁^[2] through b₁₅^[2]

 * Step 3: Compute a^[3] from a^[2]
   * a^[3] = g(w^[3]·a^[2] + b^[3])
   * a^[3] is a scalar (single value)
   * Optional: threshold a^[3] at 0.5 for binary classification

* Key Concepts:
 * This algorithm is called **"forward propagation"** because:
   * Computation flows left→right
   * "Propagating the activations of the neurons"
 * Final output a^[3] can also be denoted as f(x)
 * Contrasts with "backward propagation" (used for learning)

> **Note:** Neural networks typically have more hidden units initially with decreasing numbers as you approach the output layer.

Forward propagation enables inference with neural networks, allowing predictions on new data using parameters from previously trained models. This algorithm forms the foundation of how neural networks transform inputs into meaningful outputs.

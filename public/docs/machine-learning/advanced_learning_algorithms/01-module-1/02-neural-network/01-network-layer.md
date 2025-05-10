# Neural Network Layer Fundamentals

* The fundamental building block of most modern neural networks is a **"layer of neurons"**
  * Once you understand this, you can put layers together to form larger networks

* Example: Demand prediction with 4 input features
  * Input features → Hidden layer (3 neurons) → Output layer (1 neuron)

* Hidden Layer Computation:
  * Inputs 4 numbers to each of 3 neurons
  * Each neuron implements a logistic regression unit
    * First neuron:
      * Parameters: w₁, b₁
      * Output: a₁ = g(w₁·x + b₁)
        * g is logistic function: 1/(1+e^(-z))
        * Example value: a₁ = 0.3
    * Second neuron:
      * Parameters: w₂, b₂
      * Output: a₂ = g(w₂·x + b₂)
      * Example value: a₂ = 0.7
    * Third neuron:
      * Parameters: w₃, b₃
      * Output: a₃ = g(w₃·x + b₃)
      * Example value: a₃ = 0.2

* Layer Notation:
  * Input layer = Layer 0
  * Hidden layer = Layer 1
  * Output layer = Layer 2
  * Superscript [1] denotes quantities from layer 1
    * a^[1] = activation values from layer 1
    * w^[1], b^[1] = parameters from layer 1

* Output Layer Computation (Layer 2):
  * Input: a^[1] vector [0.3, 0.7, 0.2]
  * Single neuron computes: a₁^[2] = g(w₁^[2]·a^[1] + b₁^[2])
  * Example output: a₁^[2] = 0.84

* Optional Final Step:
  * For binary prediction: threshold a^[2] at 0.5
  * If > 0.5: predict ŷ = 1
  * If < 0.5: predict ŷ = 0

> **Note:** Each neural network layer takes in a vector of numbers, applies logistic regression units, and outputs another vector that becomes input to the next layer.

Neural networks work by passing data through layers of neurons, with each neuron performing a logistic regression computation. The outputs of one layer become inputs to the next until the final prediction is produced.

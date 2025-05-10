# TensorFlow Implementation of Neural Networks

* TensorFlow is a leading framework for deep learning
 * "When I'm building projects, TensorFlow is actually a tool that I use the most often"
 * Alternative: PyTorch (not covered in this specialization)

* Neural networks can be applied to many different applications
 * Example: Coffee bean roasting optimization
   * Parameters: temperature and duration
   * Dataset: different temperatures/durations labeled as good/bad coffee
   * Good coffee (y=1) only in a specific region
     * Too low temperature → undercooked
     * Too short duration → not nicely roasted
     * Too high temperature/duration → burnt beans

## Implementing Inference with TensorFlow

* Coffee roasting example implementation:
 * Input: x = [200, 17] (temperature in Celsius, duration in minutes)
 * Layer 1 (first hidden layer):
   * `Layer 1 = dense(units=3, activation="sigmoid")`
   * Computes: `a1 = Layer1(x)` → produces 3 values (e.g., [0.2, 0.7, 0.3])
 * Layer 2:
   * `Layer 2 = dense(units=1, activation="sigmoid")`
   * Computes: `a2 = Layer2(a1)` → produces 1 value (e.g., 0.8)
 * Final prediction:
   * Optional thresholding: `y_hat = 1 if a2 >= 0.5 else 0`

* Handwritten digit classification example:
 * Input: x = numpy array of pixel intensity values
 * Layer 1:
   * `Layer 1 = dense(units=25, activation="sigmoid")`
   * Computes: `a1 = Layer1(x)`
 * Layer 2:
   * `Layer 2 = dense(units=15, activation="sigmoid")`
   * Computes: `a2 = Layer2(a1)`
 * Layer 3:
   * `Layer 3 = dense(units=1, activation="sigmoid")`
   * Computes: `a3 = Layer3(a2)`
 * Final prediction:
   * Optional thresholding for binary prediction

> **Note:** "Dense" is another name for the standard neural network layers covered previously.

* Implementation details:
 * Additional details in lab (loading TensorFlow library, loading parameters)
 * TensorFlow treats data in specific ways (covered in next video)

TensorFlow provides a clean syntax for implementing neural network inference, allowing the application of the same fundamental algorithms to vastly different problems. The framework handles the complex computations while maintaining a relatively simple interface for model creation and prediction.

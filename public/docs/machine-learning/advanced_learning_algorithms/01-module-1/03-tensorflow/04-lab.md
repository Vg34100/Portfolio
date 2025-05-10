# TensorFlow Neural Network for Coffee Roasting

* Optional Lab: Build a small neural network using TensorFlow

* Coffee Roasting Dataset
 * Features: Temperature (Celsius) and Duration (minutes)
 * "Duration is best kept between 12 and 15 minutes while the temp should be between 175 and 260 degrees Celsius"
 * As temperature rises, duration should shrink

* Data Normalization
 * Features normalized using Keras normalization layer:
   * Create normalization layer (not part of model)
   * Adapt the data (learns mean and variance)
   * Normalize the data
 * Results:
   * Temperature: Max/Min pre-norm: ~200-300 → post-norm: ~1.5-2.0
   * Duration: Max/Min pre-norm: ~10-20 → post-norm: ~-1.5-1.5

* Model Architecture: "Coffee Roasting Network"
 * 2 input features → 3 hidden units → 1 output unit
 * All activations use sigmoid function
 * Input shape = (2,)
 * Model definition:
   ```
   model = Sequential([
       tf.keras.Input(shape=(2,)),
       Dense(3, activation='sigmoid', name='layer1'),
       Dense(1, activation='sigmoid', name='layer2')
   ])
   ```

* Model Parameters
 * Layer 1: 9 parameters
   * W1: shape(2,3) = 6 parameters
   * b1: shape(3,) = 3 parameters
 * Layer 2: 4 parameters
   * W2: shape(3,1) = 3 parameters
   * b2: shape(1,) = 1 parameter

* Training Process
 * Compile with:
   * Loss: BinaryCrossentropy
   * Optimizer: Adam(learning_rate=0.01)
 * Fit for 10 epochs
 * Output shows progress: "Epoch 1/10, 6250/6250 [...] - loss: 0.1782"
 * Model weights updated during training

* Making Predictions
 * Input data must be normalized same as training data
 * Output is probability (of good roast)
 * Apply threshold (≥ 0.5) to make decision:
   ```
   yhat = (predictions >= 0.5).astype(int)
   ```

* Layer Functions Visualization
 * First layer units specialize in different regions:
   * Unit 0: Detects when temperature is too low
   * Unit 1: Detects when duration is too short
   * Unit 2: Detects bad combinations of time/temperature
 * "The network learned these functions on its own through gradient descent"
 * "They are very much the same sort of functions a person might choose"

* Network Output Visualization
 * Left graph: Raw output (probability) with training data overlay
 * Right graph: Decisions after threshold with results shown

> **Note:** The network demonstrated ability to handle complex decisions by dividing the decision task between multiple units.

This lab shows how to build, train and analyze a neural network in TensorFlow for coffee roasting classification. The network learns interpretable features in the hidden layer that correspond to meaningful aspects of the roasting process.

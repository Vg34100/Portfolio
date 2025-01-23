# Neural Networks for Demand Prediction

* Basic Neural Network Example
 - T-shirt sales prediction
   * Input: Price, shipping, marketing, material quality
   * Output: "Top seller probability"
   * Used by retailers for
     - Inventory planning
     - Marketing campaigns

* Network Structure
 - Input Layer: Features vector (x)
 - Hidden Layer
   * Computes intermediate values
     - "Affordability" (from price/shipping)
     - "Awareness" (from marketing)
     - "Perceived quality" (from price/material)
   * Called "hidden" because
     - True values not in training data
     - Takes all inputs for flexibility
 - Output Layer
   * Final prediction probability

* Key Concepts
 - Neurons
   * Like "tiny computers"
   * Takes numbers in, outputs numbers
   * Uses "activation" values
 - Layers
   * Groups of neurons
   * Each outputs vector to next layer
   * Can have multiple hidden layers
 - Architecture Decisions
   * Number of hidden layers
   * Neurons per layer
   * Impacts performance

* Advantages
 - "Learns its own features"
   * No manual feature engineering
   * Automatically finds useful combinations
 - Flexibility
   * Can discover unexpected patterns
   * Adapts to data automatically

Neural networks transform raw input features through hidden layers to make predictions. Their power comes from automatically learning useful intermediate features, eliminating the need for manual feature engineering while maintaining flexibility to discover complex patterns.

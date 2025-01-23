* Macro Variation Setup:
 - Core Components:
   * Same noise texture at 3 scales
   * UV scales:
     - Large: 0.2
     - Medium: 0.205
     - Small: 0.02

* Implementation Process:
 1. Combine Noise Layers:
    * Add RGB channels
    * "Add 0.5 constant to each"
    * Multiply results together
 
 2. Contrast Control:
    * Use Lerp node:
      - A = Gray (0.5)
      - B = 1.0
      - Alpha = Combined noise
    * "Prevents overexposure"
    
 3. Parameter Setup:
    * Create groups:
      - Macro scales (0-3)
      - Macro texture
      - Contrast values
    * "All accessible in material instance"

* Key Notes:
 - "Single texture parameter updates all three scales"
 - "Named reroutes for organization"
 - "Combines with micro variation"
 - Adjustable via material instance for fine-tuning
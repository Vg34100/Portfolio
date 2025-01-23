* Basic Landscape Material Setup:
 - Create Material Structure:
   * Use Layer Blend system
   * Three basic layers:
     - Index 0: Rock (base)
     - Index 1: Grass
     - Index 2: Snow
   * "All layers use Weight Blend type"
 
* Essential Components:
 - Layer Requirements:
   * Landscape Layer Blend node
   * Albedo textures per layer
   * "Must create Layer Info for each layer"
     - Create via: Weight Blended Layer Normal
     - "Landscape stays black until Layer Info assigned"

* Painting Tools:
 - Core Functions:
   * Paint: Basic layer application
   * Smooth: Blend layer weights
   * Flatten: Average weights between layers
 - Tool Settings:
   * Default strength: 0.3
   * "Large operations: ~3.0 strength, 4K brush"
   * "Detail work: Lower strength, 2K brush"

* Key Issues:
 - "Tiling problems need UV control"
 - "Requires landscape coordinate node"
 - "Shaders compile per landscape component"
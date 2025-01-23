# Quixel Blend Materials

* Creation Process:
  - Select materials in Quixel Bridge
  - Limited to 3 material instances max
  - Create through Megascans blend material button
  - Generated in blend materials folder

* Layer Structure:
  - Base layer (bottom)
  - Middle layer
  - Top layer
  - Order of selection matters

* Setup Steps:
  1. Start with base layer only if having issues
  2. Add additional layers manually:
     * Populate albedo
     * ARD/ORD maps
     * Normal maps
  3. Save after each layer addition

* Required Maps for Each Layer:
  - Albedo (color)
  - ARD/ORD (ambient/roughness/displacement)
  - Normal map
  
* Testing/Application:
  - Use dense plane mesh for testing
    * Recommended: 128x128 subdivisions
    * 1000x1000 size
  - Apply material before painting
  - Use mesh paint mode for blending

* Troubleshooting:
  - If blend creation fails:
    * Try with fewer layers initially
    * Add layers manually
    * Reset default values if needed
  - Save frequently during setup

The system enables creation of blendable materials for detailed surface transitions and variations.
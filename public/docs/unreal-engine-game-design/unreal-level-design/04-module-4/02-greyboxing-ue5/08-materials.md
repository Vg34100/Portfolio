# Materials for Level Design & Prototyping

* Prototype Grid Materials:
 - Based on M_PrototypeGrid material
   * Shows scale and world grid relation
   * Has 3 variations:
     > Gray: 2x2 grid, rotates with asset
     > Gray_02: Grid aligned to world
     > Top Dark: Darkens horizontal surfaces
 
* Customizing Materials:
 - Can duplicate existing material instances
   * Put in materials directory
   * Change variables/colors
   * "Color coding communicates intentions"
 
* Landscape Materials:
 - More complex customization process:
   * Duplicate base PrototypeGrid material
   * Add landscape layer blend node
     > Define layers in properties
     > Create weight blended layers
   * Can paint different areas:
     > Grid layer: standard material
     > Path layer: custom colors
     > "Shows traversable vs non-traversable areas"
   * Setup requires:
     > Layer info assignment
     > Weight blended layer creation
     > Default value settings for surfaces

Material system allows clear communication of level design intentions through grid patterns and color coding. Landscape materials enable painting of gameplay paths while maintaining grid visibility for scale reference.
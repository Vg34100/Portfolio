* Distance Blending Purpose:
 - Solves far-distance tiling issues
 - "Keep close detail, fix distant views"
 - Uses two UV sets:
   * Near (close-up view)
   * Far (distant view)

* Implementation Setup:
 - Duplicate UV Sets:
   * Create near/far parameters per layer
   * Need two texture sets
 
 - Distance Blend Node:
   * Key Parameters:
     - Blend Range (default: 100)
     - Blend Offset (default: -1000)
     - "Larger values needed for landscapes"
   * Controls transition between sets

* Texture Blending Process:
 - Linear Interpolate (Lerp):
   * Alpha = Distance blend
   * Blend between:
     - Normal maps
     - Base colors
 
 - ORD Maps Special Handling:
   * Break into components
   * Blend individual channels:
     - R = Ambient Occlusion
     - G = Roughness
     - B = Displacement

* Organization Tips:
 - "Use named reroute for distance blend"
 - "Separate UV tile comments"
 - "Color code layers (R,G,B)"
 - "Save often - crashes can happen"

 # Part 2
 * Distance Blending Implementation:
 - Process Per Layer:
   * Duplicate UV networks
   * Apply tinting variation to both sets
   * Linear interpolate between sets using:
     - Normal maps
     - Base colors
     - ORD maps (broken into RGB)

* Key Parameters:
 - Blend Controls:
   * Offset: "Distance where blend starts"
   * Range: "Distance over which blend occurs"
   * Default values:
     - Blend Range: 1000
     - Blend Offset: -1000
     - "Must adjust per landscape"

* Organization Structure:
 - Parameter Groups:
   1. UV Tile (0,0 priority)
   2. Macro Variation
      * Texture & contrast
      * Scale controls
   3. Distance Blending
   4. Layer Tinting
   5. Layer Textures

* Fine-Tuning Tips:
 - Test in play mode
 - Check both:
   * Close-up view
   * Bird's eye view
 - "Adjust values until tiling invisible"
 - "Use F8 for real-time adjustments"

* Final Result:
 - "Significant improvement over basic tiling"
 - Combines:
   * Macro variation
   * Tinting variation
   * Distance blending
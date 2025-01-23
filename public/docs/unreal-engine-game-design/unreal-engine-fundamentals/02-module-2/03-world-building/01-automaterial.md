# Landscape Automaterials

* Core Purpose:
  - Automates texture application based on landscape features
  - Streamlines texturing of large landscapes
  - Reduces manual painting work for open worlds

* Key Features:
  - Slope-based texturing:
    * Automatically applies appropriate textures based on terrain angle
    * Example: Rock on steep slopes, grass on flat areas
  - Auto-blending:
    * Creates natural transitions between materials
    * Edge blending (like dirt edges along cliffs)

* Material Settings Control:
  - Blend bias
  - Cliff angles
  - Edge coloring/contrast
  - Blend sharpness
  - Flower/detail masking

* Usage Benefits:
  - Background areas can be quickly textured
  - Focus manual detailing only where needed
  - Consistent texturing across large areas
  - Reduces overhead work in open worlds

* Implementation:
  - Uses material functions (MF prefix)
  - Applied through material instances
  - Can be combined with manual layer painting for detail areas

Automaterials are particularly valuable for efficiently texturing large landscapes while maintaining natural-looking results.
# Adding Grass to Landscape Materials

* Adding grass via landscape material:
  - Right click in material editor > "Grass" > landscape grass output
  - Inside grass node:
    * Brings in grass type
    * Can add multiple array elements (grass, flowers, etc)
    
* Required nodes:
  - Landscape grass output node
  - Landscape layer sample
    * Samples grass for painting layer
    * Name matches grass type (grass, flowers, etc)

* Setting up grass types:
  - Create landscape grass type:
    * Right click > foliage > landscape grass type
    * Add mesh varieties via array elements
    * Key settings:
      - Density (default 400)
        * 400 = fully saturated
        * 5-10 = minimal coverage
      - Scale options (uniform vs random 50-120%)
      - Culling distance

* Layer setup:
  - Add new layers in landscape master material
  - Use non-weight blended layers
  - Each type (grass/flowers) needs separate layer

* Megascans integration:
  - Found in Collections > Vegetation > Grass
  - Provides:
    * Static meshes
    * Texture maps (base color, normal, ART)
    * Foliage contains static mesh foliage type

Grass integration allows for dynamic landscape decoration through material-based painting. Primary control comes through density settings and mesh selection, with real-time updating for immediate visual feedback.
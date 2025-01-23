# Procedural Foliage Tools

* Setup:
  - Enable in Editor Preferences > "procedural foliage"
  - Two key volumes:
    * Procedural Foliage Volume (spawns foliage)
    * Procedural Blocking Volume (prevents spawning)

* Procedural Foliage Spawner:
  - Create in Foliage Category
  - Key Settings:
    * Random seed
    * Tile size
    * Number of unique tiles
    * Foliage types (array of assets)
  - Use "Resimulate" to update changes

* Key Parameters for Foliage Types:
  - Collision Controls:
    * Shade radius (spacing between objects)
    * Collision radius (minimum distance)
  
  - Clustering Settings:
    * Number of steps
    * Initial seed density
    * Spread variants
  
  - Growth Parameters:
    * Size control
    * Scale adjustments
    * Age variations

* Practical Tips:
  - Adjust Z offset for proper ground placement
  - Change parameters one at a time to understand impacts
  - Use blocking volumes for paths/clearings
  - Can duplicate/resize volumes for larger areas
  - Resimulate after any changes

The tool enables quick creation of dense, natural-looking forests with controlled variation and spacing.
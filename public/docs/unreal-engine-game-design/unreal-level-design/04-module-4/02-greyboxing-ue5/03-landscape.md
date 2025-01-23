# Creating Landscape in Unreal

* Initial Landscape Setup:
 - Enter landscape mode from dropdown
 - Default settings:
   * 63*63 quads
   * 1*1 section, 8*8 
 - Change components to 12 for full map coverage
 - Set texture:
   * Use 'MI_PrototypeGrid_TopDark'
     - Perfect for greyboxing
     - Shows topological view
     - Aligns with grey texture

* Terrain Layer Process:
 - Base Layer:
   * Move map up ~2200 units (2 meters)
   * Use sculpt tool for lowest areas
   * Ignore lake and river sections
   * Adjust brush settings:
     - Lower tool strength
     - Keep large brush size
     - Use shift to push down

 - Middle Layer:
   * Bump plane to 2000 units
   * Use "flatten" tool instead of sculpt:
     - Set height with eyedropper
     - Paint to consistent height
     - Creates mesa-like geography

 - Top Layer:
   * Set to 4000 units
   * Flatten target ~4200 (2m above map)

* Final Touches:
 - Add variety and detail:
   * Use noise
   * Apply erosion/hydro tools
   * Clean up outliner/folders
 - Additional elements:
   * Sky atmosphere
   * Sky light
   * Water plane/lakes
   * Player start at guardhouse

* Key Reminder:
 - "Nothing is precious"
   * Can delete/change anything
   * Keep process fast and loose

This section covers creating a multi-layered landscape in Unreal Engine, starting from basic elevation setup to final environmental elements. Emphasizes quick iteration and flexibility in the design process.
* Manage Tab Core Functions:
 - Import/Export:
   * Can import heightmap data
   * Export current landscape as grayscale heightmap
 
 - Selection & LOD:
   * Left click to select areas
   * Can override materials per LOD
     - "Useful for distant areas performance"
     - Affects Section Base X/Y values
 
 - Component Management:
   * Add:
     - "Must be adjacent to existing components"
     - Green highlight shows placement
   * Delete:
     - Remove components row by row
   * Resize:
     - Change section size (e.g., 63x63 to 127x127)
     - Options:
       > Resample: "Changes resolution"
       > Expand/Clip: "Rounds up/down respectively"

* Edit Layers System:
 - "Like Photoshop layers for landscapes"
 - Layer Controls:
   * Strength: -100% to 100%
     - Negative = depression
     - Positive = elevation
   * Visibility toggle ("poke the eye")
   * "Can't exceed 100% even if typed"
 
 - Use Cases:
   * Test new terrain ideas
   * Build on imported heightmaps
   * Separate mountain ranges/lakes
   * "Reserve layers for splines/roads"
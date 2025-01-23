* Packed Texture Overview:
 - Three main identifiers:
   * O.R.D
   * A.R.D 
   * A.R.M

 - Channel Meanings:
   * O/A = Occlusion/Ambient Occlusion
   * R = Roughness
   * D = Displacement
   * M = Metallic

 - Channel Breakdown:
   * Red (R) = Ambient Occlusion
   * Green (G) = Roughness
   * Blue (B) = Displacement/Metallic

* Key Benefits:
 - "Reduces memory load"
   * Instead of loading multiple maps
   * Single texture contains 3-4 maps' info
   * Can include alpha channel for more data

* Visualization:
 - In Engine:
   * Combined = Yellow/Orange/Pink blend
   * Can view individual RGB channels
 - Created in software like Photoshop
   * RGB channels viewed separately
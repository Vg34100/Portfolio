* Roughness Channel Setup
 * Duplicate metallic setup (Ctrl+D)
   > Rename components:
     - "roughness mask" (was metal/non-metal)
     - "roughness map" (was metallic map)
     - "roughness value" (was metallic value)
 
 * Value Testing
   > 1 = "100% matte, not shiny"
   > 0 = "like a mirror"
 
 * Enhanced Controls
   > Parameters:
     - Roughness maximum 
     - Roughness minimum
   > Linear interpolate:
     - Uses roughness mask as alpha
     - Controls white/black pixel roughness
 
 * Specular Note
   > "Measure of light reflection"
   > Range: 0-1 (default 0.5)
   > "Particularly useful for non-metal"
   > "Usually stick to roughness channel"
* Texture Maps
 * Purpose: mapped to material surfaces
 * Can use: none, one, or several textures
 * Import
   > Can bulk import multiple at once
   > Normal maps auto-detected by engine

* Texture Asset Settings
 * Resolution
   > Display & Max in-game sizes
   > Alpha channel shown if present
 
 * "MIP Gen & LOD" (Level of Detail)
   > Higher res when closer
   > Lower res when distant
   > LOD Bias:
     - 0 = 4K
     - 1 = 2K  
     - 2 = 1K
 
 * "Power of Two"
   > Required for auto MIP mapping
   > Example: 4096x4096 works
   > Non-power (4000x4005) = no auto scaling
 
 * Normal Maps Special Settings
   > MIP gen = 6
   > World normal map group
   > Compression without Alpha
   > SRGB disabled

* File Types
 > JPEG, PNG, TGA
 > EXR, TIFF

* Asset Updates
 > Can replace source file
 > Auto-updates all materials using texture
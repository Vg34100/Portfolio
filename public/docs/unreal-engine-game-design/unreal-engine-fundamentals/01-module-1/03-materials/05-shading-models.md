* Shading Models Overview:
 * Unlit
   - Only outputs emissive color
   - Perfect for:
     > Special effects (fire)
     > Objects emitting light
   - Can cast light with:
     > Lumen
     > Light mass (if emissive for static lighting enabled)

 * Default Lit
   - "Most commonly used"
   - Uses:
     > Direct/indirect lighting
     > Specularity for reflections
 
 * Subsurface Types
   - Regular Subsurface
     > Light bleeds/scatters through material
     > Has subsurface color option
     > Example: Light through finger/ear
   
   - Subsurface Profile
     > "Geared towards high-end skin rendering"
     > More complex options:
       - Surface albedo
       - Mean free path color
       
 * Specialized Models
   - Cloth
     > Has fuzz color channel
     > Simulates light interaction with cloth surface
   
   - Two Sided Foliage
     > For leaves/plants
     > Allows light transmission
     > Better than subsurface for "very thin surfaces"
   
   - Hair
     > Creates natural-looking hair
     > Multiple specular highlighting
     > Mixes hair and light color
   
   - Clear Coat
     > For materials with thin translucent film
     > Examples:
       - Car paint
       - Lacquer
       - Soda can metal
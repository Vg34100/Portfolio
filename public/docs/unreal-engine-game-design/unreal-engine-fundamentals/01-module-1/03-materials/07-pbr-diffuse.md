* PBR (Physical Based Rendering) Core
 > "Surfaces approximate real-world light behavior"
 > More accurate than artist intuition
 > Key Attributes:
   - Base color
   - Roughness
   - Metallic
   - Specular

* Material Setup
 > Created MM_Master material
 > Input Options:
   - Color (3 vector)
   - Texture sample
     • Hold 'T' for texture sample node
     • Can reset or search textures
   - Switch Parameter
     • Controls texture vs color
     • "True = texture, False = color"

* Tinting System
 > Multiply node (M key)
   - Black = turns off pixels
   - White = no effect
   - Other colors = tint
 > Parameters:
   - Base texture
   - Color
   - Tint control

* Organization
 > Comment box (C key)
 > Can adjust alpha for title bar only
 > Group: "diffuse albedo base color"
* Normal Maps Core
 > Purpose: "Add significant detail by modifying pixel direction"
 > Naming: "_n" at end = normal map convention
 > Result:
   - Makes surfaces look extruded/3D
   - "Creates illusion of higher detail"
     • Allows lower polygon meshes
     • "Heavily used in gaming industry"

* Combining Normals
 > Use "blend-angle corrected normals"
   - Takes: base normal + additional normal
   - Blends them correctly
 
* Normal Intensity Control
 > Process:
   - Keep blue = 1 (constant)
   - Use component mask (R,G only)
   - Multiply R,G by intensity value
   - Append blue back
 > Parameters:
   - Base normal intensity
   - Top normal intensity
   - "Set default limits to prevent breaking"

* Organization
 > Use reroute nodes (double-click wire)
 > Group with comments ('C' key)
 > Can duplicate setups (Ctrl+C/V or Ctrl+D)
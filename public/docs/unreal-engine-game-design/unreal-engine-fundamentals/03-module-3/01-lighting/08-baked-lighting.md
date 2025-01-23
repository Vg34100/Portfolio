# Light Baking & Reflections

* Static Lighting Effects
 - Preview word shows on unbaked lighting
 - Baked lights cannot move/update without rebaking
 
* Light Mass Building
 - Build menu > Lighting
   > Control+Shift+; hotkey
   > Quality levels:
     - Preview (fastest)
     - Medium
     - High
     - Production (most expensive)
   > Uses Swarm agent for computation

* Importance Volume
 - Required for good results
 - "Directs where light rays concentrate"
 - Settings found in world settings:
   > Controls bounce count
   > Indirect lighting quality
 - Force no pre-computed lighting must be disabled

* UV Requirements
 - Each mesh needs lightmap UV
 - Low resolution = poor lighting display
 - Large floors need cast shadows disabled
   > "Prevents performance hits"

* Reflection System
 - UE5 handles differently than UE4
 - Sphere Reflection Capture needed
   > Place in Visual Effects menu
   > Projects lighting info back to actors
   > "Fixes black metallic materials"
 
* Modern Recommendations
 - "Do not use lightmass"
 - Use GPU lightmass instead
   > Enhanced version
   > Much faster
   > Better for future projects

Baked lighting requires careful setup with importance volumes and reflection captures for proper results. While lightmass works, GPU lightmass is recommended for modern development needs.
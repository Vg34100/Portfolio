# Lumen: Dynamic GI & Reflections

* Lumen Core Features
 - Default UE5 GI/reflection system
 - "Not dependent on machine" unlike raytracing
   > Good GPU helps maximize capabilities

* Technical Capabilities
 - Diffuse Features
   > Infinite light bounces
   > Color bleeds
   > Works with nanite geometry
 - Sky Handling
   > Part of final gather process
   > Creates darker indoor spaces
   > "More natural lighting effect"
 - Material Support
   > Lit translucency
   > Volumetric fog
   > Emissive materials at no extra cost
     - Size/brightness limits exist
   > Clear coat materials

* Reflection Comparison
 - Screen Space Reflections
   > Only reflects visible viewport
   > Objects out of frame disappear
   > "Cheaper alternative to lumen"
 - Lumen Reflections
   > Maintains off-screen objects
   > Full material roughness range
   > Shows diffuse GI in reflections

* Global Illumination
 - Screen Space GI
   > Loses indirect light off-screen
   > Limited bounces
 - Lumen GI
   > Maintains off-screen lighting
   > Infinite bounces possible
   > "Best results for real-time"

* Debug Tip
 - Show modified properties via gear icon
   > Helps track changed settings
   > Useful for inherited work

Lumen revolutionizes UE5's lighting by providing real-time GI and reflections without hardware dependencies. Unlike screen space alternatives, it maintains consistent lighting and reflections regardless of viewport visibility.

# Lumen Setup & Optimization

* Required Setup
 - Distance fields must be enabled
 - Replaces:
   > Screen space reflections
   > Screen space GI
   > Distance field ambient occlusion

* Project Settings
 - Rendering > Global Illumination
   > Set GI method to Lumen
   > Reflection method to Lumen
   > "Reflection capture resolution: 2048"
 - Hardware Ray Tracing
   > Requires RTX card
   > Change ray lighting to "hit lighting reflections"
   > Enable high quality translucency
 - Additional Requirements
   > Enable Shader Model 6
   > Disable static lighting
   > Turn off ambient occlusion baked lighting
   > Enable virtual shadow maps
     - Works with Nanite
     - High efficiency culling

* Post Process Volume Controls
 - Access via Create > Visual Effects
 - Key Settings:
   > Infinite unbound for global effect
   > Manual exposure control
   > Lumen specific:
     - Scene lighting quality
     - Scene detail
     - View distance
     - Final gather quality
     - Trace distance
 
* Limitations & Performance
 - Higher values increase GPU load
   > Scene detail affects noise
   > "Max 8 reflection bounces"
 - Material Considerations
   > Emissive lights increase noise
   > Reflective materials need balance
   > "Trade-off between visual fidelity and performance"

Lumen provides advanced real-time lighting but requires careful setup and optimization. Success depends on balancing quality settings with performance requirements based on project needs and hardware capabilities.
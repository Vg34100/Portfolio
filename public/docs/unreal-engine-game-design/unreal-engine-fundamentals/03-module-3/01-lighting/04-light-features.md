# Core Lighting Properties & Features

* Light Access Methods
 - Hold 'L' to place lights
 - Filter in outliner for lights

* Directional Light Properties
 - Intensity measured in lux
   > Based on Earth's sun illumination
   > "Total light falling on surface"
 - Shadow Control
   > Source angle controls crispness
   > Soft source angle for edge softness
 - Temperature
   > 6500 is neutral point
   > Below = cool, Above = warm
 - Additional Controls
   > Indirect lighting intensity (GI scale)
   > Volumetric scattering for god rays

* Point Light Features
 - Intensity Units
   > Candelas (uniform cone emission)
   > Lumens (total light power)
   > Unitless (engine-specific)
     - 1 candela = 625 unitless
     - 1600 lumens ≈ 100w bulb
 - Key Settings
   > Attenuation radius: light influence range
   > Source radius: affects shadow softness
   > Source length: for tube-like lights
   > "Inverse square falloff for natural light reduction"

* Spotlight Specifics
 - Shares point light settings
 - IES Profiles
   > Real-world light patterns
   > Creates light banding effects
   > "Like flashlight ground patterns"

* Rectangular Light 
 - "Most expensive - like 6 point lights"
 - Unique Controls
   > Barn door angle/length
   > Source width/height
   > Creates precise light boxes

Light features provide extensive control from basic intensity to complex patterns and falloff. Each light type offers unique properties for specific lighting scenarios, with performance considerations guiding their usage.
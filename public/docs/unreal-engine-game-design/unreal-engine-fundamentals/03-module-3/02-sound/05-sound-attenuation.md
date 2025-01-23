# Sound Attenuation & Volume Control

* Sound Attenuation Concept
   * "Volume decrease as listener moves from sound source"
   * Creates immersive/realistic audio experience
   
* Attenuation Functions
   * Linear 
       - Straight line, consistent volume changes
       - Best for: background sounds, basic cross-fitting
   * Logarithmic
       - Greater changes at closer distances
       - Ideal for: 3D positioned spot sounds
   * Inverse
       - More extreme than logarithmic
       - "Barely audible far, significantly louder close"
   * Log Reverse
       - "Very loud across large distance"
       - Only falls off at edge perimeter
   * Natural Sound
       - Matches reality
       - Middle ground between log/inverse
   * Custom
       - Define own shape/behavior

* Attenuation Shapes
   * Types
       - Sphere (default)
       - Capsule: "ideal for tube structures"
       - Box: "perfect for interior rooms"
       - Cone: "excellent for speakers/microphones"

* Creating Attenuation Assets
   * Process
       - Right click > Audio > Sound Attenuation
       - Similar to material instance system
       - Can apply to multiple sounds
   * Benefits
       - Global control over effects
       - No individual sound adjustments needed

Sound attenuation creates realistic volume falloff in games through various functions and shapes. Assets can be created for efficient global control, enhancing the overall audio experience through distance-based volume management.
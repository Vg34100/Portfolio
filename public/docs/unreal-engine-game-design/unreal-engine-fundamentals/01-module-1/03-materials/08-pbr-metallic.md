* Metallic Channel Setup
 * Value Control
   > "Usually on or off, one or zero"
   > Can use texture or direct values
     - 0 = non-metal
     - 1 = metal
 
 * Switch Parameter
   > Named "metal or non-metal"
   > Controls between:
     - Metal texture/value
     - Non-metal default
 
 * LERP (Linear Interpolate) Node
   > Access: Hold 'L' key
   > Controls
     - Alpha blends between A and B inputs
     - White pixels = metallic value
     - Black pixels = non-metallic
   > Preview: Right-click "Start Previewing Node"
 
 * Parameters
   > Metallic map (texture)
   > Metallic value
     - Slider: 0 to 1 range
     - "Can do stylization" beyond on/off
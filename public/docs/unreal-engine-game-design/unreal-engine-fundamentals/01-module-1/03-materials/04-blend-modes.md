* Material Property Map Exploration
  * Following along in content examples project
    * Located in maps tab under "material" search
    
* Blend Modes: "describes how output of current material blends over background"
  * Opaque
    - Most common blend mode
    - "Light cannot pass/penetrate"
    - Perfect for: plastics, metal, stone
  
  * Masked
    - Controls selective visibility
    - Uses opacity mask channel
      > White reveals pixels
      > Black conceals pixels
    - Has clip mask property (0-1 value)
      > Default: 0.33
      > Controls opacity mask cutoff
  
  * Translucent
    - Unlike masked, allows gradation
    - Can have partial translucency values
    - Not just on/off like masked
  
  * Additive
    - Adds material pixels to background pixels
    - Similar to Photoshop's linear dodge/add
    - Best for: fire, steam, holograms
    - Limitation: hard to see on bright backgrounds
  
  * Modulate
    - Similar to Photoshop's multiply
    - Multiplies material pixels against background
    - Requires shading model change to unlit
    - Less commonly used
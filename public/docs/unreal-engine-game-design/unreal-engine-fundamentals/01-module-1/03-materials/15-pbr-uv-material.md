* UV Material Function
  * Using texture coordinate for UV mapping:
    - Hold U key to create texture coordinate node
    - Creating named reroute node "UV" to map to all texture maps
      > Apply to: base, metallic, roughness, emissive, normal maps
      > Use Ctrl+D to duplicate connections

  * Material Functions (MF):
    - Found in: megascans presets > material surfaces > M master megascans
      > Functions folder contains MF_Tiling
    - Purpose: "Build once, use many times"
      > Avoid rebuilding tiling function for each material
      > Reusable across master materials
    
  * Tiling Function Features:
    - Under "00-Global" in material instance
    - Controls:
      > X tiling for scaling
      > Offset for moving texture position
      > Rotation angle for texture rotation
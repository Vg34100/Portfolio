* Emissive Channel Core
 > Makes things "glow"
 > Basic: Emissive map into emissive color
   - Instant glow effect on white areas

* Customization Controls
 > Color Control
   - Emissive tint parameter (3 vector)
   - Multiplies with white areas
 > Intensity
   - "Emissive power" parameter
     • 0 = no glow
     • 1 = normal
     • 5-500 = increasing brightness
     • "Recommended limit: 25"
     • "Default: 5 or 15"
   
* Setup Structure
 > Switch Parameter: "emissive mask"
   - True = glow effect active
   - False = no glow (0)
 > Full Chain:
   - Map × Tint × Power
   - Can disable via switch
   
* Note: Anisotropy
 > "How metal looks"
 > Example: buffed metal swirl patterns
 > "Not often used"
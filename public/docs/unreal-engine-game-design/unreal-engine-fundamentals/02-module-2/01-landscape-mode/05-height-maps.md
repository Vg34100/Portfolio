* Height Map Interpretation:
 - Engine reads:
   * Black = flat/lowest
   * White = peak/highest
 - Height Calculation:
   * Uses -256 to +256 range (16-bit precision)
   * "Multiplied by Z scale on import"
     - Z scale 1 = max height 256cm
     - Z scale 100 = default

* Real World Scale Translation:
 - Example: 4200m mountain
   * Convert to cm: 420,000
   * Engine ratio: 1/512
   * "Final Z scale ≈ 820"
   - "Can't use real measurements (420,000cm too large)"
   - Must compress for engine limitations

* Import Specifications:
 - Recommended size: 1009 x 1009
   * Engine auto-updates:
     - Quads
     - Sections
     - Components
 - Format Requirements:
   * Accepts:
     - 16-bit RAW
     - 16-bit grayscale PNG
     - R16 format
   * RAW files need matching JSON:
     - Same name
     - Contains: width, height, bit rate

* Key Technical Notes:
 - "Proper Z scale crucial for height data"
 - "Not like textures (powers of 2)"
 - "Always check recommended sizes guide"
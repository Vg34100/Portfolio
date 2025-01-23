# Building with Basic Primitives in Unreal

* Guardhouse Construction Method:
 - Using primitive cubes - "most primitive way of making geometry/buildings"
   * Quick to change/edit/toss
   * Very playable despite roughness

* Initial Setup:
 - Place base cube for guardhouse
   * Scale: x=20, y=14
 - Grid Settings:
   * Translate: 100 (meter increments)
   * Rotation: 90 degrees
   * Scale: 1 (meter increments)
 - Align pad to grid:
   * Round coordinates to 100s
   * Can rotate entire structure off-grid later

* Organization:
 - Clean outliner structure:
   * Name pad "guardhouse_pad"
   * Create guardhouse directory
   * Group all related objects

* Building Construction Tips:
 - Quick duplication: "Hold alt key and drag"
 - Wall thickness: 
   * Can change grid to 0.5 for thinner walls
   * Adjust snap to 50 accordingly
 - "End key drops objects to next collision"

* Material Application:
 - Use "prototype gray 2"
   * Shows grid aligned to world
   * Helps visualize object placement
 - Can rotate structure off-grid
   * Material stays world-aligned
   * Use 10-degree rotation increments

* Final Touches:
 - Add point lights for interior
 - Keep refinement minimal
   * "Make it quick, make it dirty"
   * Can toss/change as needed

Primitive building technique offers quick, flexible level design through basic shapes. Focus on speed and functionality over refinement, allowing for rapid iteration and testing.
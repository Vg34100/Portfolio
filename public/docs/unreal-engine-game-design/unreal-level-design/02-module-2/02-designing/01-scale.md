# Level Design: Setting Scale & Metrics

* Map Creation Foundation:
 - Unlike diagram, needs to be "topographically and proportionally accurate"
 - Scale determined primarily by "player mechanic metrics":
   * Movement speed
   * Jump height 

* Unreal Engine Scale:
 - 1 unit = 1 centimeter
 - 100 units = 1 meter
 - Uses cube as reference:
   * Default cube = 1 meter/100 units

* Character Movement Specifics:
 - Found in First Person > Blueprints > Character Blueprint
 - Key component: "Character Movement Component" 
   * Max walk speed: 600 cm/s (6 m/s)
   * Converts to 360 meters/minute

* Level Planning:
 - Target gameplay: ~2 minutes
 - Distance calculation:
   * 360 m/min × 2 min = 720m
   * Rounded to 750m total length
 - Graph paper scale:
   * 30 squares length
   * Each square = 25 meters

* Map Requirements:
 - Needs clear legend
 - Color coding for:
   * Terrain types
   * Playable areas
   * Encounters/opponents
   * Obstacles
   * Elevation changes

Understanding scale and player metrics forms the foundation for accurate level mapping. The combination of movement speed and intended gameplay time determines the overall level dimensions, which can then be properly mapped to graph paper squares.
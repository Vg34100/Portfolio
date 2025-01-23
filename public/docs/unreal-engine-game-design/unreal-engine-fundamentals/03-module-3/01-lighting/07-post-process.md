# Post Processing Volume Core Features

* PPV (Post Process Volume)
 - Create > Visual Effects
 - Can be:
   > Applied to entire scene
   > Limited to specific areas
 - Controls:
   > "Infinite extend unbound" affects whole world
   > Otherwise only affects inside volume

* Key Settings Hierarchy
 - Auto Exposure
   > Metering modes: auto/manual
   > Controls scene lighting
   > EV 100 min/max for "eye adaptation"
 - Volume Controls
   > Blend radius: transitions between areas
   > Blend weight: effect strength (0-100%)
   > Priority: higher numbers override lower
     - Ex: "Priority 3 overrides priority 2"

* Effects & Application
 - Core effects:
   > Temperature control
   > Scene color
   > Film grain
   > Chromatic aberration
   > Lens flares/bloom
 - Use cases:
   > "Underwater effects"
   > Scene transitions
   > Eye adaptation simulation

* Advanced Features
 - Post process materials
   > "Completely separate topic"
   > Uses PBR material workflows
 - Global illumination
   > Covered in separate video
   > Affects reflections

Post process volumes provide crucial control over scene appearance and transitions. From exposure control to specialized effects, PPVs enable fine-tuned visual adjustments that can dramatically impact the final look of environments.
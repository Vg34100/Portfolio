# Unreal Engine VFX Systems Overview

* Visual Effects Systems
 * Cascade (Old System)
   - Found in starter content/particles folder
   - Still present in marketplace assets
 * Niagara (New System)
   - Multiple emitters combine into one system
   - Has timeline and preset variables
   - Preview controls:
     > Left click: rotate view
     > Right click/wheel: zoom
     > Middle mouse: camera position

* Niagara Emitter Types
 * Basic Structure
   - Created via FX category
   - Must be part of Niagara system to use in-game
   - Can adjust background/bounds in preview
 * Common Types:
   - Blowing particles: floating wisps
   - Confetti burst: celebration effect
   - Directional burst: uses gravity/forces/drag
   - Static beam: connects two fixed points
   - Fountain: water-like spray
   - Hanging particulates: ambient dust/fireflies
   - Omnidirectional burst: spark/explosion
   - Upward mesh burst: uses 3D models
     > Can randomize multiple static meshes

* Niagara Systems
 - Right click to create system
 - Add multiple emitters for complex effects
 - "Modular design" for combining effects
 - Cannot use emitters alone, must be in system

Niagara represents Unreal's modern VFX approach, replacing Cascade with a modular system that combines various emitter types into complex effects through system integration.
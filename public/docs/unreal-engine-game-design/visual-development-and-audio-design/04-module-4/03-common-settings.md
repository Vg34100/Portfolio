# Common Niagara Settings & Controls

* Creating Niagara Systems
 * Two methods:
   - "New system from selected emitters" (use + sign)
   - Right click emitter -> Create Niagara system
 * Change prefix from NE to NS
 * Important: 
   - Changes to system emitter don't affect original
   - Changes to source emitter update all systems using it

* Key Emitter Settings
 * Loop Behavior
   - Can set to "infinite" or "once"
   - Affects: confetti, directional, omni-directional, mesh burst
 * Scale Color
   - Uses curves for adjustments
     > Left: spawn color
     > Right: end color
   - RGBA mode controls transparency
     > White: opaque
     > Black: transparent

 * Particle Controls
   - Spawn Rate
     > Range: 1-1000 particles
     > Default: 100
   - Velocity
     > Min/Max values (default 500/850)
     > Extremes: 1-10 drops particles
     > High: 5000 shoots to stars
   - Forces
     > Gravity: -45 slows particles
     > Drag: affects travel distance

* Mesh Burst Specifics
 * Can change static mesh asset
 * Uses "spawn burst instantaneous"
   - Has spawn count vs rate
 * Scale adjustments
   - Graph controls size over lifetime
 * Mesh orientation
   - X,Y,Z rotation limits
   - Updates throughout lifetime

Niagara offers deep customization through modular settings, from basic loop behaviors to complex particle physics. The system's strength lies in combining small adjustments across emitters to create comprehensive effects.

# Creating Niagara Compatible Materials

* Material Setup
 * Create in materials folder
   - Name: m_niagara_particles
 * "Regular materials vs Niagara materials"
   - Regular: vector parameter to base color
   - Niagara: requires special setup
     > Use particle color node for base color
     > "Must change blend mode to translucent"
     > Connect alpha to opacity

* Implementation with Mesh
 * Open upward mesh burst
   - Select mesh renderer
   - Change to m_niagara particles
 * Result
   - Scale color properties now functional
   - Compatible with Niagara system

Niagara materials require specific setup using particle color nodes and translucent blend modes, unlike standard materials. This specialized configuration ensures proper interaction with Niagara's color scaling and particle system features.
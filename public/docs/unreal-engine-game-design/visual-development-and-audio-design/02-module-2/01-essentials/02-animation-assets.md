# Animation Assets & Technical Features

* Animation Sequence
 - Single animation asset
 - Creation methods
   * External programs
     > Blender
     > 3D Studio Max
     > Maya
   * Built-in UE animation features
 - Import details
   * Common type: FBX files
   * Requires compatible skeleton
   * Shows as green color

* Sequence Window Features
 - Bottom right: Animation asset list
 - Top right: Quick links
   * Skeleton
   * Animation
   * Clothing
   * Animation blueprints
 - Timeline elements
   * Notifies
   * Sound effects
   * Visual effects
   * Event triggers
     > Connect to blueprint logic

* Animation Montage
 - Shows as blue color
 - Groups multiple sequences together
 - Primary use: Player-triggered animations
   * Mage casting
   * Sword attacks
 - Enhanced controls
   * Sequence timing
   * Start/end points

* Blend Space
 - Two-direction graph for smooth blends
 - Common use: Movement cycles
 - Axis layout
   * Horizontal: Direction
   * Vertical: Speed
 - Blueprint connection
   * Event graph sets values
   * Anim graph connects variables

Animation systems in UE use sequences as building blocks, combining them through technical systems for smooth visual experiences. Through montages and blend spaces, these small clips transform into fluid character movements.
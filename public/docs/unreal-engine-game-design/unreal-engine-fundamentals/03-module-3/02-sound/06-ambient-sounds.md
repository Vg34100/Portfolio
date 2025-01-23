# Ambient Sounds & 3D Spatial Audio

* Ambient Sound Basics
   * "Backbone of sounds in Unreal Engine"
   * Enhance atmosphere
       - Can loop or play once
       - Background music/narration
       - Continuous or event-triggered

* Adding Ambient Sounds
   * Methods
       - Drag from Place Actors panel
       - Create menu > Sound
       - Drag sound wave/cue to level
   * Auto-activated by default
   * Looping controlled in sound wave asset, not actor panel

* Spatialization Fundamentals
   * "Methods of orienting sound relative to listener"
       - Orientation
       - Attenuation
       - Propagation
       - Obstruction/Occlusion
       - Reverb
   * Settings
       - "False = 2D/flat sound, no panning"
       - "True = comes from specific location"
   * Panning Types
       - Standard: best for speakers
       - Binaural: requires headphones
           * Uses plugin for positioning

* Key Features
   * Non-spatialized radius
       - "3D to 2D transition distance"
       - Prevents jarring position jumps
   * Occlusion
       - Low pass filter (~750 range)
       - Interpolation time (~0.5-0.6)
       - "Filters sound behind barriers"
   * Billboard Scale
       - Adjust size for visibility
       - Help identify sound locations

Ambient sounds form the atmospheric foundation of game audio, using spatialization and occlusion for realistic positioning. Understanding these elements allows for immersive sound design through proper placement and parameter adjustment.
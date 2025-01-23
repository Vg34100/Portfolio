# Audio Asset Import Guide

* First Person Template Example
   * Gun firing projectiles demonstrates
       - Sound effects triggered by events

* Starter Map Audio Elements
   * Contains ambient sounds
       - Fire, smoke, sparks effects
   * Uses attenuation radius
       - Controls sound travel distance
       - Sound gets quieter with distance
       - Outside radius = no sound

* Supported Audio Types
   * Sound Wave Asset Types
       - WAV, OGG, FLAC
       - AIF, OPUS, MP3
   * Technical Specifications
       - Bit depth: 16 or 24
       - Any sample rate accepted
       - Channels: mono, stereo, 4.0, 5.1, 7.1
   * Important Notes
       - All files convert to 16-bit WAV internally
       - 24-bit files not dithered in conversion
       - "16-bit files recommended for import"

* Importing Process
   * Via Content Drawer
       - Can import multiple files at once
       - Save assets after import
   * Preview Options
       - Hover and play for quick listen
       - Double-click for details panel
   * Modification Options
       - Can edit compression settings
       - Adjust codec and quality per platform

Audio importing in Unreal Engine supports various formats with specific technical requirements. The system provides straightforward tools for importing, previewing, and modifying audio assets while maintaining quality through internal conversion processes.
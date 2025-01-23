# Level Design Lighting Stages

* Global Lighting Pass - First Stage
 - Strip level of lights, build from "sky down"
 - Purpose: "Make sure players can see everything needed"
 - BP Light Studio provides:
   * Global illumination
   * Sky box
   * Height fog
   * Skylight
 - Direction considerations:
   * Sun position affects silhouettes
   * Can add volumetric clouds for atmosphere
   * Align with intended player views

* Critical Path Lighting - Second Stage
 - Indoor considerations:
   * Balance dark interiors vs bright exteriors
   * Use point lights for fireplaces/torches
   * Add rect lights for general visibility
     - "Lighting doesn't need physical accuracy"
     - Value end result over realism
 - Destination emphasis:
   * Light key landmarks
   * Create contrast for important buildings
   * Use spotlights without shadows for artificial emphasis

* Gameplay & Mood Lighting - Final Passes
 - Gameplay elements:
   * Light important items/areas
   * Subtle lighting draws attention
   * Use wall lighting for indirect emphasis
 - Mood considerations:
   * Adjust atmosphere density
   * Fine-tune color/intensity
   * Keep changes disposable

* Key Reminder:
 - Everything should be:
   * Disposable if needed
   * Focused on gameplay first
   * Ready for environment designers to enhance

Level lighting progresses from global illumination to specific gameplay emphasis, prioritizing player guidance and visibility. Design focuses on function over realism, keeping modifications disposable for future environment artist refinement.
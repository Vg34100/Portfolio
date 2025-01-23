# Asset Placement Techniques

* Direct Placement:
  - Drag assets directly from Quixel Bridge
  - Proxy mesh shows while downloading
  - Instant placement in world

* Quixel Scatter Blueprint:
  - Key settings:
    * Initial random seed
    * Meshes to spawn (up to 50)
    * Radius control (spacing)
  - Randomization controls:
    * Rotation ranges
    * Scale (min/max)
    * Location offset
    * Height adjustment

  - Tips:
    * Keep mesh count under 50 for performance
    * Bake to level for permanent placement
    * Organize scattered assets in folders
    
* Prefab Creation:
  - Create blueprint class
  - Add components:
    * Static meshes
    * Position/rotate within prefab
    
* Prefab Benefits:
  - Instance management:
    * Individual instance adjustments
    * Global updates via master blueprint
  - Reusable assemblies
  - Efficient scene organization

* Best Practices:
  - Test different random seeds
  - Use slight negative Z offset for natural ground contact
  - Organize assets in logical folders
  - Start simple with prefabs
  - Consider performance with scatter density
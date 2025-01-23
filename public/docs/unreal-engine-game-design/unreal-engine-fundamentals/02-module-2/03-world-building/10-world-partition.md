# World Partition & Level Streaming

* Legacy vs World Partition
 * Old Method:
   - Manual division into sub-levels
   - Manual level streaming systems
   - "Cumbersome working between multiple files"
 * World Partition Solution:
   - Automatic data structure
   - Distance-based streaming
   - Single large map vs multiple sub-levels
   - Loads/unloads grid cells based on distance from player

* Four Core Pillars
 * One File Per Actor
   - Saves data in external hash files
   - Reduces user overlap
   - No need for level checkouts
   - Default with world partition
 * Data Layers
   - Organizes actors into layers
   - Dynamic loading/unloading
   - Blueprint-driven gameplay
   - Replaces old layer system
 * Level Instancing
   - Streamlined level editing
   - Multiple actors in repeatable levels
 * HLOD (Hierarchical Level of Details)
   - Grid-based cell system
   - Dynamic loading at runtime
   - Creates proxy mesh/materials
   - "Reduce draw calls per frame"

* Implementation
 * Enable via:
   - File > New Level > Open World
   - Window > World Settings
   - Window > World Partition
 * Controls:
   - Adjust grid size
   - Set loading range
   - Enable/disable streaming
 * Region Management:
   - Default: regions unloaded
   - Load via minimap selection
   - Right-click > "Load regions from selected"

World Partition revolutionizes large world management through automated cell-based streaming and efficient file management. This system significantly improves performance and team collaboration compared to traditional level systems.
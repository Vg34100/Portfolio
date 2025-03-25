# Creating Modular UI Components & Setup

* Course Module Focus
 * Creating reusable widgets
 * Speeding up UI workflow
 * Implementing flexible design options

* Project Setup Process
 * HUD Setup
   * World Settings
     * Create HUD folder in Coursera
     * New blueprint class > HUD
     * Name: "HUD_Coursera"
   * Root Widget Creation
     * Make UI folder
     * Create root widget folder
     * Name: "W_Root"

* Root Widget Configuration
 * Size Box Settings
   * Name: "Sizebox_Root"
   * Width: 1920
   * Height: 1080
     * "Common widescreen resolutions"
 * Canvas Panel
   * Name: "CanvasPanel_Body"
   * "Stores completed widgets"

* Implementation Steps
 * HUD Event Graph
   * Use create widget node
   * Select root widget
   * Add to viewport
 * Testing
   * Add temporary text
   * Play to verify initialization

Module establishes foundation for modular UI development, focusing on reusable components. Setup process creates organized structure for future UI elements with standardized resolution settings.
# UMG Components Overview

* Common Components
 * Basic Elements
   * Button
   * Checkbox
   * Image
   * Border
     * "Wraps widget with another image"
   * Named slot
     * Used for modular workflows
   * Progress bar
     * Used for: health, mana, stamina, experience
     * "Can be customized with images/textures"
 * Text & Interaction
   * Rich text block
     * Requires data table setup
     * Needs rich text style row struct
   * Sliders
     * Common in options menus
     * Used for inventory value selection

* Input Components
 * Dropdown Options
   * Combo box key
     * "Generates other widgets for dropdown"
   * Combo box string
     * "Text-based options only"
 * Text Input
   * Editable text
     * Basic text input
     * Password option available
   * Multiline text
     * Allows line breaks
   * Text box
     * Similar to editable text
     * Different background style
   * "Hint text = transparent guide text"

* Panel Components
 * Basic Panels
   * Canvas panel
     * "Standard blank board"
   * Grid panel
     * Allows weight per entry
   * Uniform grid
     * "Locks objects to same size"
 * Layout Options
   * Horizontal box
     * "Evenly places in row"
   * Vertical box
     * "Evenly places in column"
   * Stack box
     * "Can swap between horizontal/vertical"
   * Wrap box
     * "Auto-adjusts to box size"
 * Special Panels
   * Scale box
     * "Maintains aspect ratio"
   * Scroll box
     * For oversized content
   * Widget switcher
     * Creates tabs
     * Requires code to swap pages
     * Uses index system (0, 1, 2...)

UMG provides extensive component options for UI creation in Unreal Engine. System focuses on modularity and flexibility, from basic elements to complex panel layouts, with each component serving specific functions in interface design.
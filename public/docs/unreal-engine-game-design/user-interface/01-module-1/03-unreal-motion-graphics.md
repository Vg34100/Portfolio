# UMG & Widget Creation Overview

* UMG (Unreal Motion Graphics)
 * Unreal Engine's UI system
 * Core components for functional UI design
 * Focus: Prototyping before implementation
   * "Solve problems before they occur"
   * Think through design/construction thoughtfully

* Widget Creation Process
 * Access:
   * Right click content browser
   * UI category > Widget Blueprint
   * Select User Widget
 * Interface Layout
   * Top Right: Display options/grid snapping
   * Top Left: UI component categories
   * Right Side: Detailed panel
     * Alignment
     * Style
     * Color options

* Widget Components
 * Events Section (Bottom)
   * Button events:
     * Click
     * Release
     * Press
     * Hover
   * Pre-construct
     * "Alter UI in editor via public variables"
     * Helpful for modular design/tools
   * Event construct
     * Activates on widget creation
   * Event tick
     * Activates every tick

* Additional Features
 * Variables/functions like standard blueprints
 * Overrides available
 * Class settings
   * Interface additions
   * Shows in bottom left for widgets

UMG provides comprehensive UI design tools in Unreal Engine. System focuses on prototyping and modular design with extensive event handling and customization options.
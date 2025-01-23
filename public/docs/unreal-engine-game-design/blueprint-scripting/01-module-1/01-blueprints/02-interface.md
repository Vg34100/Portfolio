# Blueprint Interface Overview

* Content Drawer Access
 * Located at bottom of screen
   - Shortcut: Control + Space
 * Storage structure
   - Holds blueprints and game assets
   - Organized in folder hierarchy

* Creating Blueprints
 * Right-click empty space OR use Add menu
   - Select "Blueprint Class"
   - Choose parent class (Actor for now)
   - Name format: BP_actor

* Blueprint Editor Layout
 * Viewport (Center)
   - Visual representation of actor/meshes
   - Contains tabs:
     • Construction script
     • Event graph
 * Components Panel (Left)
   - Actors = bundle of components working together
   - Example: First person character has multiple components
 * My Blueprint Section
   - Shows graphs, events, functions, macros
   - Variables section
     • Values changeable during/before game
   - Event dispatchers
     • Blueprint communication tool
 * Details Panel (Right)
   - Context-based settings menu
   - Changes based on selection

* Key Interface Elements
 * Top Buttons
   - Class settings
   - Class defaults
     • Parent class settings
 * Compile Button
   - Yellow ? = needs compiling
   - Green ✓ = successfully compiled
   - Red X = errors found
     • View details in compiler results
 * Viewport Tools
   - Movement controls
   - Grid snapping
   - View perspectives

Blueprint interface provides comprehensive tools for visual scripting, with organized panels for components, logic, and settings. The layout is designed to make game development accessible while maintaining powerful functionality.

# Understanding Line Traces

* Line Traces are fundamental blueprint tools
 * Created through blueprint class actor demonstration

* Components Setup
 * Static Mesh Component
   - Cone shape added
   - Line trace shoots from tip
 * Scene Component
   - Empty space/void for positioning
   - Records location, rotation, scale
   - Used as proxy for line trace alignment
   - Faces x-axis by default

* Line Trace By Channel Core Parameters
 * Start Point
   - Uses Scene component world location
 * End Point
   - Requires Forward Vector (normalized direction)
   - Multiply by length (float conversion needed)
   - Final = Start position + offset
 * Trace Channel
   - Controls what objects can be hit

* Visual Debug Indicators
 * Red Line
   - Shows active trace path
   - Red square indicates blocking hit
 * Green Line
   - Appears after blocking hit
   - No more information returned past this point
   - Only returns first object hit

* Collision Interactions
 * Based on object collision settings
   - Physics settings > Collision presets
   - Visibility/camera trace responses
 * Common Issue
   - Characters don't block visibility channels by default
   - Must be configured for character detection

Line traces are essential tools for detecting collisions and interactions in the game world. They work by projecting a line from a start point to detect objects, with their behavior controlled by collision channel settings and object properties.

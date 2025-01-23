# Single vs Multi Traces Implementation

* Single Traces
 * Hits first object only
   - Stops after first hit
   - Shows green line after hit point

* Multi Traces
 * Returns array of hits vs single hit
 * Hit Types:
   - Block
     > Stops trace from going further
     > Shows red square
   - Overlap
     > Registers hit without stopping
     > Shows green square
   - Ignore
     > Passes through object completely

 * Available for all shapes
   - Line trace
   - Box trace.0
   - Sphere trace
   - Capsule trace

 * Trace Behavior
   * Requires overlap setting for multiple hits
     - Blocking hits end trace
     - Multiple overlaps possible before block
   * Visual indicators
     - Green square = detected but not blocked
     - Red square = blocking hit

Multi traces expand on single traces by allowing detection through objects, controlled by collision response settings. This enables more complex interactions like penetrating shots or multi-object detection systems.

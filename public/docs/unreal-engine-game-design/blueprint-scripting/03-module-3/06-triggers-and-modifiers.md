# Enhanced Input Triggers & Modifiers

* Triggers modify input behavior
 * Built-in types:
   - Down: fires on key push
   - Hold: continuous firing while held
     • Has threshold time (default 1s)
     • One shot option = fire once only
   - Hold and release
   - Pressed
   - Pause
   - Released
   - Tap

* Trigger Implementation
 * Can be added via:
   - IMC_Default settings
   - Direct input interaction settings
     • Useful for platform-independent behavior
 * Output options:
   - Elapsed seconds available
   - Can create progress indicators

* Modifiers alter output values
 * Support multiple types:
   - Boolean (on/off)
   - Floats
   - Vector2D
   - Vectors
 * Movement example:
   - Swizzle: swaps X/Y values
     • Used for W/S movement
   - Gate: changes direction
     • Applied to S and left keys
   - W key: swizzle only
   - A/D: negate for left

Enhanced input system offers deep customization through triggers and modifiers, allowing precise control over input behavior and value manipulation. System provides flexibility for different platforms while maintaining consistent behavior across implementations.

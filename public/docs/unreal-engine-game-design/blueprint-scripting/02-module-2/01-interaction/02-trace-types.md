# Different Types of Traces

* Line Trace (already covered previously)

* Sphere Trace
 * Additional parameter: radius (e.g. 50)
 * Creates elongated "sausage shape" trace
 * Use cases:
   - Ideal for pickups
   - When precise targeting not needed

* Box Trace
 * Parameters:
   - Half size (e.g. 50,50,50)
   - Orientation setting
     > Can use forward vector for alignment
 * Projects box-shaped trace
   - Angle adjustable via orientation

* Capsule Trace
 * Key parameters:
   - Range: 35
   - Half height: 88
 * Primary use:
   - Check if position free for player character
   - Ideal for:
     > Climbing steps
     > Ladders
     > Character movement checks
   - Works well because "characters are capsule shapes"

Traces come in various shapes each serving different purposes, from sphere traces for broader detection to capsule traces for character movement. The choice between them depends on specific gameplay needs like pickup systems or character movement validation.

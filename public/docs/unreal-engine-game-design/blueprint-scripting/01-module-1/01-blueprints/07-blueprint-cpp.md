# Blueprint & C++ Relationship

* Visual Scripting Layer
 * Acts between engine and source code
   - Blueprint nodes = "wrappers" for easy click/drag
 * Runtime Translation
   - Play in editor: Real-time blueprint → C++ translation
   - Package build
     • Pre-processes translations
     • "Runs better" than editor play

* Performance Considerations
 * Historical Context
   - Originally slower than C++
   - Now "more efficient and faster"
     • Negligible difference in UE5+
 * Optimization Priority
   - Check rendering before C++ modifications
   - C++ benefits:
     • For loops
     • Similar iterative code

* Source Engine Access
 * View Blueprint Node Code
   - Double click node to see underlying code
 * Custom Development
   - Create C++ classes
   - Make header files
   - Use Visual Studio or alternatives

Blueprints serve as an efficient visual layer over C++, with modern versions nearly matching C++ performance. While some specific tasks benefit from C++, blueprint optimization is rarely a primary concern in current engine versions.

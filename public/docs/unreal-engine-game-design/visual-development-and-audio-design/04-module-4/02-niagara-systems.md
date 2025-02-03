# Using Niagara VFX Systems

* Methods to Use Niagara:
 * Direct Scene Placement
   - Drag from content browser
   - Use 3 dots by play button -> Simulate
   - "Effects only play once by default"
 
 * Loop Settings
   - Open Niagara system
   - Find loop behavior in details
     > Once vs Infinite options
     > Compile & save after changes
 
 * Blueprint Spawning
   - Use "spawn system" nodes
     > Avoid Cascade (Effects category)
     > Use Niagara category instead
   - Two main approaches:
     > Spawn at location
       - Needs actor location
       - Effect stays in place
     > Spawn system attached
       - Connects to mesh component
       - Uses bones/sockets
       - "Travels with character movement"
 
 * Animation Notify Method
   - Right-click Notify track
   - Choose Play Niagara effect
   - Can adjust:
     > Spawn location
     > Rotation
   - Triggers with animation

Niagara systems offer versatile implementation methods from simple dragging to complex animation integration. Each approach serves different needs, with options for static placement or character-attached effects.
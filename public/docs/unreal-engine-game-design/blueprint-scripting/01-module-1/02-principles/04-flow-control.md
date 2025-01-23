# Flow Control & Logic in Blueprints

* Connecting Nodes
 - Nodes connected via pins (circles/arrows)
   > Click & drag between pins
   > Break links by:
     * Right click > break link
     * Hold alt + click
 - Control + click/drag to move connections

* Code Organization
 - Reroute nodes
   > Double click line to add redirect pin
 - Flow control lines (white)
   > Cannot branch directly
   > Need special nodes for branching

* Branch Node
 - Access via:
   > Right click > search "branch"
   > Shortcut: B + left click
 - Structure:
   > One input execute line
   > Condition check
     * True/False paths
     * Can use variables as conditions
 - Example Pattern:
   > Event start
   > Condition check
   > Results

* Other Flow Controls
 - Flip Flop
   > Alternates outputs each trigger
 - Additional types:
   > Loops: for, while, do while
   > Gates
   > Do once
   > Multi gate
   > Delay

* "Blueprint Pattern"
 - Events/Functions follow:
   > Start event
   > Condition check
   > Result execution

Blueprint flow control provides ways to organize and direct code execution through various nodes and conditions. Branch nodes and flip flops are fundamental tools for creating conditional logic paths, while keeping code organized through proper routing and pattern structure.

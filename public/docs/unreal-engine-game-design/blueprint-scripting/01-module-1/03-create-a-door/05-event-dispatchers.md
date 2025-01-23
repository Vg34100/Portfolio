# Event Dispatchers & Button References

* Button Variable Setup in Door
 - New variable type: BP button
 - Reference Options:
   > Object reference: "for existing world items"
   > Class reference: "for non-existent items"
   > Soft versions of each
 - Made instance editable
   > Accessible in details panel
   > Can use eyedropper tool for selection
     * "Useful in large levels"

* Event Dispatcher Binding
 - Located in Details Panel
   > Events section shows "on button triggered"
   > Plus icon adds bound event
 - Bound Event Properties
   > Only fires when button triggers
   > Passes "is triggered" input
     * True = unlock door
     * False = keep locked

* Communication Flow
 - Door references specific button
 - Button triggers event dispatcher
 - Door listens for bound event
   > Checks "is triggered" state
   > Performs unlock/lock based on state

Event dispatchers create communication channels between blueprints, allowing buttons to trigger specific doors through object references and bound events. System provides flexible, instance-editable control over door-button relationships.

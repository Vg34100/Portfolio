# Trace Channels & Custom Configuration

* Trace Channel Types
 * Default engine channels
   - Visibility
   - Camera
 * All objects have response to trace channels
 * Custom channels can be added (up to 18 combined with object channels)

* Creating Custom Trace Channels
 * Access through:
   - Edit > Project Settings
   - Engine Section > Collision
 * Configuration options:
   - Name channel (e.g. "interaction")
   - Set default response
     > "Inclusive vs Exclusive" approach
     > Ignore default = fewer interactable objects
   - Can be modified later if needed

* Implementation Process
 * Must compile after creating new channel
 * Channel appears in trace options
   - Visibility
   - Camera
   - New custom channel
 * Object collision settings
   - Default to chosen response (e.g. ignore)
   - Can be changed per object
     > Block button enables interaction
     > Objects set to ignore will be passed through

Trace channels provide granular control over object interactions, with both default and custom options. The system allows for precise configuration of what objects can be detected by different types of traces.

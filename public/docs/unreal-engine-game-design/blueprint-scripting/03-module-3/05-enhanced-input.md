# Enhanced Input Actions System

* Enhanced Interactions = new UE5 input system
 * Two Core Components:
   - Context (yellow)
     • Defines key bindings
     • Maps keys to actions
   - Actions (light blue)
     • Simple names/values
     • Output settings defined here

* Player Controller Setup Required
 - Enhanced input needs registration:
   • On begin play:
     - Get enhanced input local player subsystem
     - Add mapping context if valid
     • "Check controller if inputs not working"

* Creating New Input Actions
 * Input Folder Process:
   - Create new interaction (IA_Sprint example)
   - Add to IMC_Default
     • Click + for mapping
     • Set key binding (shortcut: click + press key)

 * Blueprint Implementation
   - Replace hardcoded inputs with IA inputs
   - Use Started/Completed triggers
     • Started = initial press
     • Canceled/Completed = release
   - "Avoid constant triggering with Triggered event"

Enhanced Input System provides flexible, maintainable way to handle game inputs by separating contexts from actions. System requires proper controller setup and offers clean implementation through blueprints replacing hardcoded values.

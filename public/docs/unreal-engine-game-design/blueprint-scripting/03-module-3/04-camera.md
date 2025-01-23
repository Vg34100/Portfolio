# Camera Setup & Perspective Switching

* First Person View Setup
 * Add camera to mesh:
   - Parent to character head socket
   - Turn Auto Activate off by default

 * Switch Perspective Function:
   - Track camera states (FP/TP)
   - Switch between cameras:
     • Deactivate current, activate other
     • Triggered by right mouse button

 * First Person Camera Settings
   - Enable "Use Pawn Control Rotation"
   - Disable orient rotation when in FP
     • Only use rotation settings in TP mode

* Spring Arm (Camera Boom) Settings
 * Core Functions:
   - Creates collision-based camera distance
   - Rotates with pawn control
     • "Use Pawn Control Rotation" = true

 * Customization Options:
   - Socket Offset
     • Right: 60
     • Up: 60
   - Target Arm Length
     • Closer = 200 for shooter style
     • Further for casual/town experience
   - All adjustable during gameplay

First person and third person perspectives can be dynamically switched using camera activation states and proper rotation settings. Spring arm provides flexible camera positioning with collision awareness, allowing for different gameplay styles.

# Animation Blueprint Overview

* Module Goals
 - Cover animation essentials
 - Explore impact through:
   * Combat
   * Storytelling
 - Implementation focus:
   * Reviewing UE core systems
   * Creating project with Mixamo animations
   * Future game design prototyping

* Animation Blueprint Fundamentals
 - "Script defining animation play & blend choices"
   * Also known as state machines
 - Two main sections:
   * Event Graph
     > Runs every frame
     > Checks character changes
     > Updates local variables
       - Speed
       - Movement status
       - Fall state
       - Direction
   * Animation Graph (anim graph)
     > Sets up animation states
     > Controls state flow
       - Idle → standing still
       - Run → high speed
       - Jump sequence:
         · Jump up
         · Fall
         · Land
         · Return to run

Animation blueprints serve as the backbone for smooth character movement, managing the complex flow between different animation states. They continuously monitor character status and seamlessly transition between appropriate animations based on defined conditions.
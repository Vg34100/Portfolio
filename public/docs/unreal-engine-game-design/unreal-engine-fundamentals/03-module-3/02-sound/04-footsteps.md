# Implementing Basic Character Footsteps

* Third Person Character Setup
   - Open any project with third person template
   - Navigate to mannequins/animations/quin or manny 
       * Focus on MF_run_forward & MF_walk_forward

* Animation Sequence Setup
   - Double click animation sequence to open
       * Has looping animation of character running
   - Notifications
       * Notifies game when something needs to happen
       * Uses "R" and "L" sync markers for feet

* Adding Sound Notifications
   - Insert notify track
       * Right click playhead > Add Notify
       * Select "Play Sound"
   - Sound Selection
       * Choose sound cue (not individual steps)
       * Avoids repetitive single sound issue
   - Warning
       * Don't use Ctrl+C/V for copying notifies
       * Use right-click copy/paste to avoid crashes

* Implementation Process
   - Place playhead at foot placement notifies
   - Right click > paste notify under track 2
   - Save asset
   - Test with Play
       * Note: Jump landing sound missing
           - Left as exercise for viewer

Basic footstep implementation involves linking sound cues to animation notifies at key foot placement moments. Process is straightforward but requires careful attention to notification timing and proper sound cue selection.
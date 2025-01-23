# Bug Testing & Regression Cycle

* Fault/Bug Testing Purpose
 - Remove defects before release
 - Needs standardized reporting

* Bug Cycle Process
 - Find bug
   * Check if already reported
     > If found: append to existing
     > If new: create report
 - Assessment by QA lead
   * Determines status

* Bug Statuses
 - Not Repro
   * Can't reproduce with same steps
   * Often hardware/software config issues
 - Won't Fix
   * Resources > value of fix
 - By Design
   * "It's not a bug, it's a feature"
   * Game functioning as intended
 - Duplicate
   * Already exists but hard to find
   * Description mismatch
 - Postponed
   * No current resources/time
 - External
   * Issue in external tools
   * Outside developer control
 - Fixed
   * "Best status"
   * Bug resolved

* Regression Stage
 - Bug tested again
 - Goes through cycle
 - Aims for "fixed" status

* Level Designer Role
 - "Front lines" of player/game interaction
 - Will find many bugs
 - Need to understand bug lifecycle
   * For QA communication

Bug reporting follows a structured cycle from discovery through resolution. As level designers interface directly with gameplay, understanding this process is crucial for effective QA collaboration.
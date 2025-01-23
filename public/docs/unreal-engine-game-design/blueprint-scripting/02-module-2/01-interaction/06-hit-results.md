# Hit Results & Data From Traces

* Line Trace Hit Data
 * Can break hit results to expose returned data
   - blocking hit/overlap status
   - distance & time
   - impact details
     > location
     > normal
     > bone name (useful for character hits)

* Location vs Impact Point
 * For line traces: "identical"
 * For shape traces (sphere, etc):
   - Location = center of shape hit
   - Impact point = actual collision point
 * Same applies to normal values

* Multi Trace Results
 * Returns array of hits
   - Can use foreach loop to cycle through
   - "Array ordered by hit sequence"
   - Get first hit using Index 0
 * Each hit can be broken down like single trace
   - Contains same data structure
   - Can process each hit (damage, effects, etc)

Hit results provide detailed collision information that varies based on trace type. Single traces give immediate data while multi traces return ordered arrays that can be processed for complex interactions.

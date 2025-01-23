# Print String Usage & Debug Features

* Print String Behavior
 * Running on tick event
   - Prints every frame
   - Duration setting (2 seconds default)
     > 0 seconds = single frame display
     > Shows one line at a time on tick

* Debug Features
 * Text color customization
   - Different colors for different strings
   - Helps distinguish multiple prints
 * Output options
   - Print to screen
   - Print to log
     > Output log viewable later
     > Can disable log printing
   - Can enable/disable either option

* Development Settings
 * "Development Only" warning
   - Won't print in shipping builds
 * Build types
   - Development: prints strings
   - Shipping: strings disabled
   - Debug: development features
     > Can leave prints during development
     > Players won't see in final game

Print strings serve as a versatile debugging tool with customizable display options and logging capabilities. Their development-only nature ensures debug messages don't appear in final builds while maintaining utility during development.

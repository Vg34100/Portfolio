# Creating Trigger Parent Class & Children

* Creating Base Trigger Class (BP_Trigger)
 * Created in new folder for organization
 * Added "OnTriggered" event dispatcher
   - Named based on "what event is happening"
   - Added Boolean input "IsTriggered"

* Child Classes Created
 * Three children inherit from BP_Trigger:
   - BP_Button (wall button)
   - BP_Lever
   - BP_PressurePad (converted from existing)

* Converting Existing PressurePad
 * Changed parent class from Actor to BP_Trigger
 * Removed old "OnButtonTriggered" dispatcher
 * Updated to use parent's "OnTriggered" instead
   - Set IsTriggered to true on trigger
   - Set to false on timeout

* Viewing Inherited Content
 * Two methods to see available inherited items:
   - Check Class Defaults section
   - Enable "show inherited variables" in Blueprint settings
     * Shows all inherited variables/dispatchers/functions

* Door Updates
 * Changed button reference to accept any BP_Trigger type
 * Updated event binding from OnButtonTriggered to OnTriggered
 * Connected to existing branch logic

Created a foundational trigger system using inheritance, allowing for different trigger types while sharing core functionality. System designed to be extensible for future trigger variations and gameplay reactions.

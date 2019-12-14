# ma3-translate-osc

This is repository contains all necessary files to use an iPad with touchosc to control the MA3 lighting software.
To run this software, you (currently) need an installation of node.js and TouchOSC.

## Installation

Clone this git repository, then setup the node environment by running `npm install` in the project directory.
Install the TouchOSC application and app to synchronize the MA3.touchosc file to your iPad.
Finally, copy the MA3TranslateOSC folder to a location you can access from the MA3 software (import directory, usb stick).

## Usage

Run the application with `npm start`. Set the IP address in the TouchOSC app to the address of your computer and the outgoing port to 7000.
Then load up your MA3 showfile and import the plugin MA3TranslateOSC as plugin pool item 101.
Enter the In & Out settings in the menu, select the OSC remote and check that the ethernet interface is set correctly.
Set the port to 8000 and set ReceiveCmd to Yes. Activate the button marked Activate Input, if it's not already activated.
The setup should work now. Check if you are receiving button events in the commandline, and test if the button events are relayed to MA3.
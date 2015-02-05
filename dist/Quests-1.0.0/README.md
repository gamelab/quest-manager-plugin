Name: BitmapText Plugin.
Version: 1.0.1
Type: GameObject Plugin

----------------------------------------------------------------------------------------
Versions
----------------------------------------------------------------------------------------

1.0.1
	- Text no longer 'breaks'/wrap's mid word anymore.
	- More Documentation added to the plugin and to the README.md.
	- Text parameter no longer required to be passed upon instatiation.
	- A 'defaultCell' now exists. This cell is the 'default' cell that will be used when one could not be found.
	- Words which would be longer than a single line now 'break/wrap' when a maxWidth is set.

1.0 - Initial GameObject create. 
	- Single line text support.
	- Multiline text supported in a basic sense.
	- Renders to Canvas.

----------------------------------------------------------------------------------------
Files:
----------------------------------------------------------------------------------------
	

----------------------------------------------------------------------------------------
Description:
----------------------------------------------------------------------------------------
The BitmapText is a Plugin for Kiwi.js that you can included to have a new GameObject in your Kiwi Game's that is used to render BitmapText on a Kiwi Game.

Currently this is only supported on CANVAS kiwi games but support for WEBGL is planned! 

If you have any problems then feel free to contact us via the http://www.kiwijs.org/help

----------------------------------------------------------------------------------------
How to Include: 
----------------------------------------------------------------------------------------

First Step:
- Copy either the bitmapText-1.0.1.js or the bitmapText-1.0.1.min.js file (they should be right next to this one right now) into your project directory. We recommend that you save the files under a plugin directory that lives inside of your project directory so that you can easily manage all of the plugins but that is not required.


Second Step:
- Link in the JavaScript file (bitmapText-1.0.0.js or the min version of the file) into your HTML file. Make sure you link it in underneath the link to the main Kiwi.js file AND underneath the Cocoon files.


----------------------------------------------------------------------------------------
How to use.
----------------------------------------------------------------------------------------

--------------------------------------------
Take Note!
-------------------------------------------- 
- This plugin currently only works on CANVAS games. WEBGL support coming soon. 

--------------------------------------------
Creating a new Object
--------------------------------------------
- To create a new Gameobject is the same as how you would a Sprite or Static Image.

	1 - First you create a variable for where it should be saved and instantiate the 'Kiwi.Plugins.GameObjects.BitmapText' object. 
	    Make sure you pass into the object at least the 'State' you are adding it to and the Texture Atlas you are going to use for rendering.
		
		var myTextField = new Kiwi.Plugins.GameObjects.BitmapText(this, this.textures.textureAtlasName, 'Hello World');

	2 - Add it to the Stage (or a Group) to see you text rendered.
		
		this.addChild(myTextField);

--------------------------------------------
Changing Character/Cell References
--------------------------------------------
- When you use this plugin you are required to pass into it a TextureAtlas of the image and cells that you want to use for the text.
- There are default values set for which cell relates to which character but you change/add more by adding/changing the values on the 'alphabeticalCells' property of each GameObject.  

----------------------------------------------------------------------------------------
TO DO:
----------------------------------------------------------------------------------------

- Use the 'hitbox' of cells to space out characters from one another instead of regular width/height BUT make sure all of the characters will still render. This way characters where there is a bit of 'overlap' (like 'v', 'w', e.t.c) in the serifs can still 'overlap' with other characters.

- Perhaps have a maximum height as well as width.

- Spacing between lines. And perhaps a general line-height setting instead of based on cell at the time..

- Global 'alphabeticalCells' that which are the default initially for all BitmapTextfields. Would be better if it was TextureAtlas dependant although. 

- Alignment of text. E.g center, left, right.

- Use of new line characters. E.g. \n or \t for tab.

Quest Manager
=======================================

Name: quest-manager-plugin

Version: 1.0.0

Author: Kiwi.js Team

Website: www.kiwijs.org

KiwiJS last version tested: 1.2.0

## Version Release Notes

1.0.0

- Initial build.
- Initial GameObject create. 
- Quest creation.
- Starting, updating and completing quests.
- Check started, complete and active states of any given quest.
- Return description of quest and objective.

## Description:

The Quest Manager is a Plugin for Kiwi.js that you can include to have a new GameObject in your Kiwi Game's that is used to create, update ad complete custom quests.

If you have any problems then feel free to contact us via the http://www.kiwijs.org/help

## Dependencies

- Kiwi.js version 1.0.0 or greater

## How to Include: 

First Step:
- Copy either the Quests-1.0.0.js or the Quests-1.0.0.min.js file (they should be in the src folder) into your project directory. We recommend that you save the files under a plugin directory that lives inside of your project directory so that you can easily manage all of the plugins but that is not required.

Second Step:
- Link in the JavaScript file (Quests-1.0.0.js or the min version of the file) into your HTML file. Make sure you link it in underneath the link to the main Kiwi.js file AND underneath the Cocoon files.

You're ready to roll!

## How to use

--------------------------------------------

Creating a new Object

--------------------------------------------

To create a new Gameobject is the same as how you would a Sprite or Static Image. Create a variable for where it should be saved and instantiate the 'Kiwi.Plugins.QuestManager' object.
 
	    
    var questManager = Kiwi.Plugins.QuestManager;

--------------------------------------------

Creating quests

--------------------------------------------

To create a new quest, simply call the createQuest method and pass the following parameters.

	
	@param id {string} The name of the quest created.

	@param typeVar {string} The type of quest created. 'number' or 'boolean'.

	@param startValue {boolean or number} Starting value.

	@param objectiveVar {boolean or number} Objective value. Once the current value matches, quest is completed.

	@param descriptionVar {string} String describing item.

    questManager.createQuest('testQuest', 'number', 0, 5, 'Click 5 times!');

Any questions, feel free to ask!

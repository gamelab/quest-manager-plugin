/**
* The basic Quest Manager Object. Contains name and version number. 
* 
* @module Kiwi
* @submodule Plugins
* @namespace Kiwi.Plugins
* @class QuestManager
*/
Kiwi.Plugins.QuestManager = {
    name: 'Quests',
    version: '1.0.0'
};

//CREATING QUESTS
/**
*A Kiwi Plugin GameObject that can manage a set of quests.
*
*You can currently set two types of quests. 
*Number quests keep track of a variable, and once it has reached it's specified objective, the quest is completed.
*Boolean quests keep track of a variable and once it is true or false, depending on the objective set, the quest is completed.
*
* @class QuestManager
* @extends Entity
* @namespace Kiwi.Plugins.Quests
* @constructor
*/

/*
VALUES:
active: Set if a quest has been started, and not yet completed.
complete: Set if a quest has been successfully completed.
type: 'number' or 'boolen'.
objective: Required value to complete an active quest.
current: Current value. Need to set current value to your objective value to complete a quest.
description: A string used to aid the player.

EXAMPLE:
Kiwi.Plugins.QuestManager.Quests = {
    //Set your quests below
    numberExample: {
        active: false,
        complete: false,
        type: 'number',
        objective: 5,
        current: 0,
        description: 'Collect 5 items.'
    },

    booleanExample: {
        active: false,
        complete: false,
        type: 'boolean',
        objective: true,
        current: false,
        description: 'Complete a simple task.'
    }
}
*/

Kiwi.Plugins.QuestManager.Quests = {
    //Set your quests below. 'test' is a temporary example.
    test: {
        active: false,
        complete: false,
        type: 'number',
        objective: 5,
        current: 0,
        description: 'Collect 5 items.'
    }
}

Kiwi.PluginManager.register(Kiwi.Plugins.QuestManager);

/**
* A method that creates a new quest. A quest is not started until startQuest is called, this method only creates and stores a new quest.
* @method createQuest
* @param id {string} The name of the quest created.
* @param typeVar {string} The type of quest created. 'number' or 'boolean'.
* @param startValue {boolean or number} Starting value.
* @param objectiveVar {boolean or number} Objective value. Once the current value maches, quest is completed.
* @param descriptionVar {string} String describing item.
* @public
*/
Kiwi.Plugins.QuestManager.createQuest = function(id, typeVar, startValue, objectiveVar, descriptionVar){
    Kiwi.Plugins.QuestManager.Quests[id] = {
        active: false,
        complete: false,
        type: typeVar,
        objective: objectiveVar,
        current: startValue,
        description: descriptionVar
    }
}

/**
* A method that starts a created quest.
* @method startQuest
* @param id {string} Name of quest to start.
* @public
*/
Kiwi.Plugins.QuestManager.startQuest = function (id) {
    if (Kiwi.Plugins.QuestManager.Quests[id] == undefined) {
        console.log('Quest Manager: Error starting quest. Attempted id:', id);
        return;
    }
    Kiwi.Plugins.QuestManager.Quests[id].active = true;
}

/**
* A method that completes a quest.
* @method completeQuest
* @param id {string} Name of quest to complete.
* @public
*/
Kiwi.Plugins.QuestManager.completeQuest = function (id) {
    if (Kiwi.Plugins.QuestManager.Quests[id] == undefined) {
        console.log('Quest Manager: Error completing quest. Attempted id:', id);
        return;
    }
    Kiwi.Plugins.QuestManager.Quests[id].active = false;
    Kiwi.Plugins.QuestManager.Quests[id].complete = true;
}

/**
* A method that updates a quest, and completes the quest automatically if the objective is met.
* @method updateQuest
* @param id {string} Name of quest to update.
* @param value {boolean or number} Value to add to the current variable, or to set to, depending on type.
* @public
*/
Kiwi.Plugins.QuestManager.updateQuest = function (id, value) {
    var quest = Kiwi.Plugins.QuestManager.Quests[id];
    if (quest == undefined) {
        console.log('Quest Manager: Error updating quest. Attempted id:', id, ',attempted value:',value);
        return;
    }
    if (typeof (value) == typeof (quest.current)) {
        if (typeof (value) == 'number') {
            quest.current += value;
            if (quest.current >= quest.objective) {
                Kiwi.Plugins.QuestManager.completeQuest(id);
            }
        } else if (typeof (value) == 'boolean') {
            quest.current = value;
            if (quest.current === quest.objective) {
                Kiwi.Plugins.QuestManager.completeQuest(id);
            }
        }
    }
}

/**
* A method that returns whether a quest has been started or not.
* @method checkStarted
* @param id {string} Name of quest to check.
* @return {boolean} Has the quest been started?
* @public
*/
Kiwi.Plugins.QuestManager.checkStarted = function (id) {
    if (Kiwi.Plugins.QuestManager.Quests[id] == undefined) {
        console.log('Quest Manager: Error checking quest. Attempted id:', id);
        return;
    }
    if (Kiwi.Plugins.QuestManager.Quests[id].complete || Kiwi.Plugins.QuestManager.Quests[id].active) return true;
    return false;
}

/**
* A method that returns whether a quest has been started and is also active or not.
* @method checkActive
* @param id {string} Name of quest to check.
* @return {boolean} Is the quest currently active?
* @public
*/
Kiwi.Plugins.QuestManager.checkActive = function (id) {
    if (Kiwi.Plugins.QuestManager.Quests[id] == undefined) {
        console.log('Quest Manager: Error checking quest activity. Attempted id:', id);
        return;
    }
    if (Kiwi.Plugins.QuestManager.Quests[id].active) return true;
    return false;
}

/**
* A method that returns whether a quest has been completed or not.
* @method checkCompleted
* @param id {string} Name of quest to check.
* @return {boolean} Has the quest been completed?
* @public
*/
Kiwi.Plugins.QuestManager.checkCompleted = function (id) {
    if (Kiwi.Plugins.QuestManager.Quests[id] == undefined) {
        console.log('Quest Manager: Error checking quest completion. Attempted id:', id);
        return;
    }
    if (Kiwi.Plugins.QuestManager.Quests[id].complete) return true;
    return false;
}

/**
* A method that returns the description string of any given quest.
* @method returnDescription
* @param id {string} Name of quest to check.
* @return {string} Quest description.
* @public
*/
Kiwi.Plugins.QuestManager.returnDescription = function (id) {
    if (Kiwi.Plugins.QuestManager.Quests[id] == undefined) {
        console.log('Quest Manager: Error requesting description. Attempted id:', id);
        return;
    }
    return Kiwi.Plugins.QuestManager.Quests[id].description;
}

/**
* A method that returns required value for current quest.
* @method returnObjective
* @param id {string} Name of quest to check.
* @return {boolean or string} What is needed to complete the quest.
* @public
*/
Kiwi.Plugins.QuestManager.returnObjective = function (id) {
    if (Kiwi.Plugins.QuestManager.Quests[id] == undefined) {
        console.log('Quest Manager: Error requesting objective. Attempted id:', id);
        return;
    }
    return Kiwi.Plugins.QuestManager.Quests[id].objective;
}
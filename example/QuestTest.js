var questManager = Kiwi.Plugins.QuestManager;

/*console.log('QUEST MANAGER')
console.log('\nTesting a numbered quest.', questManager.returnDescription('test'));
console.log('Check to see if quest has been started:', questManager.checkStarted('test'));
questManager.startQuest('test');
console.log('Check to see if quest has been started now:', questManager.checkStarted('test'));
questManager.updateQuest('test', 5);
console.log('Check to see if quest has been completed:', questManager.checkCompleted('test'));

//dynamically set a quest
questManager.createQuest('testBool', 'boolean', false, true, 'Complete a dynamic boolean');

console.log('\nTesting a boolean quest.', questManager.returnDescription('testBool'));
console.log('Check to see if quest has been started:', questManager.checkStarted('testBool'));
questManager.startQuest('testBool');
console.log('Check to see if quest has been started now:', questManager.checkStarted('testBool'));
questManager.updateQuest('testBool', true);
console.log('Check to see if quest has been completed:', questManager.checkCompleted('testBool'));

console.log('\nTest complete.\n');
*/

var QuestExample = new Kiwi.State('QuestExample');

QuestExample.create = function () {
    questManager.createQuest('testQuest', 'number', 0, 5, 'Click 5 times!');

    this.descText = new Kiwi.GameObjects.Textfield(this, 'Hello to the world', 0, 10, '#000');
    this.descText.text = 'Quest: ' + questManager.returnDescription('testQuest');
    this.addChild(this.descText);

    this.startedText = new Kiwi.GameObjects.Textfield(this, 'Hello to the world', 0, 50, '#000');
    this.startedText.text = 'Started: ' + questManager.checkStarted('testQuest');
    this.addChild(this.startedText);

    this.statusText = new Kiwi.GameObjects.Textfield(this, 'Hello to the world', 0, 90, '#000');
    this.statusText.text = 'Active: ' + questManager.checkActive('testQuest');
    this.addChild(this.statusText);

    this.countText = new Kiwi.GameObjects.Textfield(this, 'Hello to the world', 0, 130, '#000');
    this.countText.text = 'Count: ' + questManager.Quests.testQuest.current;
    this.addChild(this.countText);

    this.game.input.onUp.add(this.pressButton);
}

QuestExample.pressButton = function () {
    if (!questManager.checkStarted('testQuest')) {
        questManager.startQuest('testQuest');
    }

    QuestExample.startedText.text = 'Started: ' + questManager.checkStarted('testQuest');

    questManager.updateQuest('testQuest', 1);

    QuestExample.countText.text = 'Count: ' + questManager.Quests.testQuest.current;
    if (questManager.checkCompleted('testQuest')) {
        QuestExample.countText.text = 'Quest complete!';
    }
    QuestExample.statusText.text = 'Active: ' + questManager.checkActive('testQuest');
}

if (typeof gameOptions == "undefined") gameOptions = {};

var game = new Kiwi.Game('game', 'QuestExample', QuestExample, gameOptions);
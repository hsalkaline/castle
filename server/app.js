var Game = require('logic/Game/Game'),
    Player = require('logic/Player/Player'),
    Card = require('logic/Card/Card'),
    ResourceBag = require('logic/Resources/ResourceBag/ResourceBag'),
    assert = require('assert'),
    util = require('util');

var Alice = new Player(),
    Bob = new Player(),
    game = new Game({
        maxPlayers: 2
    });

game.join(Alice);
game.join(Bob);
game.start();


Alice.play(Card.Messenger);
Bob.play(Card.Messenger);

//
//math = require('math');
//_ = require('underscore')
////
//
//commonResourceReserve = new ResourceBag({
//    sand: 30,
//    wood: 30,
//    bricks: 30,
//    stones: 30,
//    silver: 30,
//    money: 100
//});
//
//
//startingResources = {
//    defenceTower: function () { return commonResourceReserve.take({
//        sand: 1,
//        wood: 1,
//        bricks: 1,
//        stones: 1,
//        silver: 1
//    }); },
//    player: function () { return commonResourceReserve.take({
//        money: 3,
//        sand: 1,
//        wood: 1
//    }) }
//}
//
//defenceTower = new DefenceTower({
//    resources: startingResources.defenceTower()
//})
//
//var scoreTable = {
//    'A': 0,
//    'B': 0
//}
//
//movePrecedence = ['Messenger', 'Trader', 'Bricklayer', 'Stonemason', 'Worker', 'MaterBuilder'];
//
//roundsMoney = new ResourceBag({
//    money: _.contains([2, 4], game.players.length) ? 12 : 15;
//})
//
//
//Worker.provision = function(bag) {
//    this.resources.put(bag);
//}
//
//Worker.play = function(player) {
//    game.allowBuild({
//        player: player,
//        count: 2
//    }).then().allowPlaceServantInCastle({
//        player: player,
//        count: 2
//    });
//}
//
////...
//
//
//Building = function() {}
//
//_(Building.prototype).extend({
//    buildPrice
//    scoreReward
//    servantSlots
//})
//
//ServantSlot: {
//    price
//    effect
//}
//
//BuildingInstance
//ServantSlotInstance

//create-game piupiu
//join-game piupiu
//
//select-color red
//select-card worker1
//
//select-worker-resources [stone, wood, sand]
//build big-gates
//place-servant sand //торговец
//place-servant big-gates, slot1 //здание
//remove-servant wood
//buy-resource-from-worker blue-player silver
//grab-resources silver //builder
//
//Player {
//    gold
//    resources
//    cards
//    points
//    color
//    servants
//}
//
//effect {
//    buildCount
//    servantPlaceCount
//    merchantServantPlaceCount
//    canBuyResourceFrom: [r,g,b]
//    takeResourcesFromTowerCount
//}
//
//dropEffect()
//
//getRewardForBuilding(building, resorceBag, card)

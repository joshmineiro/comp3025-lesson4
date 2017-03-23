/* core game script */
/// <reference path="./_reference.ts"/>
//IIFE - Immediately Invoked Function Expression
(function () {
    //CreateJS variables
    var canvas;
    var stage;
    //Game variables
    var helloLabel;
    function Start() {
        canvas = document.getElementById("canvas"); //get reference to canvas element
        stage = new createjs.Stage(canvas); //creating new stage object
        createjs.Ticker.framerate = 60; //set fps to 60
        createjs.Ticker.on("tick", Update); //calls the update function every frame
        Game();
    }
    function Update(event) {
        helloLabel.rotation += 5; //rotate clockwise 5 degrees every frame
        stage.update(); // manually refreshes/redraws stage
    }
    function Game() {
        console.log("Game started...");
        helloLabel = new objects.Label("Hello world!", "40px Consolas", "#000000", true, 160, 240);
        stage.addChild(helloLabel);
    }
    window.onload = Start; //calls the start function when the window finishes loading
})();
//# sourceMappingURL=game.js.map
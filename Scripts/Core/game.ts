/* core game script */

//IIFE - Immediately Invoked Function Expression

(function(){
//CreateJS variables
let canvas: HTMLElement;
let stage: createjs.Stage;

//Game variables
let helloLabel: createjs.Text;

function Start(): void{
    canvas = document.getElementById("canvas"); //get reference to canvas element
    stage = new createjs.Stage(canvas); //creating new stage object
    createjs.Ticker.framerate = 60; //set fps to 60
    createjs.Ticker.on("tick", Update); //calls the update function every frame

    Game();
}

function Update(event:createjs.Event):void{

    helloLabel.rotation += 5; //rotate clockwise 5 degrees every frame

    stage.update();// manually refreshes/redraws stage
}

function Game():void{
    console.log("Game started...")

    helloLabel = new createjs.Text("Hello world!", "40px Consolas", "#000000");
    helloLabel.regX = helloLabel.getMeasuredWidth() * 0.5;
    helloLabel.regY = helloLabel.getMeasuredHeight() * 0.5;
    helloLabel.x = 160;
    helloLabel.y = 240;
    stage.addChild(helloLabel);
}

window.onload = Start; //calls the start function when the window finishes loading

})();
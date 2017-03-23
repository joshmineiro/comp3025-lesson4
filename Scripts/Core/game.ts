/* core game script */
/// <reference path="./_reference.ts"/>

//IIFE - Immediately Invoked Function Expression

(function(){
//CreateJS variables
let canvas: HTMLElement;
let stage: createjs.Stage;

//Game variables
let helloLabel:objects.Label;
let clickMeButton:objects.Button;

function Start(): void{
    canvas = document.getElementById("canvas"); //get reference to canvas element
    stage = new createjs.Stage(canvas); //creating new stage object
    stage.enableMouseOver(20); //enable mouseOver events every 20 frames
    createjs.Ticker.framerate = 60; //set fps to 60
    createjs.Ticker.on("tick", Update); //calls the update function every frame

    Game();
}

function Update(event:createjs.Event):void{



    stage.update();// manually refreshes/redraws stage
}

function Game():void{
    console.log("Game started...")

    //add helloLabel to the stage and display it
    helloLabel = new objects.Label("Hello world!", "40px Consolas", "#000000", 160, 240, true);
    stage.addChild(helloLabel);

    //add clickMeButton to the stage
    clickMeButton = new objects.Button("../../Assets/images/clickMeButton.png", 160, 300, true);
    stage.addChild(clickMeButton);

    //register event listener with an anonymous event handler
    clickMeButton.on("click", (event:createjs.MouseEvent) => {
        helloLabel.text = "Goodbye.";
    });
}

window.onload = Start; //calls the start function when the window finishes loading

})();
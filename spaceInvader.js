"use strict";

// alert("Draw your space invader here");

drawSpaceInvader();

function drawSpaceInvader() {

    let canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let context = canvas.getContext("2d");

    //Background
    context.beginPath();
    context.rect(100, 125, 300, 300);
    context.fill();

    //Space Invader
    context.fillStyle = "#00ff00";
    context.beginPath();
    //left cap
    context.rect(125, 150, 50, 100);
    context.rect(175, 150, 50, 50);
    //right cap
    context.rect(275, 150, 50, 50);
    context.rect(325, 150, 50, 100);
    //cross
    context.rect(225, 200, 50, 200);
    context.rect(175, 250, 150, 50);

    context.fill();
}
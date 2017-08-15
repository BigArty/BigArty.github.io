/**
 Created by BigArt on 08.07.2017.
 */
"use strict";

function fail() {
    check = 1;
}

var check = 0.5;

function start() {
    /*document.body.innerHTML = "<canvas id=\"a\" width=\"300\" height=\"225\"></canvas>";
    var b_canvas = document.getElementById("a");
    var b_context = b_canvas.getContext("2d");
    b_context.fillRect(50, 25, 150, 100);*/
    var main = document.getElementById("main_content");

    main.innerHTML = "<!--Писать тута.-->\n" +
        "<canvas id=\"a\" width=\"300\" height=\"225\"></canvas>\n";
    var b_canvas = document.getElementById("a");
    var b_context = b_canvas.getContext("2d");
    b_context.globalAlpha = check;
    b_context.fillRect(50, 25, 150, 100);
    loadNeuro("NeuroFact/Neuro.txt");//Сейчас эта штука только для теста. Она задействует только консоль и выполняется асинхронно. При этом она очень тяжёлая. Всё остальное может запвисать на время выполнения. Вствляй свой код до неё.
}

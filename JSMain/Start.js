/**
 Created by BigArt on 08.07.2017.
 */
"use strict";
function start() {
    /*document.body.innerHTML = "<canvas id=\"a\" width=\"300\" height=\"225\"></canvas>";
    var b_canvas = document.getElementById("a");
    var b_context = b_canvas.getContext("2d");
    b_context.fillRect(50, 25, 150, 100);*/
    var main=document.getElementById("main_content");

    main.innerHTML=   "<!--Писать тута.-->\n" +
        "<canvas id=\"a\" width=\"300\" height=\"225\"> Не уверен, но это для теста </canvas>\n";
    var b_canvas = document.getElementById("a");
    var b_context = b_canvas.getContext("2d");
    b_context.color='red';
    b_context.fillRect(50, 25, 150, 100);
}
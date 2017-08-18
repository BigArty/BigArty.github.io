/**
 Created by BigArt on 08.07.2017.
 */
"use strict";

function time() {
    var time = new Date();
    return time.getHours()+":"+time.getMinutes()+":"+time.getSeconds()+" ";
}

function fail() {
    check = 1;
    console.dir(time() + "Fail");
}
function loading(){
    //Сюда нужно написать функцию вывода на экран слова загрузка. Желательно найти гифку с крутящимся кружочком загрузки.
}

var check = 0.5;

function start() {
    console.dir(time() + "Start");
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
    console.log(time()+"Start downloading");
    loadNeuro("NeuroFact/Neuro.txt");
    //Сейчас эта штука только для теста. Она задействует только консоль и выполняется асинхронно. При этом она очень тяжёлая. Всё остальное может запвисать на время выполнения. Вствляй свой код до неё.
    loading();
}

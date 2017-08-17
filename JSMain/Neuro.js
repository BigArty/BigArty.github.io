"use strict";

function Neuron(doubleArrFact) {
    this.out = function (doubleArrInput) {
        var out = 0;
        for (var i = 0; i < doubleArrInput.length; ++i) {
            out += doubleArrInput[i] * (+doubleArrFact[i])
        }

    }
}

function Layer(doubleArrArrFact, activFunc) {
    var neurons=[];
    for (var i=0; i<doubleArrArrFact.length;++i){
        neurons[i]=new Neuron(doubleArrArrFact[i])
    }
    this.work=new function (doubleArrInput) {
        var doubleArrOut=[];
        for(var i=0;i<neurons.length;++i){
            doubleArrOut[i]=neurons[i].out(doubleArrInput);
            doubleArrOut[i]=activFunc(doubleArrInput[i]);
        }
        return doubleArrOut
    };
}

function Neuro(stringData) {
    var time=new Date();
    console.log(time.getHours()+":"+time.getMinutes()+":"+time.getSeconds()+" "+"Downloading completed. Starting init.");
    var lines=stringData.split("\n");
    var layers=[];
    for (var i=0;i<+layers[0];++i){

    }
    console.dir(lines);

}

function test(stringData) {
    var doubleTest=+stringData;
    alert(doubleTest);
}

var neuro;

function loadNeuro(fileNeuroFact) {
    $.ajax({
        url: fileNeuroFact,
        dataType: "text",
        async: true,
        success: function(msg){
            neuro = new Neuro(msg);
        }
    });

}

function calaul(DoubleArrData, outLength) {

}
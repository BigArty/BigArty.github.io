"use strict";

function Neuron(doubleArrFact) {
    this.out = function (doubleArrInput) {
        var out = 0;
        for (var i = 0; i < doubleArrInput.length; ++i) {
            out += doubleArrInput[i] * (+doubleArrFact[i])
        }

    }
}

function Layer(stringArrArrFact, activFunc) {
    var neurons=[];
    for (var i=0; i<stringArrArrFact.length;++i){
        neurons[i]=new Neuron(stringArrArrFact[i])
    }
    this.work=function (doubleArrInput) {
        var doubleArrOut=[];
        doubleArrInput[doubleArrInput.length]=1;
        for(var i=0;i<neurons.length;++i){
            doubleArrOut[i]=neurons[i].out(doubleArrInput);
            doubleArrOut[i]=activFunc(doubleArrInput[i]);
        }
        return doubleArrOut
    };
}

function Neuro(stringData) {
    console.log(time()+"Downloading completed. Starting init.");
    var lines=stringData.split("\n");
    var layers=[];
    var stringLayersLength=lines[1].split(" ");
    var intCount=2;
    for (var i=0;i<+lines[0];++i){
        var stringArrArrLayerFact=[];
        var intFunc=+lines[intCount].split(" ")[1];
        var activFunc;
        switch (intFunc){
            case 1:
                activFunc=function (doubleX) {
                    return 2.0 / (1 + Math.exp(-x)) - 1;
                }
        }
        intCount++;
        var stringArrArrFact=[];
        for (var j=0;j<+stringLayersLength[i+1];++j){
            stringArrArrFact[j]=lines[intCount].split(" ");
            intCount++;
        }
        layers[i]=new Layer(stringArrArrFact, activFunc);
    }
    console.dir(time()+"Init finished");
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
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
        doubleArrInput[doubleArrInput.length]=1;
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
    var stringLayersLength=lines[1].split(" ");
    for (var i=0;i<+lines[0];++i){
        var stringArrArrLayerFact=[];
        for (var j=0;j<+stringLayersLength[i+1];++j){

        }
    }
    console.dir(lines);

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
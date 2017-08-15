"use strict";

function Neuron(doubleArrFact) {
    this.out = function (doubleArrInput) {
        var out = 0;
        for (var i = 0; i < doubleArrInput.length; ++i) {
            out += doubleArrInput[i] * doubleArrFact[i]
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

function Neuro(fileNeuroFact) {
    var test="";
    $.ajax({
        url: fileNeuroFact,
        dataType: "text",
        async: true,
        success: function(msg){
            test = msg;
            alert('Содержимое файла: '+test);
            console.log(test);
            var lines=test.split("\n");
            console.log(lines);
        }
    });

}

function calaul(DoubleArrData, outLength) {

}
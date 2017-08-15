"use strict";

function Neuron(doubleArrFact) {
    this.out = function (doubleArrInput) {
        var out = 0;
        for (var i = 0; i < doubleArrInput.length; ++i) {
            out += doubleArrInput[i] * doubleArrFact[i]
        }

    }
}

function calaul(DoubleArrData, outLength) {

}
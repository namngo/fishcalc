/// <reference path="reference.ts"/>
/// <reference path="Components/LiterGallonConverter/LiterGallonController.ts"/>

module FishCalc {
    export class Apps {
        mount() {
            m.mount(document.getElementById("divTankSize"), <any>Component.LiterToGallon);
            m.mount(document.getElementById("divKNO3"), <any>Component.NO3);
        }
    }
}

$(document).ready(() => {
    var app = new FishCalc.Apps();
    app.mount();
});
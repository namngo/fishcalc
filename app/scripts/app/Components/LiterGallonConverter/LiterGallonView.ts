/// <reference path="../../../references.ts"/>

module FishCalc.Component.LiterToGallon {
    export function view(ctrl: LiterGallonController, args: ILiterGallonModel, extras: any) {
        return m("div", [
            m("div.page-header", [
                m("h2", "Tank size")
            ]),
            m("p", "Enter your fish tank size in either US gallon or liter. We'll do the conversion for you."),
            m("form", { className: "form-inline" }, [
                m("div", { className: "form-group" }, [
                    m("input", { type: "text", className: "form-control", placeholder: "29", id: "sizeTxtGallon", onkeyup: ctrl.onGallonKeyUp, value: ctrl.vm.model.gallon() }),
                    m("label", { for: "sizeTxtGallon" }, "Gallon ")
                ]),
                m("strong", " Or "),
                m("div", { className: "form-group" }, [
                    m("input", { "type": "text", "className": "form-control", "placeholder": "29", "id": "sizeTxtLiter", onkeyup: ctrl.onLiterKeyUp, value: ctrl.vm.model.liter() }),
                    m("label", { for: "sizeTxtLiter" }, "Liter")
                ]),
            ]),
            m.component(Component.CollapsedText, { text: ctrl.vm.model.explain }),
        ]);
    }
}
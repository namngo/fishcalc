/// <reference path="../../reference.ts"/>

module FishCalc.Component.NO3 {
    import TankSizeUnit = Constant.TankSizeUnit;
    import FertMethod = Constant.FertMethod;
    import SpoonUnit = Constant.SpoonUnit;
    
    export function view(ctrl: NO3Controller, args: INO3Model, extras: any) {
        return m("div", [
            m("div.page-header", [
                m("h2", "NO3")
            ]),
            m("form", { className: "form-inline" }, [
                m("div", { className: "form-group" }, [
                    m("span", "My tank is "),
                    m("input", { type: "text", className: "form-control", placeholder: "29", id: "kno3TxtTankSize" }),
                    m("select", { className: "form-control" }, Util.GetNamesFromEnum(TankSizeUnit).map((v) => {
                        var opt = { value: TankSizeUnit[v], selected: '' };
                        if (TankSizeUnit[v] == TankSizeUnit.Gallon) {
                            opt.selected = 'selected';
                        }
                        return m('option', opt, v);
                    })),
                    m("span", " and I am using dry fertilizers."),
                ]),

            ]),
            m("h4", "Daily dose"),
            m("form", { className: "form-inline" }, [
                m("div", { className: "form-group" }, [
                    m("span", "You wil need "),
                    m("strong", ""),
                    m("span", " for "),
                    m("select", { className: "form-control" }, Util.GetNamesFromEnum(FertMethod).map((v) => {
                        var opt = { value: v, selected: '' };
                        if (FertMethod[v] == FertMethod.EI) {
                            opt.selected = 'selected';
                        }
                        return m('option', opt, v);
                    })),
                    m("span", "method."),
                ]),

            ]),
            m("h4", "Target"),
            m("form", { className: "form-inline" }, [
                m("div", { className: "form-group" }, [
                    m("span", "To reach "),
                    m("input", { type: "text", className: "form-control", placeholder: "7.5", id: "kno3TxtTarget" }),
                    m("span", "ppm, I need "),
                    m("strong", ""),
                    m("select", { className: "form-control" }, _.values(Measurement.Spoon.spoonMap).map((s: Measurement.IMeasurementMap) => {
                        var opt = { value: s.unit, selected: '' };
                        if (SpoonUnit[s.unit] == SpoonUnit.tsp) {
                            opt.selected = 'selected';
                        }
                        return m('option', opt, s.name);
                    })),
                ]),
            ]),
        ]);
    }
}
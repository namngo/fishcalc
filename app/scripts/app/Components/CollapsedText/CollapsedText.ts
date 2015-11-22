/// <reference path="../../reference.ts"/>
module FishCalc.Component.CollapsedText {
    export interface ICollapsedTextArgs {
        text?: _mithril.MithrilProperty<string>;
    }

    export class CollapsedTextController {
        model: ICollapsedTextArgs;
        uuid: string;

        constructor(args?: ICollapsedTextArgs, extra?: any) {
            this.uuid = FishCalc.Util.uuid();
            this.model = args;
        }
    }

    export function controller(args?: ICollapsedTextArgs, extra?: any) {
        return new CollapsedTextController(args, extra);
    }

    export function view(ctrl: CollapsedTextController) {
        var uuid = ctrl.uuid;
        return m("div", {}, [
            m("a", { className: "", "data-toggle": "collapse", href: `#div-explain-${uuid}`, id: `a-showExplain-${uuid}`, "aria-expanded": false, "aria-controls": `#div-explain-${uuid}` }, "See explaination"),
            m("div", { className: "collapse", id: `div-explain-${uuid}` }, m("div", { className: "sm-well" }, m.trust(ctrl.model.text()))),
        ]);
    }
}
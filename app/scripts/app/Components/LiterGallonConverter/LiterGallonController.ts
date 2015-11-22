/// <reference path="../../reference.ts"/>
/// <reference path="LiterGallonModel.ts"/>
/// <reference path="LiterGallonView.ts"/>

module FishCalc.Component.LiterToGallon {
    export class LiterGallonController {
        vm: ViewModel;
        constructor(args: ILiterGallonModel) {
            this.vm = new ViewModel();
            this.vm.init(args);
        }

        onGallonKeyUp = (e: KeyboardEvent) => {
            this.vm.trySetGallon(e.target['value']);
        }

        onLiterKeyUp = (e: KeyboardEvent) => {
            this.vm.trySetLiter(e.target['value']);
        }

    }

    export function controller(args: ILiterGallonModel): LiterGallonController {
        return new LiterGallonController(args);
    }
}
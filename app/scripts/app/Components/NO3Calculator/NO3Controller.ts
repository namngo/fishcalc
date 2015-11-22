/// <reference path="../../reference.ts"/>

module FishCalc.Component.NO3 {
    export class NO3Controller {
        vm: any;
        constructor(args?: INO3Model) {
        }

    }

    export function controller(args: INO3Model): NO3Controller {
        return new NO3Controller(args);
    }
}
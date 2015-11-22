/// <reference path="reference.ts"/>
module FishCalc.Util {
    export function uuid() {
        var i = 0;
        var random = 0;
        var uuid = '';
        for (i = 0; i < 32; i++) {
            random = Math.random() * 16 | 0;
            if (i === 8 || i === 12 || i === 16 || i === 20) {
                uuid += '-';
            }

            uuid += (i === 12 ? 4 : (i === 16 ? (random & 3 | 8) : random)).toString(16);
        }

        return uuid;
    }

    export function GetNamesFromEnum(e) {
        var names: string[] = [];
        for (var n in e) {
            if (typeof e[n] === 'number') {
                names.push(n);
            }
        }
        return names;
    }
}
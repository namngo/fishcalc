/// <reference path="../../../references.ts"/>>

module FishCalc.Component.NO3 {
    export interface INO3Model {
        amount: Measurement.Spoon | _mithril.MithrilProperty<Measurement.Spoon>;
        targetPpm: number | _mithril.MithrilProperty<number>;
        tankSize: Measurement.Volume | _mithril.MithrilProperty<Measurement.Volume>;
    }

    export class KNO3Model implements INO3Model {
        amount: Measurement.Spoon | _mithril.MithrilProperty<Measurement.Spoon>;
        targetPpm: number | _mithril.MithrilProperty<number>;
        tankSize: Measurement.Volume | _mithril.MithrilProperty<Measurement.Volume>;
    }
}
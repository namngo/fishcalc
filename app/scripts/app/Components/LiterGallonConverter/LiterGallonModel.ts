/// <reference path="../../reference.ts"/>


module FishCalc.Component.LiterToGallon {
    export interface ILiterGallonModel {
        liter: number |  _mithril.MithrilProperty<number>;
        gallon: number |  _mithril.MithrilProperty<number>;
        explain: string | _mithril.MithrilProperty<string>;
    }

    export class LiterToGallonModel implements ILiterGallonModel {
        liter: _mithril.MithrilProperty<number>;
        gallon: _mithril.MithrilProperty<number>;
        explain: _mithril.MithrilProperty<string>;

        constructor(args?: ILiterGallonModel) {
            this.liter = m.prop(0);
            this.gallon = m.prop(0);
            this.explain = m.prop('');

            if (args) {
                if (args.explain) {
                    this.explain(<string>args.explain);
                }
                if (args.gallon) {
                    this.gallon(<number>args.gallon);
                }
                if (args.liter) {
                    this.liter(<number>args.liter);
                }
            }
        }

        GallonToLiterExplain = (gallon: number, liter: number) =>
            `There are <strong>${Constant.Volume.LiterPerGallon}</strong> liter per gallon.
              <br><strong>${gallon}</strong> gallon will have <strong>${gallon}</strong> * <strong>${Constant.Volume.LiterPerGallon}</strong> liter(s) = <strong>${liter}</strong>.
            `;

        LiterToGallonExplain = (liter: number, gallon: number) =>
            `There are <strong>${Constant.Volume.GallonPerLiter}</strong> gallon per liter.
                <br><strong>${liter}</strong> liter will have <strong>${liter}</strong> * <strong>${Constant.Volume.GallonPerLiter}</strong> = <strong>${gallon}</strong> gallons(s).
            `;
    }

    export class ViewModel {
        model: LiterToGallonModel;
        isLiterError: _mithril.MithrilProperty<boolean>;
        isGallonError: _mithril.MithrilProperty<boolean>;

        init(args?: ILiterGallonModel) {
            this.isLiterError = m.prop(false);
            this.isGallonError = m.prop(false);
            this.model = new LiterToGallonModel(args);
        }

        trySetLiter(literStr: string) {
            if (isNaN(<any>literStr)) {
                this.isLiterError(true);
            }
            else if (literStr === '') {
                this.model.liter(0);
            }
            else {
                this.isLiterError(false);
                var liter = parseFloat(literStr);
                this.model.liter(liter);

                var gallon = Measurement.Volume.LiterToGallon(liter);
                this.model.gallon(gallon);
                this.model.explain(this.model.LiterToGallonExplain(liter, gallon));
            }
        }

        trySetGallon(gallonStr: string) {
            if (isNaN(<any>gallonStr)) {
                this.isGallonError(true);
            }
            else if (gallonStr === '') {
                this.model.gallon(0);
            }
            else {
                this.isGallonError(false);
                var gallon = parseFloat(gallonStr);
                this.model.gallon(gallon);

                var liter = Measurement.Volume.GallonToLiter(gallon);
                this.model.liter(liter);
                this.model.explain(this.model.GallonToLiterExplain(gallon, liter));
            }
        }
    }
}
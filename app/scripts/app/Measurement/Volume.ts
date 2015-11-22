module FishCalc.Measurement {
    import TankSizeUnit = Constant.TankSizeUnit;

    export class Volume implements IMeasure<TankSizeUnit> {
        value: number;
        unit: TankSizeUnit;
        standardUnit: TankSizeUnit = TankSizeUnit.Gallon;

        get standardValue(): number {
            if (this.unit == this.standardUnit) {
                return this.value;
            }
            else if (this.unit == TankSizeUnit.Liter) {
                return Volume.LiterToGallon(this.value);
            }
        }

        to(unit: TankSizeUnit): number {
            if (unit == this.unit) {
                return this.value;
            }
            else if (unit == TankSizeUnit.Liter) {
                return Volume.GallonToLiter(this.standardValue);
            }
        }

        assign(value: number, unit: TankSizeUnit) {
            this.value = value;
            this.unit = unit;
        }

        public static GallonToLiter = (gallon: number) => gallon * Constant.Volume.LiterPerGallon;

        public static LiterToGallon = (liter: number) => liter * Constant.Volume.GallonPerLiter;

    }
}
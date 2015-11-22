module FishCalc.Measurement {

    import ChemicalUnit = Constant.ChemicalUnit;
    import SpoonUnit = Constant.SpoonUnit;

    export class NO3 implements IMeasure<ChemicalUnit> {
        value: number;
        unit: ChemicalUnit;
        standardUnit: ChemicalUnit = ChemicalUnit.ppm;
        waterVolume: Volume;

        get standardValue() {
            return this.value;
        }
        to = (unit: ChemicalUnit) => this.value;
        assign(value: number, unit: ChemicalUnit) {
            this.value = value;
            this.unit = unit;
        }

        toSpoon = (spoon: SpoonUnit) => {
            return 0;
        }

        //static
        public static NO3 = 'NO3';

        public static KNO3TspToGram(ppm: number) {
            return Constant.Chemicals.KNO3.MilligramsPerTsp * ppm;
        }

        public static KNO3GramToTsp(gram: number) {
            return gram / Constant.Chemicals.KNO3.MilligramsPerTsp;
        }

        public static get NO3Substain(): string[]{
            return _.values(Constant.Chemicals).filter((c: Constant.IChemical) => c.Targets.indexOf(NO3.NO3) > -1).map((c: Constant.IChemical) => c.Name);
        }
    }
}
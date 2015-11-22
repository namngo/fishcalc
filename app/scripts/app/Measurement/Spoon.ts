module FishCalc.Measurement {
    import SpoonUnit = Constant.SpoonUnit;

    export class Spoon implements IMeasure<SpoonUnit> {
        value: number;
        unit: SpoonUnit;
        standardUnit: SpoonUnit = SpoonUnit.tsp;

        public static spoonMap: { [name: string]: IMeasurementMap } = {
            "tsp18": {
                unit: "tsp18",
                name: "1/8 tsp",
                toStandard: ((v: number) => v / 8),
                fromStandard: ((v: number) => v * 8),
                standard: false,
            },
            "tsp14": {
                unit: "tsp14",
                name: "1/4 tsp",
                toStandard: ((v: number) => v / 4),
                fromStandard: ((v: number) => v * 4),
                standard: false,
            },
            "tsp12": {
                unit: "tsp12",
                name: "1/2 tsp",
                toStandard: ((v: number) => v / 2),
                fromStandard: ((v: number) => v * 2),
                standard: false,
            },
            "tsp": {
                unit: "tsp",
                name: "tsp",
                toStandard: ((v: number) => v),
                fromStandard: ((v: number) => v),
                standard: true,
            },
            "tbsp14": {
                unit: "tbsp14",
                name: "1/4 tbsp",
                toStandard: ((v: number) => v * 3 / 4),
                fromStandard: ((v: number) => v / 3 * 4),
                standard: false,
            },
            "tbsp12": {
                unit: "tbsp12",
                name: "1/2 tbsp",
                toStandard: ((v: number) => v * 3 / 2),
                fromStandard: ((v: number) => v / 3 * 2),
                standard: false,
            },
            "tbsp": {
                unit: "tbsp",
                name: "tbsp",
                toStandard: ((v: number) => v * 3),
                fromStandard: ((v: number) => v / 3),
                standard: false,
            },
        };

        constructor(value: number, unit: SpoonUnit) {
            this.value = value;
            this.unit = unit;
        }

        get standardValue(): number {
            return Spoon.spoonMap[this.unit].toStandard(this.value);
        }

        to = (unit: SpoonUnit) => Spoon.spoonMap[unit].fromStandard(this.standardValue);

        assign = (value: number, unit: SpoonUnit) => {
            this.value = value;
            this.unit = unit;
        }
    }
}
module FishCalc.Measurement {
    export interface IMeasure<T> {
        value: number;
        unit: T;
        standardValue: number;
        standardUnit: T;
        to(unit: T): number;
        assign(value: number, unit: T);
    }

    export interface IExplainResult {
        value: number;
        unit: any;
        explaination: string;
    }

    export interface IMeasurementMap {
        unit: string;
        name: string;
        toStandard: (v: number) => number;
        fromStandard: (v: number) => number;
        standard: boolean;
    }
}
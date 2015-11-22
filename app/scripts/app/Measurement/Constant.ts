module FishCalc.Constant {
    export enum SpoonUnit {
        tsp18 = 0,
        tsp14 = 1,
        tsp12 = 2,
        tsp = 3,
        tbsp14 = 4,
        tbsp12 = 5,
        tbsp = 6,
    }

    export enum TankSizeUnit {
        Gallon,
        Liter
    }

    export enum FertMethod {
        EI,
        PPS,
        Walstad,
    }

    export enum ChemicalUnit {
        ppm,
    }

    export var Volume = {
        LiterPerGallon: 3.785,
        GallonPerLiter: 0.264,
    }

    export interface IChemical {
        Name: string;
        NameShort: string;
        MilligramsPerTsp: number;
        Targets: string[];
        MainTarget: string;
        TargetPPM: {};
        Solubility: number;
    }

    export var Chemicals = {
        KNO3: {
            Name: 'Potassium Nitrate',
            NameShort: 'KNO3',
            MilligramsPerTsp: 5200,
            NO3Percent: 0.6133,
            NPercent: 0.138539,
            KPercent: 0.3867,
            Solubility: 360,
            Targets: ['K', 'NO3'],
            MainTarget: 'NO3',
            TargetPPM: {
                'EI': [7.5, 5, 30, 25], //method, low, high, margin
                'PPS': [1, 5, 10, 9],
                'Walstad': [0.443, 0.553, 0.11],
            },
        },

        K2HPO4: {
            Name: 'Dipotassium Phosphate',
            NameShort: 'K2HPO4',
            MilligramsPerTsp: 5800,
            PO4Percent: 0.545271861,
            PPercent: 0.177837745,
            KPercent: 0.448963656,
            Solubility: 1492,
            MainTarget: 'PO4',
            Targets: ['K', 'PO4'],
            TargetPPM: {
                'EI': [1.3, 1, 3, 2],
                'PPS': [0.1, 0.1, 1, 0.9],
                'Walstad': [0.061, 0.073, 0.12]
            },
        },

         KH2PO4: {
             Name: 'Monopotassium Phosphate',
             NameShort: 'KH2PO4',
             MilligramsPerTsp : 5600,
             PO4Percent : 0.6979,
             PPercent : 0.227605,
             KPercent : 0.2873,
             Solubility : 220,
             MainTarget: 'PO4',
             Targets: ['K', 'PO4'],
             TargetPPM : {
                'EI': [1.3, 1, 3, 2],
                'PPS': [0.1, 0.1, 1, 0.9],
                'Walstad': [0.061, 0.073, 0.12]
             },
        },

         K2SO4: {
             Name: 'Potassium Sulfate',
             NameShort: 'K2SO4',
             MilligramsPerTsp : 6400,
             KPercent : 0.448736,
             SPercent : 0.18401,
             Solubility : 120,
             Targets: ['K', 'SO4'],
             MainTarget: 'K',
             TargetPPM : {
                'EI': [7.5, 10, 30, 20],
                'PPS': [1.33, 1, 20, 15],
                'Walstad': [2, 0.4, 2.4]
             },
        }
    }
    

     Salinity: {

    }
}
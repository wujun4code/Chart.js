declare namespace chartjs {
    export class Chart {
        constructor(ctx: CanvasRenderingContext2D, chartOptions?: ChartOptions);
        clear: () => void;
        stop: () => void;
        resize: () => void;
        destroy: () => void;
        toBase64Image: () => string;
        generateLegend: () => string;

        static Line(ctx: CanvasRenderingContext2D, chartOptions?: ChartOptions): Chart;

        static Bar(ctx: CanvasRenderingContext2D, options?: any): Chart;

        static Bubble(ctx: CanvasRenderingContext2D, options?: any): Chart;

        static Doughnut(ctx: CanvasRenderingContext2D, options?: any): Chart;

        static PolarArea(ctx: CanvasRenderingContext2D, options?: any): Chart;

        static Radar(ctx: CanvasRenderingContext2D, options?: any): Chart;
    }
    export interface ChartOptions {
        type?: string;
        data?: ChartData;
        options?: ChartCommonConfiguration
    }

    export interface ChartData {
        labels?: string[];
        datasets?: Array<Object>;
        xLabels?: string[];
        yLabels?: string[];
    }

    export interface ChartCommonConfiguration {
        responsive?: boolean;
        responsiveAnimationDuration?: number;
        maintainAspectRatio?: boolean;
        events?: string[];
        onClick?: Function;
        legendCallback?: Function;
        onResize?: Function;
    }

    export interface PieOptions extends ChartCommonConfiguration {
        cutoutPercentage?: number;
        rotation?: number;
        circumference?:number;
        animation?:{
            animateRotate?:boolean;
            animateScale?:boolean;
        };
        legend?:{
            labels?:{
                generateLabels?:Function
            },
            onClick?:Function
        };
    }
}

export = chartjs;
import { Rect } from "../base/rect.js";
import { IStyle } from "../base/style.js";

export interface ICardBase {
    setStyle(style: IStyle): void;
    getStyle(): IStyle;
};

export interface IComponentBase {
    render(): void;
};

export interface FillStyle {
    color: string;
    opacity: number;
    ref: number;
};

export interface StrokeStyle {
    color: string;
    width: number;
    dashArray: number[];
    opacity: number;
    ref: number;
};

export function makeDefFillStyle(): FillStyle {
    return { color: "#ffffffff", opacity: 1, ref: -1 };
}

export function makeDefStrokeStyle(): StrokeStyle {
    return { color: "#ffffffff", width: 1, dashArray: [], opacity: 1, ref: -1 };
}

export class ComponentComposite implements IComponentBase {
    private components: IComponentBase[];
    constructor() {
        this.components = [];
    }

    public render(): void {
        this.components.forEach((component) => {
            component.render();
        });
    }
}


export class BaseComponent implements IComponentBase {
    private rect: Rect;
    private fillStyle: FillStyle;
    private strokeStyle: StrokeStyle;

    constructor(rect: Rect = new Rect(0, 0, 0, 0)) {
        this.rect = rect;
        this.fillStyle = makeDefFillStyle();
        this.strokeStyle = makeDefStrokeStyle();
    }

    public setFillStyle(style: FillStyle): void {
        this.fillStyle = style;
    }

    public getFillStyle(): FillStyle {
        return this.fillStyle;
    }

    public setStrokeStyle(style: StrokeStyle): void {
        this.strokeStyle = style;
    }

    public getStrokeStyle(): StrokeStyle {
        return this.strokeStyle;
    }

    public getRect(): Rect {
        return this.rect;
    }

    public setRect(rect: Rect): void {
        this.rect = rect;
    }

    public render(): void {
        
    }
}

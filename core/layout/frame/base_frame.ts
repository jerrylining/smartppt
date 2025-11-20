import { IFeature } from "../../base/feature";
import { Rect } from "../../base/rect";
import { IStyle } from "../../base/style";
import { IComponentBase } from "../../card/base";

enum FrameType {
    DEFAULT,
    SOLID,
    ICON,
    OUTLINE,
    LINE,
    TOP_CIRCLE,
    CONNECT,
    ICON_CONNECT,
    LEAF,
    LABEL,
    ALTERNATE,
};

export interface IFrameOptions {
    type: FrameType;
    style: IStyle;
    rect: Rect;
    feature: IFeature;
};

export interface IFrame {
    getType(): FrameType;
    getRect(): Rect;
    getStyle(): IStyle;
    setStyle(style: IStyle):void;
    getFeature(): IFeature;
    build(): void;
    insertItem(pos: number): boolean;
    deleteItem(pos: number): boolean;
};

export class BaseFrame implements IFrame{
    private opts: IFrameOptions;
    private components: IComponentBase[];

    constructor(private options: IFrameOptions) {
        this.opts = options;
        this.components = [];
    }

    public getType(): FrameType {
        return this.opts.type;
    }

    public getRect(): Rect {
        return this.opts.rect;
    }

    public getStyle(): IStyle {
        return this.opts.style;
    }

    public setStyle(style: IStyle): void {
        this.opts.style = style;
        //notify
    }

    public getFeature(): IFeature {
        return this.opts.feature;
    }

    public getFrameOptions(): IFrameOptions {
        return this.opts;
    }

    public build(): void {
        if (this.components.length > 0) {
            this.components = [];
        }
        this.buildComponents();
    }

    protected buildComponents(): void {
        
    }

    public insertItem(pos: number): boolean {
        //TODO:
        return false;
    }

    public deleteItem(pos: number): boolean {
        //TODO:
        return false;
    }
};
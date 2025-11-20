import { BaseComponent } from "../base";

export class NumComponent extends BaseComponent {
    private num: number;
    constructor() {
        super();
        this.num = 0.0;
    }

    public render(): void {
        
    }

    public getNumber(): number {
        return this.num;
    }

    public setNumber(num: number): void {
        this.num = num;
    }
}
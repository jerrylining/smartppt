import { BaseComponent } from "../base";

export class IConComponent extends BaseComponent {
    private iconBlob: Blob;
    constructor() {
        super();
        this.iconBlob = new Blob();
    }

    public render(): void {
        
    }

    public setIconBlob(blob: Blob): void {
        this.iconBlob = blob;
    }

    public getIconBlob(): Blob {
        return this.iconBlob;
    }
}
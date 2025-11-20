import { BaseComponent } from "../base";

enum TextType {
    DEFAULT,
    MAJOR,
    MINOR,
};

export class TextComponent extends BaseComponent {
    private type: TextType;
    private text: string;

    constructor(type: TextType = TextType.MAJOR) {
        super();
        this.type = type;
        this.text = "";
    }

    public render(): void {

    }

    public getType(): TextType {
        return this.type;
    }

    public getText(): string {
        return this.text;
    }

    public setText(text:string): void {
        this.text = text;
    }
    
};
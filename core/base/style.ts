export interface IStyle {

};

class Style implements IStyle {
    constructor() {

    }
};

export class StyleSheet {
    private sheet: Map<string, IStyle>;

    constructor(styles: IStyle[]) {
        this.sheet = new Map<string, IStyle>();
        styles.forEach((style, index) => {
            this.sheet.set(`style-${index}`, style);
        });
    }  
};
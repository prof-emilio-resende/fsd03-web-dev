class Person {
    constructor(theHeight, theWeight) {
        this._height = theHeight;
        this._weight = theWeight;
        this.imc = 0;
        this.imcDescription = "";
    };

    get height() {
        return this._height;
    }

    set height(theHeight) {
        this._height = theHeight;
    }

    get weight() {
        return this._weight;
    }

    set weight(theWeight) {
        this._weight = theWeight;
    }

    toObject() {
        return {
            height: this._height,
            weight: this._weight,
            imc: this.imc,
            imcDescription: this.imcDescription
        }
    }
}
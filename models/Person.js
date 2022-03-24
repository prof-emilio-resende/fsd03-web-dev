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
        console.log('setting height value...');
        this._height = theHeight;
    }

    get weight() {
        return this._weight;
    }

    set weight(theWeight) {
        console.log('setting weight value...');
        this._weight = theWeight;
    }

    isValid() {
        return this._height && this._weight;
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
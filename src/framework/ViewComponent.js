import React from "react";
import ReactDOM from "react-dom";

export default class ViewComponent {
    constructor(lookupName) {
        this.componentName = lookupName;
        console.log(`Inicializando um novo componente ${this.componentName}...`);
        this.element = document.querySelector(this.componentName);
        this.state = {};
    }

    onLoad() {
        console.log('no implementation for onLoad...');
        this.paint();
    }

    observe(obj) {
        console.log(`observing obj [${obj}]`);
        const self = this;
        if (!obj) return obj;
        return new Proxy(obj, {
            set (target, prop, value, receiver) {
                const updated = Reflect.set(target, prop, value);
                console.log(`updated ... ${updated}`);
                if (target.isValid()) {
                    console.log('target is valid, sync state...');
                    console.log(self);
                    console.log(target);
                    self.setObserveReady(target);
                    return true;
                }
                
                console.log('target still invalid, skipping state update...');
                return true;
            }
        });
    }

    setObserveReady(obj) {
        throw new Error(`No observeReady implementation provided for ${this.componentName}`);
    }

    render() {
        throw new Error(`No implementation provided to view component ${this.componentName}`);
    }

    paint() {
        const el = React.createElement('div', { className: "react-container" }, this.render());
        ReactDOM.render(el, this.element);
    }

    setState(state) {
        this.state = state;
        this.paint();
    }
}
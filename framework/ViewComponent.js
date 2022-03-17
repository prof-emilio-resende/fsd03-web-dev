class ViewComponent {
    constructor() {
        this.componentName = this.__proto__.constructor.name;
        console.log(`Inicializando um novo componente ${this.componentName}...`);
        this.element = document.querySelector(this.componentName);
        this.state = {};
    }

    onLoad() {
        console.log('no implementation for onLoad...');
        this.paint();
    }

    render() {
        throw new Error(`No implementation provided to view component ${this.componentName}`);
    }

    paint() {
        this.element.innerHTML = this.render();
    }

    setState(state) {
        this.state = state;
        this.paint();
    }
}
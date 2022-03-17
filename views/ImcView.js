class ImcView extends ViewComponent {
    constructor() {
        super();
        this.state = {
            person: new Person(0, 0)
        };
    };

    render() {
        const { person } = this.state;
        return `Seu IMC é <span>${person.imc}</span> : <strong>${person.imcDescription}</strong>`;
    }
}
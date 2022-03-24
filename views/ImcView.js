class ImcView extends ViewComponent {
    constructor() {
        super();
        this.imcController = new ImcController();
        this.state = new Person(0, 0);
    };

    render() {
        const person = this.state;

        return `Seu IMC é <span>${person.imc}</span> : <strong>${person.imcDescription}</strong>`;
    }

    setObserveReady(person) {
        console.log('setObserverReady called...');
        this.imcController.calculate(person, response => 
            this.setState(response)
          );
    }
}
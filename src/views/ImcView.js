import ViewComponent from "../framework/ViewComponent.js";
import ImcController from "../controllers/ImcController.js";
import Person from "../models/Person.js";

export default class ImcView extends ViewComponent {
    constructor() {
        super("ImcView");
        this.imcController = new ImcController();
        this.state = new Person(0, 0);
    };

    render() {
        const person = this.state;

        return `Seu IMC está <span>${person.imc}</span> : <strong>${person.imcDescription}</strong>`;
    }

    setObserveReady(person) {
        console.log('setObserverReady called...');
        this.imcController.calculate(person, response => 
            this.setState(response)
          );
    }
}
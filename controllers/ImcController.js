import ImcDriver from "../drivers/ImcDriver.js";

export default class ImcController {
    constructor() {
        this.imcDriver = new ImcDriver();
    }
    
    loadTable(callback) {
        this.imcDriver
            .getTableData()
            .then(callback);
    }

    calculate(person, callback) {
        this.imcDriver
            .calculate(person)
            .then(callback);
    }
}
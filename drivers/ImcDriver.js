class ImcDriver {
    constructor() {
        this.xhr = new HttpUtil();
    }

    handleRestResponse(rawResponse) {
        return rawResponse.json();
    }

    getTableData() {
        return this
            .xhr
            .get('http://localhost:8080', '/imc/table')
            .then(this.handleRestResponse);
    }

    calculate(person) {
        return this
            .xhr
            .post('http://localhost:8080', '/imc/calculate', person.toObject())
            .then(this.handleRestResponse);
    }
}
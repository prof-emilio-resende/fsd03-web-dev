class ImcDriver {
    constructor() {
        this.xhr = new HttpUtil();
    }

    getTableData() {
        return this
            .xhr
            .get('http://localhost:8080', '/imc/table')
            .then(function(rawResponse) {
                return rawResponse.json();
            });
    }
}
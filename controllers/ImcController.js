class ImcController {
    constructor() {
        this.imcDriver = new ImcDriver();
    }
    
    loadTable(callback) {
        this.imcDriver
            .getTableData()
            .then(callback);
    }
}
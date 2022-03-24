class ImcTableView extends ViewComponent {
    constructor() {
      super();
      this.imcController = new ImcController();
    }

    onLoad() {
      this.imcController.loadTable(imcRangeObj => 
        this.setState({range: imcRangeObj})
      );
    }

    render() {
      if (!this.state.range) return '<table></table>';

      return `<table>
        ${
          Object.keys(this.state.range)
            .sort()
            .map(k => 
              `<tr>
                  <td>${k}</td>
                  <td>${this.state.range[k]}</td>
              </tr>`
            ).join('')
        }
      </table>`
    }
}
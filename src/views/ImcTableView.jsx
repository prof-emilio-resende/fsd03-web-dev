import React from "react";

//import ViewComponent from "../framework/ViewComponent.js";
import ImcController from "../controllers/ImcController.js";

export default class ImcTableView extends React.Component {
    constructor() {
      super();
      this.state = {range: null};
      this.imcController = new ImcController();
    }

    componentDidMount() {
      this.imcController.loadTable(imcRangeObj => 
        this.setState({range: imcRangeObj})
      );
    }

    render() {
      if (!this.state.range) return '<table></table>';

      return (<table>
        {
          Object.keys(this.state.range)
            .sort()
            .map(k => 
              <tr>
                  <td>{k}</td>
                  <td>{this.state.range[k]}</td>
              </tr>
            )
        }
      </table>);
    }
}
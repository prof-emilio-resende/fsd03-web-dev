import ProxyPollyfillBuilder from 'proxy-polyfill/src/proxy';
window.Proxy = ProxyPollyfillBuilder();

import React from "react";
import ReactDOM from "react-dom";

import Person from "./models/Person.js";

import "./index.scss";

import ImcTableView from "./views/ImcTableView.jsx";
import ImcView from "./views/ImcView.jsx";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      person: this.observe(new Person(0, 0))
    }
  }

  setObserveReady() {
    alert('setObserveReady');
  }

  calculateImc() {
    const heightElem = document.querySelector("#altura");
    const weightElem = document.querySelector("#peso");
    
    if(!heightElem) throw Error("height is required field!");
    if(!weightElem) throw Error("weight is required field!");
  
    console.log('calculando...')
    this.state.person.height = heightElem.value;
    this.state.person.weight = weightElem.value;
  }

  observe(obj) {
    console.log(`observing obj [${obj}]`);
    const self = this;
    if (!obj) return obj;
    return new Proxy(obj, {
        set (target, prop, value, receiver) {
            const updated = Reflect.set(target, prop, value);
            console.log(`updated ... ${updated}`);
            if (target.isValid()) {
                console.log('target is valid, sync state...');
                console.log(self);
                console.log(target);
                self.setObserveReady(target);
                return true;
            }
            
            console.log('target still invalid, skipping state update...');
            return true;
        }
    });
  }

  render() {
    return (<div>
      <div class="data">
        <div class="form">
          <div class="row">
            <ImcTableView />
          </div>
          <hr />
          <div class="row">
            <label>Altura</label>
            <input id="altura" value="0.00" placeholder="0.00" />
          </div>
          <div class="row">
            <label>Peso</label>
            <input id="peso" value="0.00" placeholder="0.00" />
          </div>
          <button 
            type="button" 
            class="action"
            onClick={this.calculateImc}
          >Calcular</button>
        </div>
      </div>
      <hr />
      {/* <ImcView class="data" /> */}
    </div>);
  }
}

window.onload = function() {
  ReactDOM.render(<App />, document.querySelector("#app"));
};

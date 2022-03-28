import "./index.scss";

import ImcTableView from "./views/ImcTableView.js";
import ImcView from "./views/ImcView.js";

const imcTableView = new ImcTableView();
const imcView = new ImcView();

function calculateImcBuilder() {
  const heightElem = document.querySelector("#altura");
  const weightElem = document.querySelector("#peso");

  if(!heightElem) throw Error("height is required field!");
  if(!weightElem) throw Error("weight is required field!");
  
  const proxy = imcView.observe(imcView.state);

  return function() {
    console.log('calculando...')
    proxy.height = heightElem.value;
    proxy.weight = weightElem.value;
  }
}

window.onload = function() {
  const btn = document.querySelector(".data .form button");
  btn.addEventListener('click', calculateImcBuilder());

  // inicializando tabela na tela inicial
  imcTableView.onLoad();
  imcView.onLoad();
};

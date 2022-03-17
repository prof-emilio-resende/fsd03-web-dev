const imcTableView = new ImcTableView();
const imcView = new ImcView();

function callImcCalcFetch(person) {
  const options = {
    method: 'post',
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    },
    body: JSON.stringify(person.toObject())
  };
  fetch('http://localhost:8080/imc/calculate', options)
    .then(function(rawResponse) {
      return rawResponse.json()
        .then(function(response) {
          imcView.setState({person: response})
        });
    });
}

function calculateImc(evt) {
  const heightElem = document.querySelector("#altura");
  const weightElem = document.querySelector("#peso");

  if(!heightElem) throw Error("height is required field!");
  if(!weightElem) throw Error("weight is required field!");

  const height = heightElem.value;
  const weight = weightElem.value;

  callImcCalcFetch(new Person(height, weight));
}

window.onload = function() {
  const btn = document.querySelector(".data .form button");
  btn.addEventListener('click', calculateImc);

  // inicializando tabela na tela inicial
  imcTableView.onLoad();
  imcView.onLoad();
};

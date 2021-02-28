const buttonSubmit = document.getElementById("calculate");

function calculate() {
  const kg = document.getElementById("kg").value;
  const dose = document.getElementById("dose").value;
  const mlPerKgPerHour = document.getElementById("mlPerKgPerHour").value;
  const solutionQuantity = document.querySelector(
    'input[name="solution-quantity"]:checked'
  ).value;

  if ((kg === "") | (kg < 0.1) | (kg === null)) {
    window.alert("Você digitou um peso inválido");
  } else if ((dose === "") | (dose <= 0) | (dose === null) | (dose >= 1.6)) {
    window.alert(
      "Você digitou uma dose inválida.\nDigite um valor entre 0.1 e 1.5 mcg."
    );
  } else if (
    (mlPerKgPerHour === "") |
    (mlPerKgPerHour < 0.1) |
    (mlPerKgPerHour === null) |
    (mlPerKgPerHour > 6)
  ) {
    window.alert(
      "Você digitou uma taxa de infusão inválida.\nDigite um valor entre 0.1 e 6.0 ml/kg/h."
    );
  } else {
    const infusionTax = mlPerKgPerHour * kg;
    const mcgPerHour = kg * dose * 60;
    const mcgPerMl = mcgPerHour / infusionTax;
    const norepinephrineMl = (solutionQuantity * mcgPerMl) / 1000;

    const mainContainer = document.querySelector(".container");
    const resultTaxLabel = document.getElementById("resultTaxLabel");
    const resultTaxButton = document.getElementById("resultTaxButton");
    const resultNoreLabel = document.getElementById("resultNoreLabel");
    const resultNoreButton = document.getElementById("resultNoreButton");
    resultTaxButton.value = `${infusionTax
      .toFixed(3)
      .toString()
      .replace(".", ",")} ml/h`;
    resultNoreButton.value = `${norepinephrineMl
      .toFixed(3)
      .toString()
      .replace(".", ",")} ml`;
    resultTaxLabel.style.display = "block";
    resultNoreLabel.style.display = "block";
    resultTaxButton.style.display = "block";
    resultNoreButton.style.display = "block";
    mainContainer.style.height = "auto";
  }
}

buttonSubmit.addEventListener("click", calculate);

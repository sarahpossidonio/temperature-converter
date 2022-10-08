var temperaturaF = "";
var temperaturaC = "";
var temperaturaK = "";

var selectDe = document.getElementById("select_de");
var selectPara = document.getElementById("select_para");
var converter = document.querySelector("#convert");

var calor = document.getElementById("calor");
var frio = document.getElementById("frio");
var tempoBom = document.getElementById("tempo-bom");
converter.onclick = function () {
  var valorDe = selectDe.options[selectDe.selectedIndex].value;
  var valorPara = selectPara.options[selectPara.selectedIndex].value;

  var temp = document.querySelector("#temp");
  temp = parseFloat(temp.value);

  if (valorDe == "F" && valorPara == "C") {
    convertFtoC(temp);
  }
  if (valorDe == "F" && valorPara == "K") {
    convertFtoK(temp);
  }
  if (valorDe == "C" && valorPara == "F") {
    convertCtoF(valorPara, temp);
  }
  if (valorDe == "C" && valorPara == "K") {
    convertCtoK(temp);
  }
  if (valorDe == "K" && valorPara == "C") {
    convertKtoC(temp);
  }
  if (valorDe == "K" && valorPara == "F") {
    convertKtoF(temp);
  }
  if (valorDe == "C" && valorPara == "C") {
    convertCtoC(temp);
  }

  mostraIcone(valorPara);
};

function convertCtoC(tempC) {
  temperaturaC = tempC;
  var resultado = document.getElementById("resultado");
  resultado.value = temperaturaC.toFixed(2) + " ºC";
}
function convertFtoC(temperaturaF) {
  temperaturaC = ((temperaturaF - 32) * 5) / 9;
  var resultado = document.getElementById("resultado");
  resultado.value = temperaturaC.toFixed(2) + " ºC";
}

function convertFtoK(temperaturaF) {
  temperaturaK = ((temperaturaF - 32) * 5) / 9 + 273.15;
  var resultado = document.getElementById("resultado");
  resultado.value = temperaturaK.toFixed(2) + " K";
}

function convertCtoF(valorPara, temperaturaC) {
  temperaturaF = (temperaturaC * 9) / 5 + 32;
  var resultado = document.getElementById("resultado");
  resultado.value = temperaturaF.toFixed(2) + " ºF";
}

function convertCtoK(temperaturaC) {
  temperaturaK = temperaturaC + 273.15;
  var resultado = document.getElementById("resultado");
  resultado.value = temperaturaK.toFixed(2) + " K";
}

function convertKtoC(temperaturaK) {
  temperaturaC = temperaturaK - 273.15;
  var resultado = document.getElementById("resultado");
  resultado.value = temperaturaC.toFixed(2) + " ºC";
}

function convertKtoF(temperaturaK) {
  temperaturaF = ((temperaturaK - 273.15) * 9) / 5 + 32;
  var resultado = document.getElementById("resultado");
  resultado.value = temperaturaF.toFixed(2) + " ºF";
}

function mostraIcone(tipoTemp) {
  if (tipoTemp == "K") {
    if (temperaturaK > 303.15) {
      calor.style.display = "unset";
      frio.style.display = "none";
      tempoBom.style.display = "none";
    } else if (temperaturaK < 278.15) {
      calor.style.display = "none";
      frio.style.display = "unset";
      tempoBom.style.display = "none";
    } else {
      calor.style.display = "none";
      frio.style.display = "none";
      tempoBom.style.display = "unset";
    }
  } else if (tipoTemp == "F") {
    if (temperaturaF > 86) {
      calor.style.display = "unset";
      frio.style.display = "none";
      tempoBom.style.display = "none";
    } else if (temperaturaF < 41) {
      calor.style.display = "none";
      frio.style.display = "unset";
      tempoBom.style.display = "none";
    } else {
      calor.style.display = "none";
      frio.style.display = "none";
      tempoBom.style.display = "unset";
    }
  } else {
    if (temperaturaC > 30) {
      calor.style.display = "unset";
      frio.style.display = "none";
      tempoBom.style.display = "none";
    } else if (temperaturaC < 5) {
      calor.style.display = "none";
      frio.style.display = "unset";
      tempoBom.style.display = "none";
    } else {
      calor.style.display = "none";
      frio.style.display = "none";
      tempoBom.style.display = "unset";
    }
  }
}

/*function convert() {
  temperaturaF = document.querySelector("#temp");
  temperaturaF = parseFloat(temperaturaF.value);
  temperaturaC = ((temperaturaF - 32) * 5) / 9;
  var resultado = document.getElementById("resultado");
  resultado.value = temperaturaC.toFixed(1) + " ºC";

  var calor = document.getElementById("calor");
  var frio = document.getElementById("frio");
  var tempoBom = document.getElementById("tempo-bom");

  if (temperaturaC > 30) {
    calor.style.display = "unset";
    frio.style.display = "none";
    tempoBom.style.display = "none";
  } else if (temperaturaC < 5) {
    calor.style.display = "none";
    frio.style.display = "unset";
    tempoBom.style.display = "none";
  } else {
    calor.style.display = "none";
    frio.style.display = "none";
    tempoBom.style.display = "unset";
  }
}*/
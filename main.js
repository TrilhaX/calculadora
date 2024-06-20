let calculo = prompt("Digite que tipo de conta queres fazer:");

if (calculo === "Soma") {
  var n1 = prompt(`Digite o valor de n1:`);
  var n2 = prompt(`Digite o valor de n2:`);

  // Substituir vírgulas por pontos e converter para float
  n1 = parseFloat(n1.replace(',', '.'));
  n2 = parseFloat(n2.replace(',', '.'));
  
  if (!isNaN(n1) && !isNaN(n2)) {
    let soma = n1 + n2;
    alert(`A soma é: ${soma.toFixed(2).replace('.', ',')}`); // Formatar saída com vírgula
  } else {
    alert("Por favor, digite números válidos.");
  }
} else if (calculo === "Subtração") {
  var n1 = prompt(`Digite o valor de n1:`);
  var n2 = prompt(`Digite o valor de n2:`);

  // Substituir vírgulas por pontos e converter para float
  n1 = parseFloat(n1.replace(',', '.'));
  n2 = parseFloat(n2.replace(',', '.'));
  
  if (!isNaN(n1) && !isNaN(n2)) {
    let sub = n1 - n2;
    alert(`A Subtração é: ${sub.toFixed(2).replace('.', ',')}`); // Formatar saída com vírgula
  } else {
    alert("Por favor, digite números válidos.");
  }
} else if (calculo === "Multiplicação") {
  var n1 = prompt(`Digite o valor de n1:`);
  var n2 = prompt(`Digite o valor de n2:`);

  // Substituir vírgulas por pontos e converter para float
  n1 = parseFloat(n1.replace(',', '.'));
  n2 = parseFloat(n2.replace(',', '.'));
  
  if (!isNaN(n1) && !isNaN(n2)) {
    let sub = n1 * n2;
    alert(`A Subtração é: ${sub.toFixed(2).replace('.', ',')}`); // Formatar saída com vírgula
  } else {
    alert("Por favor, digite números válidos.");
  }
} else if (calculo === "Divisão") {
  var n1 = prompt(`Digite o valor de n1:`);
  var n2 = prompt(`Digite o valor de n2:`);

  // Substituir vírgulas por pontos e converter para float
  n1 = parseFloat(n1.replace(',', '.'));
  n2 = parseFloat(n2.replace(',', '.'));
  
  if (!isNaN(n1) && !isNaN(n2)) {
    let sub = n1/n2;
    alert(`A Subtração é: ${sub.toFixed(2).replace('.', ',')}`); // Formatar saída com vírgula
  } else {
    alert("Por favor, digite números válidos.");
  }
} else if (calculo === "Potencia") {
  var n1 = prompt(`Digite o valor da Base:`);
  var n2 = prompt(`Digite o valor do Expoente:`);

  // Substituir vírgulas por pontos e converter para float
  n1 = parseFloat(n1.replace(',', '.'));
  n2 = parseFloat(n2.replace(',', '.'));
  
  if (!isNaN(n1) && !isNaN(n2)) {
    let sub = n1 ** n2;
    alert(`A Potencia é: ${sub.toFixed(2).replace('.', ',')}`); // Formatar saída com vírgula
  } else {
    alert("Por favor, digite números válidos.");
  }
} else if (calculo === "Raiz Quadrada") {
  var n1 = prompt(`Digite o valor da Base:`);

  // Substituir vírgulas por pontos e converter para float
  n1 = parseInt(n1);
  
  if (!isNaN(n1)) {
    let RaizQuadrada = Math.sqrt(n1);
    alert(`A Raiz Quadrada é: ${sub.toFixed(2).replace('.', ',')}`); // Formatar saída com vírgula
  } else {
    alert("Por favor, digite números válidos.");
  }
} else {
  alert("Operação inválida. Por favor, escolha 'Somar' ou 'Subtração'.");
}

function somar(n1, n2) {
  // Verificando se a conversão deu certo (não é NaN)
  n1 = parseInt(n1);
  n2 = parseInt(n2);
  
  if (!isNaN(n1) && !isNaN(n2)) { // Corrigido para n1 e n2
    let soma = n1 + n2; // Corrigido para n1 e n2
    alert(`A soma é: ${soma}`);
  } else {
    alert("Por favor, digite números válidos.");
  }
}

let calculo = prompt("Digite que tipo de conta queres fazer:");
if (calculo === "Somar") {
  var n1 = prompt(`Digite o valor de n1:`);
  var n2 = prompt(`Digite o valor de n2:`);
  somar(n1, n2);
} else {
  alert("Operação inválida. Por favor, escolha 'Somar'.");
}

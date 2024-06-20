function somar(n1, n2) {  
  // Verificando se a conversão deu certo (não é NaN)
  var n1 = prompt(`Digite o valor de n1:`);
  var n2 = prompt(`Digite o valor de n2:`);

  n1 = parseInt(n1);
  n2 = parseInt(n2);
  
  if (!isNaN(numero1) && !isNaN(numero2)) {
    let soma = numero1 + numero2;
    alert(`A soma é: ${soma}`);
  } else {
    alert("Por favor, digite números válidos.");
  }
}

let calculo = prompt("Digite que tipo de conta queres fazer:");
if (calculo === "Somar") { // Correção: Adicionar parênteses em torno da condição do if
  somar(n1, n2);
} else {
  alert("Operação inválida. Por favor, escolha 'Somar'.");
}

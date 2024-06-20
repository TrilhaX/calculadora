function somar(n1, n2) {
  // Convertendo n1 e n2 para números usando parseFloat
  let numero1 = parseFloat(n1);
  let numero2 = parseFloat(n2);
  
  // Verificando se a conversão deu certo (não é NaN)
  if (!isNaN(numero1) && !isNaN(numero2)) {
    let soma = numero1 + numero2;
    alert(`A soma é: ${soma}`);
  } else {
    alert("Por favor, digite números válidos.");
  }
}

let calculo = prompt("Digite que tipo de conta queres fazer:");
if (calculo === "Somar") { // Correção: Adicionar parênteses em torno da condição do if
  let n1 = prompt(`Digite o valor de n1:`);
  let n2 = prompt(`Digite o valor de n2:`);

  somar(n1, n2);
} else {
  alert("Operação inválida. Por favor, escolha 'Somar'.");
}

// Helper function to parse input numbers
function parseNumberInput(input) {
  // Replace commas with dots and convert to float
  return parseFloat(input.replace(',', '.'));
}

// Main calculation logic based on user input
function performCalculation(operation) {
  let result;

  switch(operation) {
    case "Soma":
      var n1 = parseNumberInput(prompt(`Digite o valor de n1:`));
      var n2 = parseNumberInput(prompt(`Digite o valor de n2:`));
      result = n1 + n2;
      alert(`A soma é: ${result.toFixed(2).replace('.', ',')}`);
      break;
      
    case "Subtração":
      var n1 = parseNumberInput(prompt(`Digite o valor de n1:`));
      var n2 = parseNumberInput(prompt(`Digite o valor de n2:`));
      result = n1 - n2;
      alert(`A subtração é: ${result.toFixed(2).replace('.', ',')}`);
      break;

    case "Multiplicação":
      var n1 = parseNumberInput(prompt(`Digite o valor de n1:`));
      var n2 = parseNumberInput(prompt(`Digite o valor de n2:`));
      result = n1 * n2;
      alert(`A multiplicação é: ${result.toFixed(2).replace('.', ',')}`);
      break;

    case "Divisão":
      var n1 = parseNumberInput(prompt(`Digite o valor de n1:`));
      var n2 = parseNumberInput(prompt(`Digite o valor de n2:`));
      if (n2 !== 0) {
        result = n1 / n2;
        alert(`A divisão é: ${result.toFixed(2).replace('.', ',')}`);
      } else {
        alert("Não é possível dividir por zero.");
      }
      break;

    case "Potencia":
      var n1 = parseNumberInput(prompt(`Digite o valor da Base:`));
      var n2 = parseNumberInput(prompt(`Digite o valor do Expoente:`));
      result = Math.pow(n1, n2);
      alert(`A potência é: ${result.toFixed(2).replace('.', ',')}`);
      break;

    case "Raiz Quadrada":
      var n1 = parseNumberInput(prompt(`Digite o valor:`));
      if (n1 >= 0) {
        result = Math.sqrt(n1);
        alert(`A raiz quadrada é: ${result.toFixed(2).replace('.', ',')}`);
      } else {
        alert("Por favor, digite um número não negativo.");
      }
      break;

    case "Raiz Cubica":
      var n1 = parseNumberInput(prompt(`Digite o valor:`));
      result = Math.cbrt(n1);
      alert(`A raiz cúbica é: ${result.toFixed(2).replace('.', ',')}`);
      break;

    case "Raiz":
      var n1 = parseNumberInput(prompt(`Digite o valor da Base:`));
      var n2 = parseNumberInput(prompt(`Digite o valor do Índice:`));
      result = Math.pow(n1, 1/n2);
      alert(`A raiz é: ${result.toFixed(2).replace('.', ',')}`);
      break;

    case "Bhaskara":
      var n1 = parseNumberInput(prompt(`Digite o valor de A:`));
      var n2 = parseNumberInput(prompt(`Digite o valor de B:`));
      var n3 = parseNumberInput(prompt(`Digite o valor de C:`));
      var delta = n2 * n2 - 4 * n1 * n3;
      if (delta > 0) {
        var x1 = (-n2 + Math.sqrt(delta)) / (2 * n1);
        var x2 = (-n2 - Math.sqrt(delta)) / (2 * n1);
        alert(`As raízes são: X1 = ${x1.toFixed(2).replace('.', ',')} e X2 = ${x2.toFixed(2).replace('.', ',')}`);
      } else if (delta === 0) {
        var x = -n2 / (2 * n1);
        alert(`A raiz dupla é: X = ${x.toFixed(2).replace('.', ',')}`);
      } else {
        alert("A equação não possui raízes reais.");
      }
      break;

    case "Fatorial":
      var n1 = parseInt(prompt(`Digite o valor de n1:`));
      if (!isNaN(n1) && n1 >= 0) {
        function fatorial(n) {
          return (n !== 1 && n !== 0) ? n * fatorial(n - 1) : 1;
        }
        result = fatorial(n1);
        alert(`O fatorial de ${n1} é: ${result}`);
      } else {
        alert("Por favor, digite um número inteiro não negativo.");
      }
      break;

    case "Duplo Fatorial":
      var n1 = parseInt(prompt(`Digite o valor de n1:`));
      if (!isNaN(n1) && n1 >= 0) {
        function duploFatorial(n) {
          return (n > 1) ? n * duploFatorial(n - 2) : 1;
        }
        result = duploFatorial(n1);
        alert(`O duplo fatorial de ${n1} é: ${result}`);
      } else {
        alert("Por favor, digite um número inteiro não negativo.");
      }
      break;

    case "Porcentagem":
      var n1 = parseNumberInput(prompt(`Digite o valor:`));
      var porcentagem = parseNumberInput(prompt(`Digite a porcentagem:`));
      if (!isNaN(n1)) {
        result = (n1 * porcentagem) / 100;
        alert(`${porcentagem.toFixed(2).replace('.', ',')}% de ${n1.toFixed(2).replace('.', ',')} é ${result.toFixed(2).replace('.', ',')}`);
      } else {
        alert("Por favor, digite um número válido.");
      }
      break;

    case "Matriz Inversa":
      var aN = parseNumberInput(prompt(`Digite o valor de A:`));
      var bN = parseNumberInput(prompt(`Digite o valor de B:`));
      var cN = parseNumberInput(prompt(`Digite o valor de C:`));
      var dN = parseNumberInput(prompt(`Digite o valor de D:`));
      var determinante = aN * dN - bN * cN;
      if (determinante !== 0) {
        var aI = dN / determinante;
        var bI = -bN / determinante;
        var cI = -cN / determinante;
        var dI = aN / determinante;
        alert(`A matriz inversa é:
        ${aI.toFixed(2).replace('.', ',')} ${bI.toFixed(2).replace('.', ',')}
        ${cI.toFixed(2).replace('.', ',')} ${dI.toFixed(2).replace('.', ',')}`);
      } else {
        alert("A matriz não possui inversa, pois o determinante é zero.");
      }
      break;

    case "Matriz Quadrada":
      var aN = parseNumberInput(prompt(`Digite o valor de A:`));
      var bN = parseNumberInput(prompt(`Digite o valor de B:`));
      var cN = parseNumberInput(prompt(`Digite o valor de C:`));
      var dN = parseNumberInput(prompt(`Digite o valor de D:`));

      var aq = aN * aN;
      var bq = bN * bN;
      var cq = cN * cN;
      var dq = dN * dN;

      result = `A matriz quadrada é:\n${aq.toFixed(2).replace('.', ',')} ${bq.toFixed(2).replace('.', ',')}\n${cq.toFixed(2).replace('.', ',')} ${dq.toFixed(2).replace('.', ',')}`;
      break;

    default:
      alert("Operação inválida. Por favor, escolha uma operação válida.");
  }

  // Agora exibimos o resultado fora do switch, apenas se a operação for válida
  if (result) {
    alert(result);
  }
}

// Prompt para mostrar os tipos de cálculos antes de pedir a operação desejada
alert("Bem-vindo à calculadora!");

// Função para mostrar os tipos de cálculos disponíveis
let tipos = prompt(`Tipos de cálculos disponíveis(digite ok para continuas):
  - Soma
  - Subtração
  - Multiplicação
  - Divisão
  - Potencia
  - Raiz Quadrada
  - Raiz Cubica
  - Raiz
  - Bhaskara
  - Fatorial
  - Duplo Fatorial
  - Porcentagem
  - Matriz Inversa
  - Matriz Quadrada`);

// Prompt para receber a operação desejada
let calculo = prompt("Digite qual cálculo você deseja realizar:");

// Realiza o cálculo baseado na entrada do usuário
if (calculo !== null) {
  performCalculation(calculo);
} else {
  alert("Operação cancelada.");
}

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
    case "Media":
      var d = parseInt(prompt("Digite a quantidade de numeros que voce vai fazer a media: "))
      let numeros = []
        
      for (let i = 0; i < d; i++){
        let numero = parseFloat(prompt(`Digite o numero ${i + 1}: `));
        numeros.push(numero)
      }
        let soma = numeros.reduce((acc, val) => acc + val, 0)
        result = soma/ d;
        alert(`A Media é: ${result.toFixed(2).replace('.', ',')}`);
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
    case "Hipotenusa":
        var n1 = parseNumberInput(prompt(`Digite o valor do Cateto A:`));
        var n2 = parseNumberInput(prompt(`Digite o valor do Cateto B:`));

        var catetoA = Math.pow(n1, 2);
        var catetoB = Math.pow(n2, 2);

        var somadoscatestos = catetoA + catetoB

        var hipotenusa = Math.sqrt(somadoscatestos)

        alert(`A sua Hipotenusa é: ${hipotenusa}`);
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
    case "Logaritmo":
        var b = parseNumberInput(prompt(`Digite o valor da Base: `));
        var Logaritmando = parseNumberInput(prompt(`Digite o valor do Logaritmando: `));
    
        var log = Math.log(Logaritmando) / Math.log(b)
        result = `O seu log é:\n${log.toFixed(2).replace('.', ',')}`;
        break;
    case "Soma De Matriz":
        var a1 = parseNumberInput(prompt(`Digite o valor de A da matriz 1:`));
        var b1 = parseNumberInput(prompt(`Digite o valor de B da matriz 1:`));
        var c1 = parseNumberInput(prompt(`Digite o valor de C da matriz 1:`));
        var d1 = parseNumberInput(prompt(`Digite o valor de D da matriz 1:`));
  
        var a2 = parseNumberInput(prompt(`Digite o valor de A da matriz 2:`));
        var b2 = parseNumberInput(prompt(`Digite o valor de B da matriz 2:`));
        var c2 = parseNumberInput(prompt(`Digite o valor de C da matriz 2:`));
        var d2 = parseNumberInput(prompt(`Digite o valor de D da matriz 2:`));
    
        var aR = a1 + a2;
        var bR = b1 + b2;
        var cR = c1 + c2;
        var dR = d1 + d2;
    
        result = `A multiplicação de Matriz é:\n${aR.toFixed(2).replace('.', ',')} ${bR.toFixed(2).replace('.', ',')}\n${cR.toFixed(2).replace('.', ',')} ${dR.toFixed(2).replace('.', ',')}`;
        break;
    case "Multiplicação De Matriz":
      var a1 = parseNumberInput(prompt(`Digite o valor de A da matriz 1:`));
      var b1 = parseNumberInput(prompt(`Digite o valor de B da matriz 1:`));
      var c1 = parseNumberInput(prompt(`Digite o valor de C da matriz 1:`));
      var d1 = parseNumberInput(prompt(`Digite o valor de D da matriz 1:`));

      var a2 = parseNumberInput(prompt(`Digite o valor de A da matriz 2:`));
      var b2 = parseNumberInput(prompt(`Digite o valor de B da matriz 2:`));
      var c2 = parseNumberInput(prompt(`Digite o valor de C da matriz 2:`));
      var d2 = parseNumberInput(prompt(`Digite o valor de D da matriz 2:`));
  
      var aR = a1 * a2 + b1 * c2;
      var bR = a1 * b2 + b1 * d2;
      var cR = c1 * a2 + d1 * c2;
      var dR = c1 * b2 + d1 * d2;
  
      result = `A multiplicação de Matriz é:\n${aR.toFixed(2).replace('.', ',')} ${bR.toFixed(2).replace('.', ',')}\n${cR.toFixed(2).replace('.', ',')} ${dR.toFixed(2).replace('.', ',')}`;
      break;
    case "Corrente":
        var volts = prompt("Digite o numero de volts: ");
        var resistencia = prompt("Digite o numero de resistencia: ");
        var corrente = volts/resistencia;
          alert(`O Corrente é:
          ${corrente.toFixed(2).replace('.', ',')}`);
        break;

    case "Volts":
        var resistencia = prompt("Digite o numero de resistencia: ");
        var corrente = prompt("Digite o numero de corrente: ");
        var volts = resistencia * corrente;
          alert(`O Volts é:
          ${volts.toFixed(2).replace('.', ',')}`);
        break;
    case "Resistencia":
        var Volts = prompt("Digite o numero de Volts: ");
        var corrente = prompt("Digite o numero de corrente: ");
        var resistencia = resistencia/corrente;
            alert(`O Resistencia é:
            ${resistencia.toFixed(2).replace('.', ',')}`);
        break;
    case "Resistencia Total (Numeros Iguais)":
        var Resistencia = prompt("Digite o numero de Resistencia: ");
        var Numero = prompt("Digite o numero de Resistor: ");
        var resistenciatotal = resistencia * Numero;
            alert(`O Resistencia é:
            ${resistencia.toFixed(2).replace('.', ',')}`);
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

      var aq = aN * aN + bN * cN;
      var bq = aN * bN + bN * dN;
      var cq = cN * aN + dN * cN;
      var dq = cN * bN + dN * dN;

      result = `A matriz quadrada é:\n${aq.toFixed(2).replace('.', ',')} ${bq.toFixed(2).replace('.', ',')}\n${cq.toFixed(2).replace('.', ',')} ${dq.toFixed(2).replace('.', ',')}`;
      break;

    case "Sistema Linear":
    var Types = prompt(`Digite o tipo da matriz (2x2 or 3x3): `);

    if (Types === "2x2") {
        var a1 = parseNumberInput(prompt(`Digite o Primeiro Valor: `));
        var a2 = parseNumberInput(prompt(`Digite o Segundo Valor: `));
        var a3 = parseNumberInput(prompt(`Digite o Terceiro Valor: `));
        var a4 = parseNumberInput(prompt(`Digite o Quarto Valor: `));

        var r1 = parseNumberInput(prompt(`Digite o Primeiro Resultado: `));
        var r2 = parseNumberInput(prompt(`Digite o Segundo Resultado: `));

        var determinante = a1 * a4 - a2 * a3;
        var Dx = (r1 * a4 - r2 * a2)/determinante;
        var Dy = (a1 * r2 - a3 * r1)/determinante;

        result = `O Determinante é: ${determinante.toFixed(2).replace('.', ',')}, Dx é ${Dx.toFixed(2).replace('.', ',')} e Dy é ${Dy.toFixed(2).replace('.', ',')}`;
    } else {
        alert("Matriz não suportada. Por favor, insira uma matriz 2x2.");
    }
    break;

    case "Expressão":
      var expressao = prompt("Escreva uma expressão");
      var resultado = eval(expressao);
      alert("Resultado da expressão: " + resultado);
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
alert(`Tipos de cálculos disponíveis(digite ok para continuar):
  - Expressão
  - Media
  - Potencia
  - Raiz Quadrada
  - Raiz Cubica
  - Raiz
  - Bhaskara
  - Hipotenusa
  - Fatorial
  - Duplo Fatorial
  - Porcentagem
  - Logaritmo
  - Soma De Matriz
  - Multiplicação De Matriz
  - Corrente
  - Volts
  - Resistencia
  - Resistencia Total (Numeros Iguais)
  - Matriz Inversa
  - Matriz Quadrada
  - Sistema Linear
  `);

// Prompt para receber a operação desejada
let calculo = prompt("Digite qual cálculo você deseja realizar:");

// Realiza o cálculo baseado na entrada do usuário
if (calculo !== null) {
  performCalculation(calculo);
} else {
  alert("Operação cancelada.");
}

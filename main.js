// Helper function to parse input numbers
function parseNumberInput(input) {
    // Replace commas with dots and convert to float
    return parseFloat(input.replace(',', '.'));
  }
  
  // Main calculation logic based on user input
  function performCalculation(operation) {
    let result;
  
    switch(operation) {
      case "1": // Expressão
        var expressao = prompt("Escreva uma expressão");
        var resultado = eval(expressao);
        alert("Resultado da expressão: " + resultado);
        break;
  
      case "2": // Média
        var d = parseInt(prompt("Digite a quantidade de números para calcular a média: "));
        let numeros = [];
          
        for (let i = 0; i < d; i++){
          let numero = parseFloat(prompt(`Digite o número ${i + 1}: `));
          numeros.push(numero);
        }
        let soma = numeros.reduce((acc, val) => acc + val, 0);
        result = soma / d;
        alert(`A Média é: ${result.toFixed(2).replace('.', ',')}`);
        break;
  
      case "3": // Raiz Quadrada
        var n1 = parseNumberInput(prompt(`Digite o valor:`));
        if (n1 >= 0) {
          result = Math.sqrt(n1);
          alert(`A raiz quadrada é: ${result.toFixed(2).replace('.', ',')}`);
        } else {
          alert("Por favor, digite um número não negativo.");
        }
        break;
  
      case "4": // Raiz Cúbica
        var n1 = parseNumberInput(prompt(`Digite o valor:`));
        result = Math.cbrt(n1);
        alert(`A raiz cúbica é: ${result.toFixed(2).replace('.', ',')}`);
        break;
  
      case "5": // Raiz
        var n1 = parseNumberInput(prompt(`Digite o valor da Base:`));
        var n2 = parseNumberInput(prompt(`Digite o valor do Índice:`));
        result = Math.pow(n1, 1/n2);
        alert(`A raiz é: ${result.toFixed(2).replace('.', ',')}`);
        break;
  
      case "6": // Bhaskara
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
  
      case "7": // Hipotenusa
        var n1 = parseNumberInput(prompt(`Digite o valor do Cateto A:`));
        var n2 = parseNumberInput(prompt(`Digite o valor do Cateto B:`));
        var hipotenusa = Math.sqrt(n1 * n1 + n2 * n2);
        alert(`A Hipotenusa é: ${hipotenusa.toFixed(2).replace('.', ',')}`);
        break;
  
      case "8": // Fatorial
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
  
      case "9": // Duplo Fatorial
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
  
      case "10": // Porcentagem
        var n1 = parseNumberInput(prompt(`Digite o valor:`));
        var porcentagem = parseNumberInput(prompt(`Digite a porcentagem:`));
        if (!isNaN(n1)) {
          result = (n1 * porcentagem) / 100;
          alert(`${porcentagem.toFixed(2).replace('.', ',')}% de ${n1.toFixed(2).replace('.', ',')} é ${result.toFixed(2).replace('.', ',')}`);
        } else {
          alert("Por favor, digite um número válido.");
        }
        break;
  
      case "11": // Logaritmo
        var b = parseNumberInput(prompt(`Digite o valor da Base: `));
        var logaritmando = parseNumberInput(prompt(`Digite o valor do Logaritmando: `));
        var log = Math.log(logaritmando) / Math.log(b);
        alert(`O logaritmo é: ${log.toFixed(2).replace('.', ',')}`);
        break;
  
      case "12": // Soma de Matriz
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
  
        result = `A soma das matrizes é:\n${aR.toFixed(2).replace('.', ',')} ${bR.toFixed(2).replace('.', ',')}\n${cR.toFixed(2).replace('.', ',')} ${dR.toFixed(2).replace('.', ',')}`;
        alert(result);
        break;
  
      case "13": // Multiplicação de Matriz
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
  
        result = `A multiplicação das matrizes é:\n${aR.toFixed(2).replace('.', ',')} ${bR.toFixed(2).replace('.', ',')}\n${cR.toFixed(2).replace('.', ',')} ${dR.toFixed(2).replace('.', ',')}`;
        alert(result);
        break;
  
      case "14": // Corrente
        var volts = parseNumberInput(prompt("Digite o número de volts: "));
        var resistencia = parseNumberInput(prompt("Digite o número de resistência: "));
        var corrente = volts / resistencia;
        alert(`A Corrente é: ${corrente.toFixed(2).replace('.', ',')}`);
        break;
  
      case "15": // Volts
        var resistencia = parseNumberInput(prompt("Digite o número de resistência: "));
        var corrente = parseNumberInput(prompt("Digite o número de corrente: "));
        var volts = resistencia * corrente;
        alert(`O Volts é: ${volts.toFixed(2).replace('.', ',')}`);
        break;
  
      case "16": // Resistência
        var volts = parseNumberInput(prompt("Digite o número de volts: "));
        var corrente = parseNumberInput(prompt("Digite o número de corrente: "));
        var resistencia = volts / corrente;
        alert(`A Resistência é: ${resistencia.toFixed(2).replace('.', ',')}`);
        break;
  
      case "17": // Resistência Total
        var r1 = parseNumberInput(prompt("Digite o valor de R1: "));
        var r2 = parseNumberInput(prompt("Digite o valor de R2: "));
        var r3 = parseNumberInput(prompt("Digite o valor de R3: "));
        var resistencia_total = r1 + r2 + r3;
        alert(`A Resistência Total é: ${resistencia_total.toFixed(2).replace('.', ',')}`);
        break;
  
      case "18": // Matriz Inversa
        var a = parseNumberInput(prompt(`Digite o valor de A:`));
        var b = parseNumberInput(prompt(`Digite o valor de B:`));
        var c = parseNumberInput(prompt(`Digite o valor de C:`));
        var d = parseNumberInput(prompt(`Digite o valor de D:`));
  
        var determinante = a * d - b * c;
  
        if (determinante !== 0) {
          var aI = d / determinante;
          var bI = -b / determinante;
          var cI = -c / determinante;
          var dI = a / determinante;
  
          result = `A matriz inversa é:\n${aI.toFixed(2).replace('.', ',')} ${bI.toFixed(2).replace('.', ',')}\n${cI.toFixed(2).replace('.', ',')} ${dI.toFixed(2).replace('.', ',')}`;
          alert(result);
        } else {
          alert("A matriz não possui inversa.");
        }
        break;
  
      case "19": // Matriz Quadrada
        var a = parseNumberInput(prompt(`Digite o valor de A:`));
        var b = parseNumberInput(prompt(`Digite o valor de B:`));
        var c = parseNumberInput(prompt(`Digite o valor de C:`));
        var d = parseNumberInput(prompt(`Digite o valor de D:`));
  
        if (a === d && b === c) {
          alert("A matriz é quadrada.");
        } else {
          alert("A matriz não é quadrada.");
        }
        break;
  
        case "20":
    var Types = prompt(`Digite o tipo da matriz (2x2 ou 3x3): `);

    if (Types === "2x2") {
        var a1 = parseNumberInput(prompt(`Digite o Primeiro Valor: `));
        var a2 = parseNumberInput(prompt(`Digite o Segundo Valor: `));
        var a3 = parseNumberInput(prompt(`Digite o Terceiro Valor: `));
        var a4 = parseNumberInput(prompt(`Digite o Quarto Valor: `));

        var r1 = parseNumberInput(prompt(`Digite o Primeiro Resultado: `));
        var r2 = parseNumberInput(prompt(`Digite o Segundo Resultado: `));

        var determinante = a1 * a4 - a2 * a3;
        var Dx = r1 * a4 - r2 * a2;
        var Dy = a1 * r2 - a3 * r1;
        var DxD = Dx / determinante;
        var DyD = Dy / determinante;

        if (determinante !== 0) {
            result = `O Determinante é: ${determinante.toFixed(2).replace('.', ',')}, Dx é ${Dx.toFixed(2).replace('.', ',')} e Dy é ${Dy.toFixed(2).replace('.', ',')}. X é : ${DxD.toFixed(2).replace('.', ',')}, Y é : ${DyD.toFixed(2).replace('.', ',')}`;
            result += `. Classificação: SPD`;
        } else if (determinante === 0 && Dx === 0) {
            result = `O Determinante é: ${determinante.toFixed(2).replace('.', ',')}, Dx é ${Dx.toFixed(2).replace('.', ',')} e Dy é ${Dy.toFixed(2).replace('.', ',')}. X é : ${DxD.toFixed(2).replace('.', ',')}, Y é : ${DyD.toFixed(2).replace('.', ',')}`;
            result += `. Classificação: SPI`;
        } else if (determinante === 0 && Dx !== 0) {
            result = `O Determinante é: ${determinante.toFixed(2).replace('.', ',')}, Dx é ${Dx.toFixed(2).replace('.', ',')} e Dy é ${Dy.toFixed(2).replace('.', ',')}. X é : ${DxD.toFixed(2).replace('.', ',')}, Y é : ${DyD.toFixed(2).replace('.', ',')}`;
            result += `. Classificação: SI`;
        }

    } else if (Types === "3x3") {
        var a1 = parseNumberInput(prompt(`Digite o Primeiro Valor: `));
        var a2 = parseNumberInput(prompt(`Digite o Segundo Valor: `));
        var a3 = parseNumberInput(prompt(`Digite o Terceiro Valor: `));
        var a4 = parseNumberInput(prompt(`Digite o Quarto Valor: `));
        var a5 = parseNumberInput(prompt(`Digite o Quinto Valor: `));
        var a6 = parseNumberInput(prompt(`Digite o Sexto Valor: `));
        var a7 = parseNumberInput(prompt(`Digite o Sétimo Valor: `));
        var a8 = parseNumberInput(prompt(`Digite o Oitavo Valor: `));
        var a9 = parseNumberInput(prompt(`Digite o Nono Valor: `));

        var r1 = parseNumberInput(prompt(`Digite o Primeiro Resultado: `));
        var r2 = parseNumberInput(prompt(`Digite o Segundo Resultado: `));
        var r3 = parseNumberInput(prompt(`Digite o Terceiro Resultado: `));

        var determinante = (a1 * a5 * a9) + (a2 * a6 * a7) + (a3 * a4 * a8) - (a3 * a5 * a7) - (a1 * a6 * a8) - (a2 * a4 * a9);
        var Dx = (r1 * a5 * a9) + (a2 * a6 * r3) + (a3 * r2 * a8) - (a3 * a5 * r3) - (r1 * a6 * a8) - (a2 * a4 * a9);
        var Dy = (a1 * r2 * a9) + (r1 * a6 * a7) + (a3 * a4 * r3) - (a3 * r2 * a7) - (a1 * a6 * r3) - (r1 * a4 * a9);
        var Dz = (a1 * a5 * r3) + (a2 * r2 * a7) + (r1 * a4 * a8) - (r1 * a5 * a7) - (a1 * r2 * a8) - (a2 * a4 * r3);
        var DxD = Dx / determinante;
        var DyD = Dy / determinante;
        var DzD = Dz / determinante;

        if (determinante !== 0) {
            result = `O Determinante é: ${determinante.toFixed(2).replace('.', ',')}, Dx é ${Dx.toFixed(2).replace('.', ',')}, Dy é ${Dy.toFixed(2).replace('.', ',')} e Dz é ${Dz.toFixed(2).replace('.', ',')}. X é: ${DxD.toFixed(2).replace('.', ',')}, Y é: ${DyD.toFixed(2).replace('.', ',')} e Z é : ${DzD.toFixed(2).replace('.', ',')}`;
            result += `. Classificação: SPD`;
        } else if (determinante === 0 && Dx === 0) {
            result = `O Determinante é: ${determinante.toFixed(2).replace('.', ',')}, Dx é ${Dx.toFixed(2).replace('.', ',')}, Dy é ${Dy.toFixed(2).replace('.', ',')} e Dz é ${Dz.toFixed(2).replace('.', ',')}. X é: ${DxD.toFixed(2).replace('.', ',')}, Y é: ${DyD.toFixed(2).replace('.', ',')} e Z é : ${DzD.toFixed(2).replace('.', ',')}`;
            result += `. Classificação: SPI`;
        } else if (determinante === 0 && Dx !== 0) {
            result = `O Determinante é: ${determinante.toFixed(2).replace('.', ',')}, Dx é ${Dx.toFixed(2).replace('.', ',')}, Dy é ${Dy.toFixed(2).replace('.', ',')} e Dz é ${Dz.toFixed(2).replace('.', ',')}. X é: ${DxD.toFixed(2).replace('.', ',')}, Y é: ${DyD.toFixed(2).replace('.', ',')} e Z é : ${DzD.toFixed(2).replace('.', ',')}`;
            result += `. Classificação: SI`;
        }

    } else {
        alert("Tipo de matriz inválido. Por favor, digite '2x2' ou '3x3'.");
    }
break;

  
      case "21": // Sequencia de Cores
        var pergunta = prompt("Quer Descobrir as Cores?(s/n): ")
      
        let tabelaCores = {
          Faixa1: {
              0: 'Preto',
              1: 'Marrom',
              2: 'Vermelho',
              3: 'Laranja',
              4: 'Amarelo',
              5: 'Verde',
              6: 'Azul',
              7: 'Violeta',
              8: 'Cinza',
              9: 'Branco'
          },
          Faixa2: {
              0: 'Preto',
              1: 'Marrom',
              2: 'Vermelho',
              3: 'Laranja',
              4: 'Amarelo',
              5: 'Verde',
              6: 'Azul',
              7: 'Violeta',
              8: 'Cinza',
              9: 'Branco'
          },
          Multiplicador: {
              1: 'Preto',
              10: 'Marrom',
              100: 'Vermelho',
              1000: 'Laranja',
              10000: 'Amarelo',
              100000: 'Verde',
              1000000: 'Azul',
              10000000: 'Violeta',
              0.1: 'Dourado',
              0.01: 'Prateado'
          },
          Tolerancia: {
              1: 'Marrom',
              2: 'Vermelho',
              0.5: 'Verde',
              0.25: 'Azul',
              0.1: 'Violeta',
              5: 'Cinza',
              10: 'Prateado'
          }
        };
      
        // Função para obter o nome da cor com base no tipo (faixa 1, faixa 2, multiplicador, tolerância) e o valor escolhido
        function getCor(tipo, valor) {
            if (tabelaCores[tipo] && tabelaCores[tipo][valor] !== undefined) {
                return tabelaCores[tipo][valor];
            }
            return "Cor não encontrada";
        }
      
        if (pergunta === "s") {
            var faixa1 = parseNumberInput(prompt('Digite o Valor Da Faixa 1 (Convertido): '));
            var faixa2 = parseNumberInput(prompt('Digite o Valor Da Faixa 2 (Convertido): '));
            var multiplicador = parseNumberInput(prompt('Digite o Valor Do Multiplicador: '));
            var tolerancia = parseNumberInput(prompt('Digite o Valor Da Tolerancia: '));
      
          // Obter o nome das cores com base nas escolhas do usuário
          let corFaixa1 = getCor('Faixa1', faixa1);
          let corFaixa2 = getCor('Faixa2', faixa2);
          let corMultiplicador = getCor('Multiplicador', multiplicador);
          let corTolerancia = getCor('Tolerancia', tolerancia);
      
          // Mostrar as escolhas feitas pelo usuário
          alert(`Faixa 1: ${corFaixa1}\nFaixa 2: ${corFaixa2}\nMultiplicador: ${corMultiplicador}\nTolerância: ${corTolerancia}`);
        } else {
          // Função para obter o valor numérico a partir do nome da cor
          function getValorPorCor(tipo, cor) {
              for (let chave in tabelaCores[tipo]) {
                  if (tabelaCores[tipo][chave] === cor) {
                      return parseFloat(chave);
                  }
              }
              return NaN; // Retorna NaN se a cor não for encontrada
          }
      
          // Solicitar as cores ao usuário
          var corFaixa1 = prompt('Digite a Cor da Faixa 1: ');
          var corFaixa2 = prompt('Digite a Cor da Faixa 2: ');
          var corMultiplicador = prompt('Digite a Cor do Multiplicador: ');
          var corTolerancia = prompt('Digite a Cor da Tolerância: ');
      
          // Obter os valores numéricos correspondentes às cores
          var valorFaixa1 = getValorPorCor('Faixa1', corFaixa1);
          var valorFaixa2 = getValorPorCor('Faixa2', corFaixa2);
          var valorMultiplicador = getValorPorCor('Multiplicador', corMultiplicador);
          var valorTolerancia = getValorPorCor('Tolerancia', corTolerancia);
      
          // Calcular o valor nominal
          var valorNominal = (valorFaixa1 * 10 + valorFaixa2) * valorMultiplicador;
      
          // Calcular valor máximo e mínimo com base na tolerância percentual
          var valorMaximo = valorNominal * (1 + valorTolerancia / 100);
          var valorMinimo = valorNominal * (1 - valorTolerancia / 100);
      
          // Função para formatar o valor em unidades de mil, milhão, bilhão, etc.
          function formatarValor(valor) {
              if (Math.abs(valor) >= 1e9) {
                  return (valor / 1e9).toFixed(2) + ' Bilhões';
              } else if (Math.abs(valor) >= 1e6) {
                  return (valor / 1e6).toFixed(2) + ' Milhões';
              } else if (Math.abs(valor) >= 1e3) {
                  return (valor / 1e3).toFixed(2) + ' Mil';
              } else {
                  return valor.toFixed(2);
              }
          }
      
          // Exibir os resultados formatados
          alert(`Valor Nominal: ${formatarValor(valorNominal)}\nValor Máximo: ${formatarValor(valorMaximo)}\nValor Mínimo: ${formatarValor(valorMinimo)}`);
        }
      break;      
  
      case "22": //Conversão
      var a = prompt(`Digite o Tipo de Unidade:`);
      var n1 = parseNumberInput(prompt(`Digite o Numero:`));
  
      function formatarValor(valor) {
        if (Math.abs(valor) >= 1e12) {
          return (valor / 1e12).toFixed(2) + ' Trilhoes';
          } else if (Math.abs(valor) >= 1e9){
            return (valor / 1e9).toFixed(2) + ' Bilhões';
          } else if (Math.abs(valor) >= 1e6) {
              return (valor / 1e6).toFixed(2) + ' Milhões';
          } else if (Math.abs(valor) >= 1e3) {
              return (valor / 1e3).toFixed(2) + ' Mil';
          } else {
              return valor.toFixed(2);
          }
      }
  
      if (a === "Quilo"){
        let mult = (n1 * 1000);
        result = alert(`O Valor Convertido é: ${formatarValor(mult)}`);
      }else if (a === "Mega"){
        let mult = (n1 * 1000000)
        result = alert(`O Valor Convertido é: ${formatarValor(mult)}`)
      }else if (a === "Giga"){
        let mult = (n1 * 1000000000)
        result = alert(`O Valor Convertido é: ${formatarValor(mult)}`)
      }else if (a === "Mili"){
        let mult = (n1 * 0.001)
        result = alert(`O Valor Convertido é: ${formatarValor(mult)}`)
      }else if (a === "Micro"){
        let mult = (n1 * 0.000001)
        result = alert(`O Valor Convertido é: ${formatarValor(mult)}`)
      }else{
        let mult = (n1 * 0.000000001)
        result = alert(`O Valor Convertido é: ${formatarValor(mult)}`)
      }
  
      break;
      
      case "23": //Potencia Eletrica
      var a = prompt(`Digite os Valores que você Tem:`);
  
      if (a === "Watts" && a === "Tempo"){
        var w = prompt(`Digite o Watts:`);
        var t = prompt(`Digite o Tempo:`);
  
        let potencia = w/t
  
        result = alert(`Sua Potencia Eletrica é: ${potencia}`)
      }else if (a === "Tensão" && a === "Corrente"){
        var T = prompt(`Digite a Tensão:`);
        var c = prompt(`Digite a Corrente:`);
  
        let potencia = T * c
  
        result = alert(`Sua Potencia Eletrica é: ${potencia}`)
      }else if (a === "Tensão" && a === "Resistencia"){
        var T = prompt(`Digite a Tensão:`);
        var r = prompt(`Digite a Resistencia:`);
  
        let potencia = (v * v)/r
  
        result = alert(`Sua Potencia Eletrica é: ${potencia}`)
      }else if (a === "Resistencia" && a === "Corrente"){
        var r = prompt(`Digite a Resistencia:`);
        var c = prompt(`Digite a Corrente:`);
  
        let potencia = r * (c * c)
  
        result = alert(`Sua Potencia Eletrica é: ${potencia}`)
      }
  
      break;
  
      case "24": //Energia Gasta
      var a = prompt(`Digite a Potencia: `);
      var b = prompt(`Digite o Tempo: `);
  
      var w = a * b
  
      result = w
      break;
  
      case "25": //Lei De Ohm
      var a = prompt(`Digite o que quer Calcular(V, R, I): `);
  
      if (a === "V"){
        var r = prompt(`Digite a Resistencia: `);
        var i = prompt(`Digite  a Corrente: `);
  
        let v = r * i
        result = alert(`Sua Tensão é : ${v}`)
      }else if (a === "R"){
        var r = prompt(`Digite a Resistencia: `);
        var v = prompt(`Digite a Tensão: `);
  
        let i = v / r
        result = alert(`Sua Corrente é : ${v}`)
      }else{
        var v = prompt(`Digite a Resistencia: `);
        var i = prompt(`Digite  a Corrente: `);
  
        let r = v / i
        result = alert(`Sua Resistencia é : ${r}`)
      }
  
      break;

      case "26":

      var posicao = prompt("Em qual posição está a incógnita? (1 a 4)");
    
      // Converte a entrada do usuário para um número inteiro
      posicao = parseInt(posicao);
      
      // Verifica se a posição está dentro do intervalo válido (1 a 4)
      if (posicao < 1 || posicao > 4 || isNaN(posicao)) {
          alert("Posição inválida. Por favor, digite um número de 1 a 4.");
      } else {
          var a1, a2, a3, a4;
        
          // Pede os valores para todas as posições
          a1 = prompt("Digite o Primeiro Valor:");
          a2 = prompt("Digite o Segundo Valor:");
          a3 = prompt("Digite o Terceiro Valor:");
          a4 = prompt("Digite o Quarto Valor:");
          
          // Converte os valores para números antes de multiplicar
          a1 = parseFloat(a1);
          a2 = parseFloat(a2);
          a3 = parseFloat(a3);
          a4 = parseFloat(a4);
          
          // Verifica se a incógnita é 3 ou 4 para ajustar os valores para 1
          if (posicao === 3 && a3 === 1) {
              a3 = undefined;
          } else if (posicao === 4 && a4 === 1) {
              a4 = undefined;
          }
          
          // Calcula o resultado da multiplicação, ignorando valores undefined
          var mult = (a1 || 1) * (a4 || 1) / ((a2 || 1) * (a3 || 1));
  
          // Exibe o resultado
          result = alert(`O seu resultado é ${mult}`);
      }
  
      break;   
  
      default:
        alert("Operação inválida.");
        window.location.reload();
    }
    window.location.reload();
    // Agora exibimos o result fora do switch, apenas se a operação for válida
    if (result) {
      alert(result);
      window.location.reload();
    }
  }
  
  // Prompt para mostrar os tipos de cálculos antes de pedir a operação desejada
  alert("Bem-vindo à calculadora!");
  
  // Função para mostrar os tipos de cálculos disponíveis
  alert(`Tipos de cálculos disponíveis(Clique ok para continuar):
    - Expressão(1)
    - Media(2)
    - Raiz Quadrada(3)
    - Raiz Cubica(4)
    - Raiz(5)
    - Bhaskara(6)
    - Hipotenusa(7)
    - Fatorial(8)
    - Duplo Fatorial(9)
    - Porcentagem(10)
    - Logaritmo(11)
    - Soma De Matriz(12)
    - Multiplicação De Matriz(13)
    - Corrente(14)
    - Volts(15)
    - Resistencia(16)
    - Resistencia Total(17)
    - Matriz Inversa(18)
    - Matriz Quadrada(19)
    - Sistema Linear(20)
    `);
  
    alert(`Tipos de cálculos disponíveis(Clique ok para continuar):
    - Sequencia De Cores(21)
    - Conversão Grandezas Eletricas(22)
    - Potencia Eletrica(23)
    - Energia Gasta(24)
    - Lei De Ohm(25)
    - Sistema Linear Com Variavel(26)
    `);
  
  // Prompt para receber a operação desejada
  let calculo = prompt("Digite o numero do cálculo que você deseja realizar:");
  
  // Realiza o cálculo baseado na entrada do usuário
  if (calculo !== null) {
    performCalculation(calculo);
  } else {
    alert("Operação cancelada.");
    window.location.reload();
  }
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
  n1 = parseFloat(n1); // Converter para número com ponto flutuante

  if (!isNaN(n1)) {
    if (n1 >= 0) { // Verificar se o número é positivo ou zero
      let RaizQuadrada = Math.sqrt(n1);
      alert(`A Raiz Quadrada é: ${RaizQuadrada.toFixed(2).replace('.', ',')}`); // Formatar saída com vírgula
    } else {
      alert("Por favor, digite um número não negativo.");
    }
  } else {
    alert("Por favor, digite um número válido.");
  }
} else if (calculo === "Raiz Cubica") {
  var n1 = prompt(`Digite o valor da Base:`);

  // Substituir vírgulas por pontos e converter para float
  n1 = parseFloat(n1); // Converter para número com ponto flutuante

  if (!isNaN(n1)) {
    if (n1 >= 0) { // Verificar se o número é positivo ou zero
      let RaizCubica = Math.cbrt(n1);
      alert(`A Raiz Cubica é: ${RaizCubica.toFixed(2).replace('.', ',')}`); // Formatar saída com vírgula
    } else {
      alert("Por favor, digite um número não negativo.");
    }
  } else {
    alert("Por favor, digite um número válido.");
  }
} else if (calculo === "Raiz") {
  var n1 = prompt(`Digite o valor da Base:`);
  var n2 = prompt(`Digite o valor da indice:`);

  // Substituir vírgulas por pontos e converter para float
  n1 = parseFloat(n1); // Converter para número com ponto flutuante

  if (!isNaN(n1)) {
    if (n1 >= 0) { // Verificar se o número é positivo ou zero
      let Raiz = 1/n2
      let RaizAleatoria = Math.pow(n1, Raiz);
      alert(`A Raiz é: ${RaizAleatoria.toFixed(2).replace('.', ',')}`); // Formatar saída com vírgula
    } else {
      alert("Por favor, digite um número não negativo.");
    }
  } else {
    alert("Por favor, digite um número válido.");
  }
} else if (calculo === "Bhaskara") {
  var n1 = prompt(`Digite o valor de A:`);
  var n2 = prompt(`Digite o valor de B:`);
  var n3 = prompt(`Digite o valor de C:`);
  // Substituir vírgulas por pontos e converter para float
  n1 = parseFloat(n1); // Converter para número com ponto flutuante
  n2 = parseFloat(n2); // Converter para número com ponto flutuante
  n3 = parseFloat(n3); // Converter para número com ponto flutuante

  if (!isNaN(n1) && !isNaN(n2) && !isNaN(n3)) {
      let delta = n2 * n2 - 4 * n1 * n3
      let x1 = (-n2 + Math.sqrt(delta))/ 2 * n1
      let x2 = (-n2 - Math.sqrt(delta))/ 2 * n1
      alert(`O X1 é ${x1.toFixed(2).replace('.', ',')} e o X2 é ${x2.toFixed(2).replace('.', ',')}`); // Formatar saída com vírgula
  } else {
    alert("Por favor, digite um número válido.");
  }  
} else if (calculo === "Fatorial") {
  var n1 = prompt(`Digite o valor de n1:`);
  n1 = parseFloat(n1); // Converter para número com ponto flutuante

  if (!isNaN(n1)) {
    // Definição da função fatorial
    function fatorial(n) {
      if (n === 0 || n === 1) {
        return 1;
      }
      return n * fatorial(n - 1);
    }

    let resultadoFatorial = fatorial(n1);
    alert(`O Fatorial de ${n1} é ${resultadoFatorial}`);
  } else {
    alert("Por favor, digite um número válido.");
  }
} else if (calculo === "Duplo Fatorial") {
  var n1 = prompt(`Digite o valor de n1:`);
  n1 = parseFloat(n1); // Converter para número com ponto flutuante

  if (!isNaN(n1) && !(n1 < 0) ) {
    function fatorial(n) {
      if (n === 0 || n === 1) {
        return 1;
      }
      return n * fatorial(n - 2);
    }

    let resultadoFatorial = fatorial(n1);
    alert(`O Duplo Fatorial de ${n1} é ${resultadoFatorial}`);
  } else {
    alert("Por favor, digite um número válido.");
  }
} else if (calculo === "Porcentagem") {
  var n1 = prompt(`Digite o valor de n1:`);
  var porcentagem = prompt(`Digite o valor da porcentagem: `)
  n1 = parseFloat(n1); // Converter para número com ponto flutuante
  porcentagem = parseFloat(porcentagem); // Converter para número com ponto flutuante

  if (!isNaN(n1)){
    if (n1 == 0){
      alert(`${porcentagem.toFixed(2).replace('.', ',')}% de ${n1.toFixed(2).replace('.', ',')} não existe`)
    }else{
      let resultado = n1 * (porcentagem/100);
      alert(`${porcentagem.toFixed(2).replace('.', ',')}% de ${n1.toFixed(2).replace('.', ',')} é ${resultado}`);
    }
  }else {
    alert("Por favor, digite um número válido.");
  }
} else if (calculo === "Matriz Inversa") {
  var aN = prompt(`Digite o valor de A da Matriz Normal:`);
  var bN = prompt(`Digite o valor de B da Matriz Normal:`);
  var cN = prompt(`Digite o valor de C da Matriz Normal:`);
  var dN = prompt(`Digite o valor de D da Matriz Normal:`);

  // Converter para números com ponto flutuante
  aN = parseFloat(aN);
  bN = parseFloat(bN);
  cN = parseFloat(cN);
  dN = parseFloat(dN);

  // Verificar se os valores inseridos são números válidos
  if (!isNaN(aN) && !isNaN(bN) && !isNaN(cN) && !isNaN(dN)) {
    // Calcular o determinante da matriz normal
    var determinante = aN * dN - bN * cN;

    // Verificar se o determinante é diferente de zero para ter inversa
    if (determinante !== 0) {
      // Calcular a matriz inversa
      var aI = dN / determinante;
      var bI = -bN / determinante;
      var cI = -cN / determinante;
      var dI = aN / determinante;

      // Exibir a matriz inversa
      alert(`A Matriz Inversa é ${aI} ${bI}
                                ${cI} ${dI}`);
    } else {
      alert("A matriz normal não possui inversa, pois o determinante é zero.");
    }
  } else {
    alert("Por favor, digite um número válido para os valores da matriz.");
  }
} else {
  alert("Operação inválida. Por favor, escolha 'Somar' ou 'Subtração'.");
}

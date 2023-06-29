var tituloElemento = document.getElementById("Pergunta");
var RespostaElemento = document.getElementById("resposta");

var DivCerta         = document.getElementById("certa");
var DivErrada        = document.getElementById("errada");
var apiResultado = ''
var resposta;

function chamarAPI(){
  fetch('http://localhost:5000/api/integral/Quantidade=1&ativoResposta=true&AtivoLimite=false')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    apiResultado = data
    console.log(tituloElemento.innerHTML);

    tituloElemento.innerHTML = 'Qual a integral de : ∫ '+data.Funcoes[0]+'  dx'

    console.log(tituloElemento.innerHTML);

    resposta = data.Resultado[0]
    console.log(resposta)

    

  
  })
  .catch(error => {
    console.error('Ocorreu um erro:', error);
  });
}
 

  function comparar(){
    if (RespostaElemento.value == resposta){
      console.log('Você acertou')
      DivCerta.style.display = "block"; 
      DivErrada.style.display = "none"; 

    }
    else{
      console.log('Você Errou');
      DivCerta.style.display = "none"; 
      DivErrada.style.display = "block"; 
    }
}


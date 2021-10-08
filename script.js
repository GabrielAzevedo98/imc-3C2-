alert('Olá !') //ou
//window.confirm('Você está feliz?')
//window.prompt('Qual é o seu nome?')

const calcular = document.getElementById('calcular');

function imc(){
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if(nome !== '' && altura !== '' && peso !== ''){
        const valorIMC = (peso/(altura**2)).toFixed(2);
        const pesominimo = (18.5*(altura**2)).toFixed(2);
        const pesomaximo = (25*(altura**2)).toFixed(2);

        let classificacao = '';

         if(valorIMC < 18.5){
             classificacao = 'Abaixo do peso.';

         }else if(valorIMC < 25){
             classificacao ='Com o peso ideal! ';

         }else if( valorIMC < 30){
             classificacao ='Levemente acima do peso.';

         }else if( valorIMC < 35){
             classificacao ='Com obesidade de grau I .';

         }else if(valorIMC < 40){
             classificacao = 'Com obesidade de grau II .';

         }else{
            classificacao = 'Com obesidade de grau III .';

         }
         resultado.textContent = `Olá, ${nome}! Com ${peso}Kg e ${altura}m, seu IMC é ${valorIMC}. Atualmente, você está ${classificacao}. Procure manter o seu peso entre ${pesominimo}Kg e ${pesomaximo}Kg .`;
    }else{
        resultado.textContent = 'Para calcular o seu IMC, preencha todos os campos.';
    }
}
calcular.addEventListener('click', imc);
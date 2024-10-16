//Função para converter o valor inserido do cpx

function converter(){
    //pegando o valor digitado pelo usuário
const valor = document.getElementById("valor").value

    //Pegando a moeda escolhida pelo usuário
const moeda = document.getElementById("moeda").value

    //Taxas de conversão 
const taxas = {
    "USD": 0.17, //taxa BRL para USD
    "EUR": 0.16, //taxa BRL para EUR
    "GBP": 0.14  //taxa BRL para GBP
 }
    //Verificar se o valor é um número válido
if(valor && !isNaN(valor)){//NaN Not a number,se for um valor/numero real faz a multiplicaçao da taxa
    //calcula a conversao do valor
const convertido = valor*taxas[moeda] 
    //exibir resultado
    document.getElementById("resultado").innerHTML=
    `O valor convertido é: ${convertido.toFixed(2)}${moeda}`
 }else{
    //se o valor for invalido, exibir mensagem de erro
    document.getElementById("resultado").innerHTML =
    "Por favor, insira um valor válido."
 }
}
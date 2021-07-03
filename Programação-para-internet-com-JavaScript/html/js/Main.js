function carregado() {
    alert("Página carregada");
}

alert("Essa página conterá comandos JavaScript!");
alert("Abra o inspecionar, e observe o console.")
var nome = prompt("Qual o seu nome?");
console.log("Seja bem vindo(a), " + nome);

console.log("");
console.log("Uso do Date:");

var data = new Date();
console.log("Hoje é dia: " + data.getDate() + "/" + (data.getMonth()+1) + "/" + data.getFullYear());


console.log("");
console.log("Uso do if-else:");

var v1 = "Maçã";
var v2 = "Uva";
var v3 = "Melância";

var frase = "A fruta escolhida foi: Abacaxi.";
var escolha = prompt("Escolha entre o v1, v2 ou v3");

if(escolha == "v1") {
    console.log(frase.replace("Abacaxi", v1));
}
else {
    if(escolha == "v2") {
        console.log(frase.replace("Abacaxi", v2));
    }
    else {
        if(escolha == "v3") {
            console.log(frase.replace("Abacaxi", v3));
        }
        else {
            console.log("Como você não escolheu nada, ou algo fora das opções, " + frase.replace("A", "a"));
        }
    }
}

console.log("");
console.log("Uso do Upper e Lower Case:");

console.log(("Essa frase está toda em maiúsculo").toUpperCase());
console.log(("Essa frase está toda em minúsculo").toLowerCase());

console.log("");
console.log("Uso das listas:");
var lista_frutas = ["Maçã", "Abacaxi", "Melância", "Uva"];
console.log("Impressa no formato de lista(array):");
console.log(lista_frutas);
console.log("");
console.log("Impressa no formato de uma string:");
console.log(lista_frutas.toString());
console.log("");
console.log("Impressa no formato de uma string escolhendo o separador:");
console.log(lista_frutas.join(" ; "));
console.log("");
console.log("Contando os itens da lista:");
console.log(lista_frutas.length);
console.log("");
console.log("Imprimindo a lista de forma contrária e como string:");
console.log(lista_frutas.reverse().join(", "));
console.log("");
console.log("Inserindo mais uma fruta na lista:");
lista_frutas.reverse().push("Pêra");
console.log(lista_frutas.join(", "));
console.log("");
console.log("Retirando a última fruta da lista:");
lista_frutas.pop();
console.log(lista_frutas.join(", "));

console.log("");
console.log("Uso do dicionário:");

var dicionario_frutas = {nome: "Maçã",cor: "Vermelha"};
console.log(dicionario_frutas);
console.log("");
var lista_dicionario_frutas = [{nome: "Maçã",cor: "Vermelha"}, {nome: "Uva",cor: "Roxa"}, {nome: "Pêra",cor: "Verde"}];
console.log(lista_dicionario_frutas);

console.log("");
console.log("Uso do while:");

var numero = prompt("Você gostaria de ver a tabuada de que número?")
console.log("Tabuada do "+ numero +":");

var contador = 0;
while (contador <= 10) {
    console.log(numero + " * " + contador + " = " + numero*contador);
    contador++;
}

function clique(elemento) {
    elemento.innerHTML = "Obrigado por clicar";
}

function sobre(elemento) {
    document.getElementById("mudança").innerHTML = "O mouse está em cima dessa frase";
}

function fora() {
    document.getElementById("mudança").innerHTML = "O mouse está fora dessa frase";
}

function clique_aqui() {
    window.open("https://google.com");
}
// atividade 1

var nomeDoCarro = "fusca";

document.write(nomeDoCarro);

// atividade 2

var nome = prompt("escreva seu nome");

alert("Olá, " + nome);

// atividade 3

var nomeDoUsuario = prompt("escreva seu nome");
var idadeDoUsuario = prompt("ecreva sua idade");

var junçao = nomeDoUsuario + idadeDoUsuario;

alert("olá, " + junçao);
// atividade 4 //

//retangulo
var altura = prompt("numero da altura");
var base = prompt("numero base");
var retangulo = base * altura;
document.write(retangulo);
//

//quadrado
var lado = prompt("numero de lados");
var quadrado = lado * lado;
document.write(quadrado);
//

//losangulo
var diagonalM = parseInt(prompt("numero do Maior"));
var diagonalm = parseInt(prompt("numero do menor"));
var losango = diagonalM * diagonalm / 2;
document.write(losango);
//

//trapezio
var baseM = parseInt(prompt("numero do Maior"));
var basem = parseInt(prompt("numero do menor"));
var altura = parseInt(prompt("numero da altura"));
var trapezio = baseM + basem * altura / 2;
//

//paralelograma
var altura = prompt("numero da altura");
var base = prompt("numero base");
var paralelograma = base * altura;
document.write(paralelograma);
//

//triagulo

var altura = prompt("numero da altura");
var base = prompt("numero base");
var triagulo = base * altura / 2;

//

//circulo
var pi = 3.14;
var raio = prompt("numero do raio");
var circulo = (pi) * (raio * raio);
//
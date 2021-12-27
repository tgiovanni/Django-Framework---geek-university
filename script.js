function gritar() {
    alert("ahhhhhhhhhhhhh");

}

function perguntar() {
    var nome;
    nome = prompt("Qual seu nome")
    alert('Olá  ' + nome);

}

function mudar_texto() {
    var h1 = document.getElementsByTagName('h1');
    if (h1[0].innerText == "Goku é o Melhor") {
        h1[0].innerText = "Vegeta é o Melhor";
    } else { h1[0].innerText = "Goku é o Melhor"; }
}

function incrementar() {
    var p1 = document.getElementById('p1')
    p1.innerText = parseInt(p1.innerText) + 1;
}
function clicar () {
    
    var inicio = document.getElementById("inicio")
    var fim = document.getElementById("fim")
    var passo = document.getElementById("passo")
    var contagem = document.getElementById("contagem")
    var contando = document.getElementById("contando")
    var ini = Number(inicio.value)
    var final = Number(fim.value)
    var passos = Number(passo.value)
    contagem.innerHTML = ``
    if ((inicio.value) == '' || (fim.value) == '' || (passo.value) == ''){ // validação para n ter campos vazios.
        contando.innerHTML = ``
        contagem.innerHTML = 'Impossível contar!'
    } 
    else if(passos <= 0 && ini < final){ // Validação para caso o campo passo esteja com 0 e o inicio for menor que o final.
        alert(`Passo inválido! Considerando PASSO 1 `)
        contando.innerHTML = `Contando:`
        passos = 1
        while (ini <= final) { // Caso a condição seja atendida vai executar em ordem crescente a contagem.

            contagem.innerHTML += ` ${ini}`
            ini += passos 
        }
    } else if (passos <= 0 && ini > final){ // Validação para caso o campo passo esteja com 0 e o inicio for maior que o final.
        alert('Passo inválido! Considerando PASSO 1')
        contando.innerHTML = `Contando:`
        passos = 1
        while (ini >= final) { // Caso a condição seja atendida vai executar em ordem decrescente a contagem.
            contagem.innerHTML += ` ${ini}` //concatenção de string, para repetir a anterior + a modificada.
            ini -= passos
        }
    } else if (ini > final){ // Validação para caso esteja tudo preenchido corretamento e o incio for maior que o final fazendo contagem decrescente.
        contando.innerHTML = `Contando:`
        while (ini >= final){
            contagem.innerHTML += ` ${ini}`
            ini -= passos
        }
    }
    else{ // A ultima alternativa lógica que caso esteja tudo preenchido corretamento e o incio for menor que o final fazendo contagem crescente.
        contando.innerHTML = `Contando:`
        while (ini <= final) {

            contagem.innerHTML += ` ${ini}`
            ini += passos 
        }
    }
}
var humanPlayer = 0
var machinePlayer = 0



var usuarioDesejaJogar = confirm('Você gostaria de jogar?')

if (usuarioDesejaJogar === true){ 
    alert('Obaaa, vamos lá!')
    
}else if (usuarioDesejaJogar === false){   
alert('Que Pena')

}else if (usuarioDesejaJogar === false){ 
 alert('Obrigada por nos visitar')

}else

    console.log('usuario aceitou') // console log apenas para testar se o código esta funcionando

 
var humanPlayer = 0
var machinePlayer = 0


function comecarJogo() {

    let partida = 0

    for (partida = 0; partida < 3; partida++) {

        let decisao // armazenar se o usuario ganhou ou perdeu a partida vigente
        let jogadaUsuario = Number(prompt('O que você quer jogar? 1 = pedra  2 = papel  3 = tesoura'))
        let jogadaOponente = Math.floor(Math.random() * 3) + 1 // math ainda nao foi explicado como funciona
        
        console.log(jogadaUsuario) // teste para saber se a jogada foi armazenada
        console.log(jogadaOponente) // teste para saber se a jogada foi armazenada
        
        alert('minha escolha foi ' + jogadaOponente)


        // if para os resultados das jogadas de jokenpo
        if (jogadaUsuario === 1 && jogadaOponente === 2) {
            decisao = 'Você perdeu'
            alert('Você perdeu')
        } else if (jogadaUsuario === 1 && jogadaOponente === 3) {
            decisao = 'Você ganhou'
            alert('Você ganhou')
        } else if (jogadaUsuario === 1 && jogadaOponente === 1) {
            alert('Empate')

        } else if (jogadaUsuario === 2 && jogadaOponente === 3) {
            decisao = 'Você perdeu'
            alert('Você perdeu')
        } else if (jogadaUsuario === 2 && jogadaOponente === 1) {
            decisao = 'Você ganhou'
            alert('Você ganhou')
        } else if (jogadaUsuario === 2 && jogadaOponente === 2) {
            alert('Empate')

        } else if (jogadaUsuario === 3 && jogadaOponente === 1) {
            decisao = 'Você perdeu'
            alert('Você perdeu')
        } else if (jogadaUsuario === 3 && jogadaOponente === 2) {
            decisao = 'Você ganhou'
            alert('Você ganhou')
        } else if (jogadaUsuario === 3 && jogadaOponente === 3) {
            alert('Empate')
        }

        console.log(decisao) // teste se a decisao foi armazenada corretamente

        // if para contagem de quantas partidas o jogador ganhou
        if (decisao === 'Você perdeu') {
            machinePlayer = ++machinePlayer
        } else if (decisao === 'Você ganhou') {
            humanPlayer = ++humanPlayer
        }

        console.log(humanPlayer) // apenas para checar se esta fazendo a conta corretamente
        console.log(machinePlayer) // apenas para checar se esta fazendo a conta corretamente
    }

    // if para mostrar o resultado final das 3 partidas 
    if (machinePlayer >= 2) {
        alert('Que pena, você perdeu')
    } else if (humanPlayer >= 2) {
        alert('Parabéns, você ganhou!')
    } else if (machinePlayer == humanPlayer) {
        alert('Empatamos')
    } else
        alert('Ninguêm venceu')

}

comecarJogo()
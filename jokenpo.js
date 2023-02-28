var humanPlayer = 0
var machinePlayer = 0



function ConviteParaOJogo(){

var usuarioDesejaJogar = confirm('Você gostaria de jogar?')

if (usuarioDesejaJogar === true){ 
    alert('Obaaa, vamos lá!')
    
}else alert('Que Pena, Obrigada por visitar nossa página, volte sempre!!!')

    console.log('usuario aceitou') // console log apenas para testar se o código esta funcionando

}
ConviteParaOJogo()

function comecarJogo() {

    let partidas = 0

    for (partidas = 0; partidas < 2; partidas++) {

        let resultado // armazenar se o usuario ganhou ou perdeu a partida       
        let jogadaUsuario = Number(prompt('O que você quer jogar? 1 - Pedra 2 - Papel 3 - Tesoura'))
        let jogadaOponente = Math.floor(Math.random() * 3) + 1 // math ainda nao foi explicado como funciona
        
        console.log(jogadaUsuario) // Console para mostrar que a jogada esta sendo armazenada
        console.log(jogadaOponente) // Console para mostrar que a jogada esta sendo armazenada
        
        alert('minha escolha foi ' + jogadaOponente)
    

        
        
        
        
        
        
        // if para os resultados das jogadas de jokenpo
        if (jogadaUsuario === jogadaOponente){
            resultado = 'Empate'
            alert('Empate')
        }
        
        else if(jogadaUsuario === 1 && jogadaOponente === 2) {
            resultado = 'Você perdeu'
            alert('Você perdeu')

        }else if (jogadaUsuario === 1 && jogadaOponente === 3) {
            resultado = 'Você ganhou'
            alert('Você ganhou')
        } 

         else if (jogadaUsuario === 2 && jogadaOponente === 3) {
            resultado = 'Você perdeu'
            alert('Você perdeu')
        } 
        
        else if (jogadaUsuario === 2 && jogadaOponente === 1) {
            resultado = 'Você ganhou'
            alert('Você ganhou')
        } 
            
        else if (jogadaUsuario === 3 && jogadaOponente === 1) {
            resultado = 'Você perdeu'
            alert('Você perdeu')
        } 
        
        else if (jogadaUsuario === 3 && jogadaOponente === 2) {
            resultado = 'Você ganhou'
            alert('Você ganhou')
        } 

        console.log(resultado) // teste se o resultado foi armazenado corretamente

        // if para contagem de quantas partidas o jogador ganhou
        if (resultado === 'Você perdeu') {
            machinePlayer = ++machinePlayer
        }else if (resultado === "Empate"){
         humanPlayer
        } else (resultado === 'Você ganhou') 
            humanPlayer = ++humanPlayer
        

        console.log(humanPlayer) // apenas para checar se esta fazendo a conta corretamente
        console.log(machinePlayer) // apenas para checar se esta fazendo a conta corretamente
    }

    // if para mostrar o resultado final das 3 partidas 
    if (machinePlayer === 2) {
        alert('Que pena, você perdeu')
    } else if (humanPlayer === 2) {
        alert('Parabéns, você ganhou!')
 } else if (machinePlayer === 1 && humanPlayer === 1) {
        alert('Empatamos')}
    else (resultado === 'Empate')
        alert('Ninguêm venceu')

}

comecarJogo()
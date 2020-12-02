const blocos = document.querySelectorAll('.bloco')
const player = document.querySelector('.player')
let run = true
let playerGo =  true
console.log(5%4)
let valor =  [['','',''],['','',''],['','','']]
blocos.forEach(bloco => {
    bloco.onclick = () => {
        if (run) {
            if (bloco.textContent == '') {
                if (playerGo) {
                    bloco.innerHTML = 'X'
                    player.innerHTML = '<p>Player O</p>'
                } else {
                    bloco.innerHTML = 'O'
                    player.innerHTML = '<p>Player X</p>'
                }
    
                let blocoValue = bloco.className[11]
    
                valor[(blocoValue - 1)%3 ][(Math.floor(blocoValue/3.1))]  = bloco.textContent
    
                playerGo = !playerGo
                console.table(valor)
            }
            for (let c = 0; c < valor.length; c++) {
                if (valor[c][0] === valor[c][1] && valor[c][1] === valor[c][2] && valor[c][0] != '') {
                    player.innerHTML = `<p>Player ${valor[c][0]} Ganhou</p> <button onclick="atualizar()">Jogar novamente</button>`
                    run = false
                }
                if (valor[0][c] === valor[1][c] && valor[1][c] === valor[2][c] && valor[1][c] != '') {
                    player.innerHTML = `<p>Player ${valor[0][c]} Ganhou</p><button onclick="atualizar()">Jogar novamente</button>`  
                    run = false
                } 
            }
        }
    }
})

function atualizar() {
    location.reload()
}
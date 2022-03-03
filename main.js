//Rappel des règles dans la page (Readme)
// Game rules in readme page

//def variables

let playing, scoreBoard, scores, activePlayer;

init()

function init(){
    //Reinitialisation variables
    playing = true
    scoreBoard = 0
    scores = [0, 0]
    activePlayer = 0

    // Mise à jour scores
    document.getElementById('name-0').innerText = 'Joueur 1'
    document.getElementById('name-1').innerText = 'Joueur 2'
    document.getElementById('actual-0').innerText = '0'
    document.getElementById('actual-1').innerText = '0'
    document.getElementById('score-0').innerText = '0'
    document.getElementById('score-1').innerText = '0'

    //Reinitialisation image du dé
    document.querySelector('.dice').style.display = 'none'

    //Reinitialisation classes

    document.querySelector('.player-0-panel').classList.remove('active')
    document.querySelector('.player-0-panel').classList.remove('winner')
    document.querySelector('.player-1-panel').classList.remove('active')
    document.querySelector('.player-1-panel').classList.remove('winner')
    document.querySelector('.player-0-panel').classList.add('active')
}

//fonction de changement de joueur
function changePlayer(){
    //Remise à 0 du score courant
    scoreBoard = 0

    document.getElementById('actual-' + activePlayer).innerText = scoreBoard

    //réinitialisation joueur actif
    activePlayer == 0 ? activePlayer = 1 : activePlayer = 0

    //blockage du dé
    document.querySelector('.dice').style.display = 'none'
    //

    document.querySelector('.player-0-panel').classList.remove('active')
    document.querySelector('.player-1-panel').classList.remove('active')
    document.querySelector('.player-' + activePlayer + '-panel').classList.add('active')
}

//Roulement Dé
document.querySelector('.btn-roll').addEventListener('click', () =>{
    if(playing) {

    let dice = Math.floor(Math.random() * 6 + 1)

    //Si ce n'est pas = 1
    if(dice != 1){
        scoreBoard += dice

        document.getElementById('actual-' + activePlayer).innerText = scoreBoard;
        document.querySelector('.dice').style.display = 'block'
        document.querySelector('.dice').src = 'assets/dice-' + dice + '.png'
    } else {
        //changement de joueur

        changePlayer();
    }
}
})

//Passage a la fonction HOLD permettant de rassembler les points accumulés dans la partie "round global"

document.querySelector('.btn-hold').addEventListener('click', () => {
    if(playing){
    scores[activePlayer] += scoreBoard;
    document.getElementById('score-' + activePlayer).innerText = scores[activePlayer];
    //Si le joueur actif arrive à 100 ou plus, il gagne
    if (scores[activePlayer] >= 100) {
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner')

        //Affichage du message du gagnat
        document.getElementById('name-' + activePlayer).innerText = 'Gagnant !'
        //arrêt de partie
        playing = false

        alert('Appuyer sur "New Game" pour recommencer')
    } else {
        //Sinon changement de joueur
        changePlayer();
    }
}
})

//Partie de new game / Relancer une nouvelle partie

document.querySelector('.btn-new').addEventListener('click', () => {
    init()
})

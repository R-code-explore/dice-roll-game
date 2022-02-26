let bordScore;
let scores;
let activePlayer;
let activePlaying;

init();

//function d'initialisation des variables
function init() {
    //Partie 1: reinitialisation des variables
    bordScore = 0;
    scores = [0, 0];
    activePlayer = 0;
    activePlaying = true; 

    //Actualisation des points visibles
    document.getElementById('nom_1').innerText = 'Joueur 1';
    document.getElementById('nom_2').innerText = 'Joueur 2';
    document.getElementById('actuel_1').innerText = '0';
    document.getElementById('actuel_2').innerText = '0';
    document.getElementById('score_1').innerText = '0';
    document.getElementById('score_2').innerText = '0';
    document.querySelector('.de').style.display = 'none';

    //reinitialisation des classes
    document.querySelector('.panel_joueur_1').classList.remove('active');
    document.querySelector('.panel_joueur_1').classList.remove('win');
    document.querySelector('.panel_joueur_2').classList.remove('active');
    document.querySelector('.panel_joueur_2').classList.remove('win');
    document.querySelector('.panel_joueur_1').classList.add('active');
}
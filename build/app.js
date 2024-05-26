let rockBtn = document.querySelector('.rock');
let paperBtn = document.querySelector('.paper');
let scissorsBtn = document.querySelector('.scissors');
let playerChoice = document.querySelector('.playerChoice');
let computerChoice = document.querySelector('.computerChoice');
let shoot = document.querySelector('.shoot');
let playerName = document.querySelector('#playerName')
let ComputerName = document.querySelector('#cpuName')
let statusVal = document.querySelector('#status')


let playerScoreArea = document.querySelector('#player-score')
let computerScoreArea = document.querySelector('#computer-score')

let newGame = document.querySelector('#newGame')
let restart = document.querySelector('#restart')



// Selecting User Choice
let choiceArray = ['rock', 'paper', 'scissors'];

rockBtn.addEventListener('click', (e) => { 
    let userChoice = e.target.id  
    playerChoice.src = `./Assets/${userChoice}.png`;
    playerChoice.id = userChoice
});

paperBtn.addEventListener('click', (e) => { 
    let userChoice = e.target.id  
    playerChoice.src = `./Assets/${userChoice}.png`;
    playerChoice.id = userChoice
});

scissorsBtn.addEventListener('click', (e) => { 
    let userChoice = e.target.id  
    playerChoice.src = `./Assets/${userChoice}.png`;
    playerChoice.id = userChoice
});

// selecting Computer Choice



shoot.addEventListener('click' ,async ()=>{
   

    // getting player Choice

    let userChoice = playerChoice.id

    let compChoice = choiceArray[Math.floor(Math.random() * 3)]
    computerChoice.src = `./Assets/${compChoice}.png`
    
    // console.log(userChoice , compChoice);

    // Now Getting in to Game Logic

    if( userChoice === compChoice) {
        statusVal.innerHTML = 'Draw'
        // console.log('Draw');
    }
    else if( userChoice === 'rock' && compChoice === 'paper' ){
        statusVal.innerHTML = 'Computer Scores'
        computerScoreArea.innerHTML = parseInt(document.querySelector('#computer-score').innerHTML)+1
        
    }
    else if( userChoice === 'rock' && compChoice === 'scissors' ){
        statusVal.innerHTML = 'Player Scores'
        playerScoreArea.innerHTML = parseInt(document.querySelector('#player-score').innerHTML)+1
        
    }
    else if( userChoice === 'paper' && compChoice === 'rock' ){
        statusVal.innerHTML = 'Player Scores'
        playerScoreArea.innerHTML = parseInt(document.querySelector('#player-score').innerHTML)+1
      
    }
    else if( userChoice === 'paper' && compChoice === 'scissors' ){
        statusVal.innerHTML = 'Computer Scores'
        computerScoreArea.innerHTML = parseInt(document.querySelector('#computer-score').innerHTML)+1
       
    }
    else if( userChoice === 'scissors' && compChoice === 'paper' ){
        statusVal.innerHTML = 'Player Scores'
        playerScoreArea.innerHTML = parseInt(document.querySelector('#player-score').innerHTML)+1
        
    }
    else if( userChoice === 'scissors' && compChoice === 'rock' ){
        statusVal.innerHTML = 'Computer Scores'
        computerScoreArea.innerHTML = parseInt(document.querySelector('#computer-score').innerHTML)+1
        
    }
    else{
        console.log('someone win');
    }

    if( playerScoreArea.innerHTML=== '3')
        {
            shoot.classList.add('hidden')
            playerName.innerHTML = "Player Wins"
            shoot.setAttribute("disabled", true);
            
            
        }
        else if ( computerScoreArea.innerHTML=== '3' ){
            shoot.classList.add('hidden')
            ComputerName.innerHTML = "Computer Wins"
            shoot.setAttribute("disabled", true);
        
        }


})

// Logic for New Game & Restart

newGame.addEventListener('click' , ()=>{
    playerScoreArea.innerHTML = 0;
    computerScoreArea.innerHTML = 0;
    shoot.disabled = false
    playerName.innerHTML = 'Player'
    ComputerName.innerHTML = "Computer"
    statusVal.innerHTML = '-'
    shoot.classList.remove('hidden')
})

restart.addEventListener('click' , ()=>{
    playerScoreArea.innerHTML = 0;
    computerScoreArea.innerHTML = 0;
    shoot.disabled = false
    playerName.innerHTML = 'Player'
    ComputerName.innerHTML = "Computer"
    statusVal.innerHTML = '-'
    shoot.classList.remove('hidden')
})
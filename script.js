function getComputerChoice(){
    const choice = ["Rock", "Paper", "Scissors"];
    const randomChoice = Math.floor(Math.random()*choice.length);
    return choice[randomChoice];
}

function playRound(playerSelection, computerSelection){
    if(playerSelection == computerSelection){
        const res = "Draw!";
        return res;
    }
    else if(playerSelection=="Rock" && computerSelection=="Scissors" || playerSelection=="Paper" && computerSelection=="Rock" || playerSelection=="Scissors" && computerSelection=="Paper"){
        const res = "Player Wins!";
        return res;
    }
    else if(computerSelection=="Rock" && playerSelection=="Scissors" ||computerSelection=="Paper" && playerSelection=="Rock" || computerSelection=="Scissors" && playerSelection=="Paper"){
        const res = "Computer Wins!";
        return res;
    }
}

const playerSelection = "Paper";
const compchoice = getComputerChoice();
console.log(compchoice);
console.log(playRound(playerSelection,compchoice));

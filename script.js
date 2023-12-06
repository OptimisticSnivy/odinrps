function getComputerChoice(){
    const choice=["rock", "paper", "scissors"];
    const randomChoice = Math.floor(Math.random()*choice.length);
    return choice[randomChoice];
}

function playRound(playerSelection, computerSelection){
    if(playerSelection == computerSelection){
        const res = "Draw!";
        return res;
    }
    else if(playerSelection=="rock" && computerSelection=="scissors" || playerSelection=="paper" && computerSelection=="rock" || playerSelection=="scissors" && computerSelection=="paper"){
        const res = "Player Wins!";
        return res;
    }
    else if(computerSelection=="rock" && playerSelection=="scissors" ||computerSelection=="paper" && playerSelection=="rock" || computerSelection=="scissors" && playerSelection=="paper"){
        const res = "Computer Wins!";
        return res;
    }
    else{
        const res = "ERR: User Input must ne wrong!";
        return res;
    }
}

function game(){
    var playerSelection = prompt("Please Enter Your Choice:");

    let ps = playerSelection.toLowerCase();
    const cc = getComputerChoice();

    console.log(playRound(ps,cc));
}

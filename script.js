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
    let pcount=0;
    let ccount=0;
    for(let i=0; i<5; i++){
        var playerSelection = prompt("Please Enter Your Choice:");

        let ps = playerSelection.toLowerCase();
        const cc = getComputerChoice();
        let playres = playRound(ps,cc);
        if(playres=="Player Wins!"){
            pcount=pcount+1;
            console.log("Player Wins this Round!");
        }
        else if(playres=="Computer Wins!"){
            ccount=ccount+1;
            console.log("Computer Wins this Round!");
        }  
        else{
            console.log("Draw!");
        }
    }
    console.log("Score:-");
    console.log("Player:" + pcount);
    console.log("Computer:" + ccount);
}

game();

//Implementing UI here

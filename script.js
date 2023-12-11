function getComputerChoice(){
    const choice=["Rock","Paper","Scissors"];
    const randomChoice = Math.floor(Math.random()*choice.length);
    return choice[randomChoice];
}

function playRound(playerSelection, computerSelection){
    if(playerSelection == computerSelection){
        const res = "Draw!";
        console.log(res);
    }
    else if(playerSelection=="Rock" && computerSelection=="Scissors" || playerSelection=="Paper" && computerSelection=="Rock" || playerSelection=="Scissors" && computerSelection=="Paper"){
        const res = "Player Wins!";
        console.log(res);
    }
    else if(computerSelection=="Rock" && playerSelection=="Scissors" ||computerSelection=="Paper" && playerSelection=="Rock" || computerSelection=="Scissors" && playerSelection=="Paper"){
        const res = "Computer Wins!";
        console.log(res);
    }
}

var buttons = document.querySelectorAll(".btn").length;

for (var i = 0; i < buttons ; i++) {
    const currentbtn = document.querySelectorAll(".btn")[i];
    currentbtn.addEventListener("click", function() {
        var temp = 0;
        temp += 1;
        
        let result = currentbtn.textContent;
        const cc = getComputerChoice();
        playRound(result,cc);
    });

}

// function game(playerChoice){
//     let pcount=0;
//     let ccount=0;
//     for(let i=0; i<5; i++){
//         let ps = playerChoice;
//         const cc = getComputerChoice();
//         let playres = playRound(ps,cc);
//         if(playres=="Player Wins!"){
//             pcount=pcount+1;
//             console.log("Player Wins this Round!");
//         }
//         else if(playres=="Computer Wins!"){
//             ccount=ccount+1;
//             console.log("Computer Wins this Round!");
//         }  
//         else{
//             console.log("Draw!");
//         }
//     }
//     console.log("Score:-");
//     console.log("Player:" + pcount);
//     console.log("Computer:" + ccount);
// }


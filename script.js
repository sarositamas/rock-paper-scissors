//Player been asked about choice and return value
function playerSelection(){
    answer = prompt("Rock, Paper or Scissors:  ");
    return answer.toLowerCase();
}
//Computer chooses randomly about the three options
function computerSelection(){
    let outcome = Math.floor(Math.random()*3)+1;
    if (outcome == 1){
        return "rock";
    }else if(outcome == 2){
        return "paper";
    }else{
        return "scissors";
    }}

let computerWin = 0;
let playerWin = 0;

//The winner being decided and declared in the function
function playRound ( playerSelection,  computerSelection){
    
    const player = playerSelection;
    const computer = computerSelection;

    

    if ( computer === player){
        console.log("It is a TIE!");}
    else if ( computer == "paper" && player ==  "rock"){
        console.log("You Lose! Paper beats Rock.");
        computerWin++;}
    else if ( computer == "scissors" && player == "paper"){
        console.log("You Lose! Scissors beats Paper.");
        computerWin++;}
    else if ( computer == "rock" && player == "scissors"){
        console.log("You Lose! Rock beats Scissors.");
        computerWin++;}
    else if ( player == "rock" && computer == "scissors"){
        console.log("You Win! Rock beats Scissors.");
        playerWin++;}
    else if ( player == "paper" && computer == "rock"){
        console.log("You Win! Paper beats Rock.");
        playerWin++;}
    else if ( player == "scissors" && computer == "paper"){
        console.log("You Win! Scissors beats Paper.");
        playerWin++;}
    }



//The outcome of the game happens here  
for (let i = 0; i < 5; i++){
playRound(playerSelection(), computerSelection());}

console.log(`Computer Wins: ${computerWin} ,Player Wins: ${playerWin}`);
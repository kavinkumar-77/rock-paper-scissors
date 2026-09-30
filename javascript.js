console.log("Hello World");
let cChoice="";
function getComputerChoice(choice){
    let option=Math.floor(Math.random()*3)+1;
    if(option==1){
        choice="rock";
    }
    else if(option==2){
        choice="paper";
    }
    else{
        choice="scissors";
    }
    return choice;
}
cChoice=getComputerChoice(cChoice);
let hChoice=parseInt(prompt("Enter a choice from 1 to 3:"));
function getHumanChoice(choice){
    if(choice==1){
        choice="rock";
    }
    else if(choice==2){
        choice="paper";
    }
    else{
        choice="scissors";
    }
    return choice;
}
hChoice=getHumanChoice(hChoice);
console.log(cChoice,hChoice);
let humanScore=0;
let computerScore=0;
function playRound(humanChoice,computerChoice){
    if (humanChoice==computerChoice){
        console.log("It's a tie");
    }
    else if(humanChoice=="rock" && computerChoice=="scissors"){
        console.log("You win, Rock beats scissors");
        humanScore=humanScore+1;
    }
    else if(humanChoice=="paper" && computerChoice=="rock"){
        console.log("You win, paper beats rock");
        humanScore=humanScore+1;
    }
    else if(humanChoice=="scissors" && computerChoice=="paper"){
        console.log("You win, scissors beat paper");
        humanScore=humanScore+1;
    }
    else{
        console.log("You lose",computerChoice,"beats",humanChoice);
    }
}

console.log(playRound(hChoice,cChoice));
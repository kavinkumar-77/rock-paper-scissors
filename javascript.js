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
let hChoice=parseInt(prompt("Enter a choice:"));
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

}
let userScore = Number(localStorage.getItem("userScore")) || 0;
let compScore = Number(localStorage.getItem("compScore")) || 0;

const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const resetBtn = document.querySelector("#reset-btn");

userScorePara.innerText = userScore;
compScorePara.innerText = compScore;

const genCompChoice = () => {

const options=["rock","paper","scissors"];

return options[Math.floor(Math.random()*3)];

};

const drawGame=()=>{

msg.innerText="🤝 It's a Draw!";

msg.style.background="#2563eb";

};

const showWinner=(userWin,userChoice,compChoice)=>{

if(userWin){

userScore++;

localStorage.setItem("userScore",userScore);

userScorePara.innerText=userScore;

msg.innerText=`🎉 You Win! ${userChoice} beats ${compChoice}`;

msg.style.background="green";

}else{

compScore++;

localStorage.setItem("compScore",compScore);

compScorePara.innerText=compScore;

msg.innerText=`😢 You Lose! ${compChoice} beats ${userChoice}`;

msg.style.background="crimson";

}

};

const playGame=(userChoice)=>{

const compChoice=genCompChoice();

if(userChoice===compChoice){

drawGame();

return;

}

let userWin=true;

if(userChoice==="rock"){

userWin=compChoice==="paper"?false:true;

}

else if(userChoice==="paper"){

userWin=compChoice==="scissors"?false:true;

}

else{

userWin=compChoice==="rock"?false:true;

}

showWinner(userWin,userChoice,compChoice);

};

choices.forEach(choice=>{

choice.addEventListener("click",()=>{

playGame(choice.id);

});

});

resetBtn.addEventListener("click",()=>{

userScore=0;

compScore=0;

localStorage.clear();

userScorePara.innerText=0;

compScorePara.innerText=0;

msg.innerText="Choose your move!";

msg.style.background="#2563eb";

});
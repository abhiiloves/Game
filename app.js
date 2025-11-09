let userscore=0;
let compscore=0;

const choices=document.querySelectorAll('.choice');
const msg=document.querySelector('#msg');

const userscorepara=document.querySelector('#user-label-text');
const compscorepara=document.querySelector('#computer-label-text');

const genCompChoice=()=>{
    const options=['rock','paper','scissors'];
    const randomNum=Math.floor(Math.random()*3);
    return options[randomNum];
}

const draw=()=>{
    msg.textContent=`It's a draw! You both chose the same.`;
    msg.style.backgroundColor = "#081b31";
}
const playgame=(userChoice)=>{
    const compChoice=genCompChoice();

        if (userChoice===compChoice){
            draw();
        } else {
            let userWin=false;
            if (
                (userChoice==='rock' && compChoice==='scissors') ||
                (userChoice==='paper' && compChoice==='rock') ||
                (userChoice==='scissors' && compChoice==='paper')
            ) {
                userWin=true;
            }
            showWinner(userWin, userChoice, compChoice);
        }
    
};
const showWinner=(userWin, userChoice, compChoice)=>{
    if(userWin){
        userscore++;
        userscorepara.textContent=userscore;
        msg.textContent=`You chose ${userChoice} and computer chose ${compChoice}. You win!`;
    }else{
        compscore++;
        compscorepara.textContent=compscore;
        msg.textContent=`You chose ${userChoice} and computer chose ${compChoice}. You lose!`;
    }
};
choices.forEach(choice=>{
    choice.addEventListener('click',()=>{
           const userChoice=choice.getAttribute('id'); // Corrected attribute
        playgame(userChoice);
    });
});
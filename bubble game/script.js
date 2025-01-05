let timer = 60;
let score = 0;
var hitdigit = 0;
document.querySelector("#timer").textContent = timer

function runTimer(){
    var timerint = setInterval(function(){
        if(timer > 0){
            timer--;
            document.querySelector("#timer").textContent = timer
        }else{
            clearInterval(timerint);
            document.querySelector(".game").innerHTML = ` <p class="over">GAME OVER</p> `;
        }
    },1000);
};
function makebubble(){
    let digit  = "";
    for(let i=1; i<=176; i++){
        let rn = Math.floor(Math.random()*10);
        digit +=`<div class="digit">${rn}</div>`;
    }
    document.querySelector(".game").innerHTML = digit;
}
function hit(){
    hitdigit = Math.floor(Math.random()*10);
    document.querySelector("#hit").textContent = hitdigit;
}
function increaseScore (){
    score += 10;
    document.querySelector("#score").textContent = score;
}
runTimer();
hit();
makebubble();


document.querySelector(".game")
.addEventListener("click", function(dets){
    let clickedNum = Number(dets.target.textContent);
     if(clickedNum === hitdigit){
       increaseScore();
       hit();
       makebubble();
     }
});



    

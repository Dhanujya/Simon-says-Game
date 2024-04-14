let gameseq=[];
let userseq=[];
let le;

let btns=["yellow","red","purple","green"];
let started=false;
let level=0;
let h2=document.querySelector("h2");
document.addEventListener("keypress",function(){
    if(started==false){
        console.log("started");
        started=true;
        levelup();
    }
});

function levelup(){
    userseq=[];
    level++;
    h2.innerText=`Level ${level}`;
    let randidx=Math.floor(Math.random()*3);
    let randclr=btns[randidx];
    let randbtn=document.querySelector(`.${randclr}`);
    gameseq.push(randclr);
    btnflash(randbtn);

}
function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },500);
}

function checkans(idx){
    if(userseq[idx]==gameseq[idx]){
        if(userseq.length==gameseq.length){
            setTimeout(levelup,1000);
        }
    }
    else{
        h2.innerHTML=`Game Over! Your Score was <b>${level*10}</b><br> Pres Any Key to start.`
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },200);
        reset();
    }

}

function btnpress(){
    let btn=this;
    btnflash(btn);
    userclr=btn.getAttribute("id");
    userseq.push(userclr);
    checkans(userseq.length-1);
}
let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnpress);
}

function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
}



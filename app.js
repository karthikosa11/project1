let gameSeq=[];
let userSeq=[];


let btnColor=["yellow","red","green","purple"];
let started=false;
let level=0;


let h2=document.querySelector("h2");
document.addEventListener("keypress",function(){
  if(started==false)
  { 
    started=true;                             //1
    console.log("started");
    levelUp();
  }
});


function gameFlash(btns)
{
  
  // for(i=0;i<level;i++){
btns.classList.add("flash");
setTimeout(function(){                      //3
  btns.classList.remove("flash");
},200);
  }
  // levelUp();


function userFlash(btns)
{
btns.classList.add("user");                 //4
setTimeout(function(){
  btns.classList.remove("user");
},100);
  // levelUp();
}


function gameOver(btns)
{
btns.classList.add("gameOver"); 
h2.innerText=`Game over! and you are at level ${level }   Press any key to start`;                //4
setTimeout(function(){
  btns.classList.remove("gameOver");
},100);
  
resetTo();
}

function resetTo(){
  started=false;
  gameSeq=[];
  userSeq=[];
  level=0;
}

function levelUp(){
  userSeq=[];
  level++;
  h2.innerText=`Level ${level}`;
                  //2

  let randInx=Math.floor(Math.random()*3);
  let randColor=btnColor[randInx];
  gameSeq.push(randColor);
  console.log(gameSeq);
  console.log(randColor);
  let ranbtn=document.querySelector(`.${randColor}`);

  gameFlash(ranbtn);
}



function checkAns(idx){
  console.log("curr level :",level);
console.log("game length",gameSeq.length);
console.log("user length",userSeq.length);
  console.log(idx);
  if(userSeq[idx]==gameSeq[idx])            //5
  {
      if(userSeq.length==gameSeq.length)
      {
        setTimeout(levelUp,1000);
      }
      else
      console.log("userseq not yet matched");
    // levelUp();
  }
  else{
    let btnGameOver=document.querySelector("body");
    gameOver(btnGameOver);
    // let back=document.querySelector("body");
    // gameOver(back);
  }
  
}

function btnPress(){
  // console.log(this);  
  
  //4
  if(level>0){
  let btn=this;
  userFlash(btn);
  

  let userColor=btn.getAttribute("id");
  console.log(userColor);
  console.log(userSeq);
  userSeq.push(userColor);

  checkAns(userSeq.length-1);
  }
}

let btnAll=document.querySelectorAll(".btn");
  for(btn of btnAll)
  {                                                //4
    btn.addEventListener("click",btnPress);
  }

  

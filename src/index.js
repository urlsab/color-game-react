let h1BackgroundColor = document.getElementById("part1");
h1BackgroundColor.style.backgroundColor = "#538cc6";

let clickCounter = "0" ;
let halfPoint = 0.5;
let comboNum = document.getElementById("comboNum");

let memo = document.getElementById("memo");
  
let shuffleButton = document.getElementById("shuffle");
let esayButton = document.getElementById("easy");
let hardButton = document.getElementById("hard");
let easyCliked = 0;
let hardCliked = 1;

let buttons = document.getElementsByClassName("buttons");
let hardCorect = buttons[getRndInteger(0,5)];
let easyCorect = buttons[getRndInteger(0,2)];

let rgbString = "rgb( , , )";
let replace1 = " ";
let replace2 = " ";
let replace3 = " ";

let Rpart = getRndInteger(0,255);
let Bpart = getRndInteger(0,255);
let Gpart = getRndInteger(0,255);

function corect(){
    memo.textContent = "correct!";
}

function wrong (){
    memo.textContent = "try another";
}

function clear(){
    memo.textContent = " ";
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;  
}

function header (){
  Rpart = getRndInteger(0,255);
  randInteger1.innerHTML = Rpart;
  
  Gpart = getRndInteger(0,255);
  randInteger2.innerHTML = Gpart;
  
  Bpart = getRndInteger(0,255);
  randInteger3.innerHTML = Bpart;

    if(hardCliked === 1){
        easyCorect = 0;
        hardCorect = 0;
        allowAll();
        shuffle();
    }
    else if (easyCliked === 1)
    {
        hide();
        easyCorect = 0;
        allowHalf();
        shuffleHalf();
    }
}

function disabledButtons(){
    for (let i = 0; i < 6; i++){
       buttons[i].disabled= true; 
    }
}

function allowAll (){
    for (let i = 0; i < 6; i++){
        buttons[i].disabled = false; 
     }
}
   
function allowHalf(){
    for (let i = 0; i < 3; i++){
        buttons[i].disabled = false; 
     }

    for (let i = 3; i < 6; i++){
    buttons[i].disabled = true; 
     }
}
   
function shuffle(){
    for(let i = 0; i < 6; i++){
        // color all buttons. "/ /i" = the first macth for " "
        replace1 = rgbString.replace(/ /i,getRndInteger(0,255));//"rgb( , , )" >> "rgb(num , , )"
        replace2 = replace1.replace(/ /i,getRndInteger(0,255)); //"rgb( , , )" >> "rgb(num ,num , )"
        replace3 = replace2.replace(/ /i,getRndInteger(0,255)); //"rgb( , , )" >> "rgb(num ,num ,num )"
        buttons[i].style.backgroundColor = replace3;
    }
    hardCorect = buttons[getRndInteger(0,5)];
    easyCorect = 0;
    replace1 = rgbString.replace(/ /i,Rpart);
    replace2 = replace1.replace(/ /i,Gpart);
    replace3 = replace2.replace(/ /i,Bpart);
    hardCorect.style.backgroundColor = replace3;
}

function shuffleHalf(){
    for(let i = 0; i < 3; i++){
        replace1 = rgbString.replace(/ /i,getRndInteger(0,255));
        replace2 = replace1.replace(/ /i,getRndInteger(0,255));
        replace3 = replace2.replace(/ /i,getRndInteger(0,255));
        buttons[i].style.backgroundColor = replace3;
    }

    easyCorect = buttons[getRndInteger(0,2)];
    hardCorect = 0;
    replace1 = rgbString.replace(/ /i,Rpart);
    replace2 = replace1.replace(/ /i,Gpart);
    replace3 = replace2.replace(/ /i,Bpart);
    easyCorect.style.backgroundColor = replace3;
} 

function hide (){
    buttons[3].style.backgroundColor = "black";
    buttons[4].style.backgroundColor = "black";
    buttons[5].style.backgroundColor = "black";
    buttons[3].disabled= true;
    buttons[4].disabled= true;
    buttons[5].disabled= true;
}

function h1BackgroundHard (){
    h1BackgroundColor.style.backgroundColor = hardCorect.style.backgroundColor;
}

function h1BackgroundEasy (){
    h1BackgroundColor.style.backgroundColor = easyCorect.style.backgroundColor;
}

function colorAll (){
    for(let i = 0; i < 6; i++){
    buttons[i].style.backgroundColor = hardCorect.style.backgroundColor;
    }
}

function colorHalf (){
    for(let i = 0; i < 3; i++){
    buttons[i].style.backgroundColor = easyCorect.style.backgroundColor;
    }
}

function start(){
    for(let i = 0; i < 6; i++){
        replace1 = rgbString.replace(/ /i,getRndInteger(0,255));
        replace2 = replace1.replace(/ /i,getRndInteger(0,255)); 
        replace3 = replace2.replace(/ /i,getRndInteger(0,255)); 
        buttons[i].style.backgroundColor = replace3;
    }
    replace1 = rgbString.replace(/ /i,Rpart);
    replace2 = replace1.replace(/ /i,Gpart);
    replace3 = replace2.replace(/ /i,Bpart);
    hardCorect.style.backgroundColor = replace3;
}

function guess(){
    clickCounter++;
    if(hardCliked === 1){
      if(this.style.backgroundColor === hardCorect.style.backgroundColor && clickCounter === 1){
          colorAll();
          setTimeout(h1BackgroundHard,500);
          disabledButtons();
          corect();
          shuffleButton.textContent = "NEW GAME";
          comboNum.textContent = Number(++comboNum.innerHTML);
          clickCounter = 0;
      }
      else if (this.style.backgroundColor === hardCorect.style.backgroundColor){
        colorAll();
        setTimeout(h1BackgroundHard,500);
        disabledButtons();
        corect();
        shuffleButton.textContent = "NEW GAME";
        clickCounter = 0;
        comboNum.textContent = "0";
      }
      else{
              this.style.backgroundColor="black";
              wrong();
              this.disabled = true;
          }          
    }
          
           if(easyCliked === 1){
              if(this.style.backgroundColor === easyCorect.style.backgroundColor && clickCounter === 1){
                  colorHalf();
                  setTimeout(h1BackgroundEasy,500);
                  disabledButtons();
                  corect();
                  shuffleButton.textContent = "NEW GAME";
                  comboNum.textContent = Number(comboNum.innerHTML)+halfPoint;
                  clickCounter = 0;
              }
              else if(this.style.backgroundColor === easyCorect.style.backgroundColor){
                colorHalf();
                setTimeout(h1BackgroundEasy,500);
                disabledButtons();
                corect();
                shuffleButton.textContent = "NEW GAME";
                clickCounter = 0;
                comboNum.textContent = "0"; 
              }
              else{
                    this.style.backgroundColor="black";
                    wrong();
                    this.disabled = true;
                  }
            }                    
}

header();
start();
shuffle();

shuffleButton.addEventListener("click",function(){
    clear();
    shuffleButton.textContent = "SHUFFLE";
    header();
    h1BackgroundColor.style.backgroundColor = "#538cc6";
});

hardButton.addEventListener("click",function(){
   h1BackgroundColor.style.backgroundColor = "#538cc6";
    easyCliked = 0;
    hardCliked = 1;
    easyCorect = 0;
    hardCorect = 0;
    shuffleButton.textContent = "SHUFFLE";
    header();
    clear();
    allowAll();
    
});

esayButton.addEventListener("click",function(){
    h1BackgroundColor.style.backgroundColor = "#538cc6";
    easyCliked = 1;
    hardCliked = 0;
    easyCorect = 0;
    hardCorect = 0;
    shuffleButton.textContent = "SHUFFLE";
    header();
    clear();
    allowHalf();
    shuffleHalf();
});

buttons[0].addEventListener("click",guess);
buttons[1].addEventListener("click",guess);
buttons[2].addEventListener("click",guess);
buttons[3].addEventListener("click",guess);
buttons[4].addEventListener("click",guess);
buttons[5].addEventListener("click",guess);

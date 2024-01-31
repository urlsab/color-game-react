import './App.css';
import React, { useEffect, useRef } from 'react';

const App = () => {

  const getRndInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) ) + min;  
  }

  let buttons = document.getElementsByClassName("buttons");
  
  let easyCliked = 0;
  let hardCliked = 1;
  let points = 0;
  
  let hardCorect = buttons[getRndInteger(0,5)];
  let easyCorect = buttons[getRndInteger(0,2)];

  let rgbString = "rgb( , , )";
  
  let clickCounter = 0;
 
  let Rpart = getRndInteger(0,255); 
  let Gpart = getRndInteger(0,255);
  let Bpart = getRndInteger(0,255); 

  let colorCorrect = `( ${Rpart} ,${Gpart} , ${Bpart} )` ;
  let correctStyle = `background-color: rgb(${Rpart} ,${Gpart} , ${Bpart})`;
  let StyleCorrect = `backgroundColor: rgb(${Rpart} ,${Gpart} , ${Bpart})`;

  let randInteger1 = document.getElementsByClassName("randInteger1");
  let randInteger2 = document.getElementsByClassName("randInteger2");
  let randInteger3 = document.getElementsByClassName("randInteger3");
  randInteger1 = Rpart;
  randInteger2 = Gpart;
  randInteger3 = Bpart;

const header = () => {
  
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
 
const shuffle = () => {
  let replace1 = " ";
  let replace2 = " ";
  let replace3 = " ";
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

const shuffleHalf = () =>{
  let replace1 = " ";
  let replace2 = " ";
  let replace3 = " ";
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

const hide = () => {
  buttons[3].style.backgroundColor = "black";
  buttons[4].style.backgroundColor = "black";
  buttons[5].style.backgroundColor = "black";
  buttons[3].disabled = true;
  buttons[4].disabled = true;
  buttons[5].disabled = true;
}

function h1BackgroundHard (){
  // h1BackgroundColor.style.backgroundColor = hardCorect.style.backgroundColor;
}

function h1BackgroundEasy (){
  // h1BackgroundColor.style.backgroundColor = easyCorect.style.backgroundColor;
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
  let replace1 = " ";
  let replace2 = " ";
  let replace3 = " ";
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

// shuffleButton.addEventListener("click",function(){

//   shuffleButton.textContent = "SHUFFLE";
//   header();
//   h1BackgroundColor.style.backgroundColor = "#538cc6";
// });



const hardClicked = () => {
  
  easyCliked = 0;
  hardCliked = 1;
  easyCorect = 0;
  hardCorect = 0;
  header();
  
  allowAll();
}

const easyClicked = () => {
  easyCliked = 1;
  hardCliked = 0;
  easyCorect = 0;
  hardCorect = 0;
  header();
  
  allowHalf();
  shuffleHalf();
}


  const ref = useRef(null);

  useEffect(() => {
    header();
    start();
    shuffle();

const guess = () => {
  clickCounter++;
  if(hardCliked === 1){
    if(document.getElementById('first').style.backgroundColor === hardCorect.style.backgroundColor  ||
    document.getElementById('second').style.backgroundColor === hardCorect.style.backgroundColor ||
    document.getElementById('third').style.backgroundColor === hardCorect.style.backgroundColor ||
    document.getElementById('fb').style.backgroundColor === hardCorect.style.backgroundColor ||
    document.getElementById('sb').style.backgroundColor === hardCorect.style.backgroundColor ||
    document.getElementById('tb').style.backgroundColor === hardCorect.style.backgroundColor 
     && clickCounter === 1){
        colorAll();
        // setTimeout(h1BackgroundHard,500);
        disabledButtons();
        clickCounter = 0;
    }
    else if (document.getElementById('first').style.backgroundColor === hardCorect.style.backgroundColor ||
    document.getElementById('second').style.backgroundColor === hardCorect.style.backgroundColor ||
    document.getElementById('third').style.backgroundColor === hardCorect.style.backgroundColor ||
    document.getElementById('fb').style.backgroundColor === hardCorect.style.backgroundColor ||
    document.getElementById('sb').style.backgroundColor === hardCorect.style.backgroundColor ||
    document.getElementById('tb').style.backgroundColor === hardCorect.style.backgroundColor ){
      colorAll();
      // setTimeout(h1BackgroundHard,500);
      disabledButtons();
      clickCounter = 0;
      // comboNum.textContent = "0";
    }
    else {
      this.style.backgroundColor="black";
      this.disabled = true;
    }          
  }
        
         if(easyCliked === 1){
            if(document.getElementById('first').style.backgroundColor === easyCorect.style.backgroundColor ||
            document.getElementById('second').style.backgroundColor === easyCorect.style.backgroundColor ||
            document.getElementById('third').style.backgroundColor === easyCorect.style.backgroundColor 
              && clickCounter === 1){
                colorHalf();
                // setTimeout(h1BackgroundEasy,500);
                disabledButtons();
                
                
                // comboNum.textContent = Number(comboNum.innerHTML)+halfPoint;
                clickCounter = 0;
            }

            else if(document.getElementById('first').style.backgroundColor === easyCorect.style.backgroundColor ||
            document.getElementById('second').style.backgroundColor === easyCorect.style.backgroundColor ||
            document.getElementById('third').style.backgroundColor === easyCorect.style.backgroundColor ){
              colorHalf();
              // setTimeout(h1BackgroundEasy,500);
              disabledButtons();
    
              clickCounter = 0;
              // comboNum.textContent = "0"; 
            }
            else{
              this.style.backgroundColor="black";
              
              this.disabled = true;
            }
          }                    
}
    

    const element = ref.current;

    element.addEventListener('click', guess);

    return () => {
      element.removeEventListener('click', guess);
    };

  }, []);

  return (

    <div className='App'>
      <div className="part1">
        <h4>THE GREAT</h4>
        <h1 className="h1bc"><span className="r">R</span><span className="g">G</span><span className="b">B</span>{" "}
        ( <span className="randInteger1">{Rpart},</span> {Gpart}, <span className="randInteger2"></span>{Bpart} <span className="randInteger3"></span>) {" "}
        <span className="combo">COMBO:</span> <span className="comboNum">{points}</span> </h1>
        <h4>GUESSING GAME</h4>
      </div>

        <div className='ulStyle'>
          <ul><span className="shuffle" onClick={()=>{ header(); shuffle();}}>SHUFFLE</span> </ul>
          <ul className="memo">{ hardCliked ? "hardMode" : easyCliked ? "easyMode" : "start" }</ul>
          <ul><span className="easy" onClick={easyClicked}>EASY</span> <span className="hard" onClick={hardClicked} >HARD</span> </ul>
        </div>
          
        <div className="part3">
          <button ref={ref} className="buttons" id="first"></button>
          <button ref={ref} className="buttons" id="second"></button>
          <button ref={ref} className="buttons" id="third"></button>
        </div>

        {/* background-color: rgb(214, 83, 16); */}
            
        <div className="part3">
            <button ref={ref} className="buttons" id="fb"></button>
            <button ref={ref} className="buttons" id="sb"></button>
            <button ref={ref} className="buttons" id="tb"></button>
        </div>
         
      </div>

  );

}

export default App; 
import './App.css';

let clickCounter = "0" ;
let halfPoint = 0.5;
let easyCliked = 0;
let hardCliked = 1;
let rgbString = "rgb( , , )";
const txtCorect = "correct!";
const txtTryAgain = "try again";
const txtEmpty = " ";
const txtNewgame = "new game";
const txtShuffle = "shuffle";

const getRndInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) ) + min;  
}

const hardCorect = getRndInteger(0,5);
const easyCorect = getRndInteger(0,2);
const randColor = getRndInteger(0,255);

//shuffle the header
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

//maybe here forEach method to get the array buttons
const disabledButtons = () => {
    for (let i = 0; i < 6; i++){
      // disabled all buttons
    }
}

const allowAll = () => {
    for (let i = 0; i < 6; i++){
        // allow all buttons - disabled=false
     }
}
   
const allowHalf = () => {
    for (let i = 0; i < 3; i++){
      //disabled = false; 
     }

    for (let i = 3; i < 6; i++){
      //disabled = true; 
    }
}
   
const shuffle = () => {
    for(let i = 0; i < 6; i++){
        // color all buttons. "/ /i" = the first macth for " "
        let replace1 = rgbString.replace(/ /i,getRndInteger(0,255));//"rgb( , , )" >> "rgb(num , , )"
        let replace2 = replace1.replace(/ /i,getRndInteger(0,255)); //"rgb( , , )" >> "rgb(num ,num , )"
        let replace3 = replace2.replace(/ /i,getRndInteger(0,255)); //"rgb( , , )" >> "rgb(num ,num ,num )"
        // buttons[i].style.backgroundColor = replace3;
    }
    // make the corect answer of the header with new color
    // bring the header nums-color to rand button.
    hardCorect = getRndInteger(0,5);
    easyCorect = 0;
    let replace1 = rgbString.replace(/ /i,randColor);
    let replace2 = replace1.replace(/ /i,randColor);
    let replace3 = replace2.replace(/ /i,randColor);
    hardCorect.style.backgroundColor = replace3;
}

const shuffleHalf = () => {
    for(let i = 0; i < 3; i++){
        // color half buttons
        let replace1 = rgbString.replace(/ /i,getRndInteger(0,255));
        let replace2 = replace1.replace(/ /i,getRndInteger(0,255));
        let replace3 = replace2.replace(/ /i,getRndInteger(0,255));
        // buttons[i].style.backgroundColor = replace3;
    }
    // make the corect answer
    easyCorect = getRndInteger(0,2);
    hardCorect = 0;
    let replace1 = rgbString.replace(/ /i,randColor);
    let replace2 = replace1.replace(/ /i,randColor);
    let replace3 = replace2.replace(/ /i,randColor);
    easyCorect.style.backgroundColor = replace3;
} 

// or with classNamelist.add("hide")
const hide = () =>{
  // button color = black ;
  // buttons 3-5 = disabled; 
}

const colorAll = () =>{
  for(let i = 0; i < 6; i++){
    //color all buttons
  }
}

const colorHalf = () => {
  for(let i = 0; i < 3; i++){
  // color only 0-2 buttons
  }
}

const start = () => {
    for(let i = 0; i < 6; i++){
        // color all buttons. "/ /i" = the first macth for " "
        let replace1 = rgbString.replace(/ /i,getRndInteger(0,255));//"rgb( , , )" >> "rgb(num , , )"
        let replace2 = replace1.replace(/ /i,getRndInteger(0,255)); //"rgb( , , )" >> "rgb(num ,num , )"
        let replace3 = replace2.replace(/ /i,getRndInteger(0,255)); //"rgb( , , )" >> "rgb(num ,num ,num )"
        // buttons[i].style.backgroundColor = replace3;
    }
    let replace1 = rgbString.replace(/ /i,randColor);
    let replace2 = replace1.replace(/ /i,randColor);
    let replace3 = replace2.replace(/ /i,randColor);
    hardCorect.style.backgroundColor = replace3;
}

//carefull with the position of the if's & else's!!!
const guess = () =>{
    clickCounter++;
    if(hardCliked === 1){
      if(this.style.backgroundColor === hardCorect.style.backgroundColor && clickCounter === 1){
          colorAll();
          // setTimeout(somecolor,500);
          disabledButtons();
          // corect();
          // shuffleButton.textContent = "NEW GAME";
          // id combo numb++
          clickCounter = 0;
      }
      else if (this.style.backgroundColor === hardCorect.style.backgroundColor){
        colorAll();
        // setTimeout(somecolor,500);
        disabledButtons();
        // corect();
        // shuffleButton.textContent = "NEW GAME";
        clickCounter = 0;
        // id combonum = 0;
      }
      else{
            this.style.backgroundColor="black";
            // wrong();
            this.disabled = true;
          }          
    }
          
    if(easyCliked === 1){
      if(this.style.backgroundColor === easyCorect.style.backgroundColor && clickCounter === 1){
          colorHalf();
          // setTimeout(somecolor,500);
          disabledButtons();
          // corect();
          // shuffleButton.textContent = "NEW GAME";
          // id combonum + 0.5 points
          clickCounter = 0;
      }
      else if(this.style.backgroundColor === easyCorect.style.backgroundColor){
        colorHalf();
        // setTimeout(somecolor,500);
        disabledButtons();
        // corect();
        // shuffleButton.textContent = "NEW GAME";
        clickCounter = 0;
        // id combonum = 0;
      }
      else{
            this.style.backgroundColor="black";
            // wrong();
            this.disabled = true;
          }
    }                    
}

// at the open of the page it will display many colors
header();
start();
shuffle();

// 3. declare events for each button guess:

//innerHTML bring us the numbers inside the <span> element of the "RGB(, ,)"
const shuffleButton = () =>{ //shuffle cliked
    // clear();
    // shuffleButton.textContent = "SHUFFLE";
    header();
    // h1BackgroundColor.style.backgroundColor = "#538cc6";
};

const hardButton = () =>{//hard cliked
   // h1BackgroundColor.style.backgroundColor = "#538cc6";
    easyCliked = 0;
    hardCliked = 1;
    easyCorect = 0;
    hardCorect = 0;
    // shuffleButton.textContent = "SHUFFLE";
    header();
    // clear();
    allowAll();
    
};

const esayButton = () => {//easy cliked
    // h1BackgroundColor.style.backgroundColor = "#538cc6";
    easyCliked = 1;
    hardCliked = 0;
    easyCorect = 0;
    hardCorect = 0;
    // shuffleButton.textContent = "SHUFFLE";
    header();
    // clear();
    allowHalf();
    shuffleHalf();
};

// when click on button - active guess function

const App = () => {

  return (

    <div classNameName="App">
      
      <div id="part1" style={{backgroundColor:'#538cc6'}}>
            <h4>THE GREAT</h4>
            <h1 id ="h1"><span id = "r">R</span><span id = "g">G</span><span  id="b">B </span>
                (<span id="randInteger1"></span> , <span id="randInteger2"></span> , <span id="randInteger3"></span>) 
                <span id = "combo"> COMBO:</span> <span id = "comboNum"> 0 </span> </h1>
                
            <h4>GUESSING GAME</h4>
        </div>

        <ul className="nav justify-content-around">
            <li className="nav-item col-4"><span id="shuffle">SHUFFLE</span> </li>
            <li className= "col-4" id="memo"></li>
            <li className="nav-item col-4"><span id="easy">EASY</span> <span id="hard">HARD</span> </li>
        </ul>

        <div id="part3">
            <div>
                <button className="buttons" id="first"></button>
                <button className="buttons" id="second"></button>
                <button className="buttons" id="third"></button>
            </div>
            
            <div id="part4">
                <button className="buttons" id="fb"></button>
                <button className="buttons" id="sb"></button>
                <button className="buttons" id="tb"></button>
            </div>
        </div> 

    </div>
  );
}

export default App;
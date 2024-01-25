import './App.css';

function App() {

  // yy

  return (
    <div className="App">
      

      
      <div id="part1">
            <h4>THE GREAT</h4>
            <h1 id ="h1"><span id = "r">R</span><span id = "g">G</span><span  id="b">B</span>
                (<span id="randInteger1"></span> , <span id="randInteger2"></span> , <span id="randInteger3"></span>) 
                <span id = "combo">COMBO:</span> <span id = "comboNum">0</span> </h1>
                
            <h4>GUESSING GAME</h4>
        </div>

        <ul class="nav justify-content-around">
            <li class="nav-item col-4"><span id="shuffle">SHUFFLE</span> </li>
            <li class= "col-4" id="memo"></li>
            <li class="nav-item col-4"><span id="easy">EASY</span> <span id="hard">HARD</span> </li>
        </ul>

        <div id="part3">
            <div>
                <button class="buttons" id="first"></button>
                <button class="buttons" id="second"></button>
                <button class="buttons" id="third"></button>
            </div>
            
            <div id="part4">
                <button class="buttons" id="fb"></button>
                <button class="buttons" id="sb"></button>
                <button class="buttons" id="tb"></button>
            </div>
        </div> 
    

      
    </div>
  );
}

export default App;

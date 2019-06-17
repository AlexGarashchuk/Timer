import React from 'react';
import './App.css';

let arr = []
let arrLength = 101;
for (let i = 0; i < arrLength; i++) {
  arr.push(i)
}


function LoopThroughSplittedText(arr) {
  for (let i = 0; i < arr.length; i++) {
    (function (i) {
      //500 это скорость 500ms для одной цыфры 
      let a = 500/ arr.length;

      let b = (100+a*i)*i
      // console.log(a)
      // console.log(b)
      setTimeout(() =>{
        document.getElementById('timer').innerHTML = arr[i];
      }, b)
    })(i);
  };
}
LoopThroughSplittedText(arr);




function App() {
  return (
    <div className="App" id="app">
      <div className="timer" id="timer">
      
      </div>
    </div>
  );
}




export default App;

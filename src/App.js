import React from 'react';
import Sketch from "react-p5";
import * as dfd from "danfojs"

function App() {

  React.useEffect(()=>{
    let data = dfd.readCSV('./Data/nhm.csv').then((df)=>{
      df.plot("pie").table() 
    }).catch(err=>{
      console.log(err);
   })
  },[])



  let a = 300;
  let b = 300;
  let speed = 10;

  let setup = (p5, canvasParentRef) => {
    let xyz = p5.createCanvas(1000, 800).parent(canvasParentRef);
    //Calculation to center the canvas 
    let x = (p5.windowWidth - p5.width) / 2;
    let y = (p5.windowHeight - p5.height) / 2;
    xyz.position(x, y);
  };

  let draw = (p5) => {
    p5.background("rgb(100%,0%,10%)");
  };

  return (
    <div className="App">
     
      <Sketch setup={setup} draw={draw} className="App" />
      <div id='pie'></div>
    </div>
  );
}

export default App;

import { useState } from 'react';
import './App.css';

function App() {
  
  const [count, setCount] = useState(0);
  function decrement(){
    if(count>-10)
    setCount(count-1);
  }
  function reset(){
    setCount(0);
  }
  function increment(){
    if(count<10)
    setCount(count+1);
  }
  return (
  <>
  <div className='Body'>
    <div className='CenterDisplay'>
      <h1>Counter</h1>
      <h2>{count}</h2>
      <div className='ButtonContainer'>
        <button className="Button Dec" onClick={decrement}>Decrement</button>
        <button className="Button Res" onClick={reset}>Reset</button>
        <button className="Button Inc" onClick={increment}>Increment</button>
      </div>
    </div>
  </div>
  </>
  );
}

export default App;

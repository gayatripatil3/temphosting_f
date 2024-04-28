import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [textVal,textValFun]=useState('');
  const submitVal=async (e)=>{
    e.preventDefault();
    const response=await fetch(`http://localhost:3001/api/msg/${textVal}`,{
      method:'GET'
    })
    const data=await response.json();
    if(data.success)
    alert(`Process successfull. Msg : ${data.textVal}`)
  else
  alert(`Process not successfull. Msg : ${data.textVal}`)
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <form action="">
          <input type="text" value={textVal} onChange={(e)=>textValFun(e.target.value)}/>
          <button onClick={(e)=>submitVal(e)}>SUBMIT</button>
        </form>
      </header>
    </div>
  );
}

export default App;

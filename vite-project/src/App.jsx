import { useState, useEffect, useRef, useMemo } from 'react'
import './App.css'

function App() {
  const [count, setcount] = useState(0);
  const [count1, setcount1] = useState(0);
  function increase(){
    setcount(count + 1);
  }
  function change1(num){
   console.log("calculation done");
   return (num * num)
  }
 const result = change1(count);
  return (
    
      <div>
      hello {`${count} - ${count1}`}
      <input onChange={(e)=>{
          setcount(e.target.value)
      }
      }/>
      <button onClick={increase}>increase</button>
      <button onClick={change1}> cube</button>
      </div>
  
      
  
  )
}

export default App

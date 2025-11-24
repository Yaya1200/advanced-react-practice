import { useState, useEffect, useRef, useMemo } from 'react'
import './App.css'

function App() {
  const [count, setcount] = useState(0);
  const [count1, setcount1] = useState(0);
  function increase(){
    setcount1(count1 + 1);
  }
  function change1(num){
   console.log("calculation done");
   return (num * num)
  }
 const result = useMemo(()=>{
return change1(count)
 }, [count]) ;
  return (
    
      <div>
      hello {`${result} - ${count1}`}
      <input onChange={(e)=>{
          setcount(e.target.value)
      }
      }/>
      <button onClick={increase}>increase</button>
      </div>
  
      
  
  )
}

export default App

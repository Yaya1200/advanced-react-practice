import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [values, setvalues] = useState({title: "", content: ""})
   function increase(){
      setCount(count +1)
     }
     function changeinputs(e){
       const inputname = e.target.name;
       const inputvalue = e.target.value;
       setvalues((prev)=>{(
        ...prev, [inputname] = inputvalue
       )})
     }

  return (
    
      <div>
      hello     {`${count}`}
      <button onClick={increase}>increases</button>
      <input  onChange={} name='title' placeholder='please enter the value'/>
      <input onChange={} name='content' placeholder="please enter the content"/>
      </div>
  
      
  
  )
}

export default App

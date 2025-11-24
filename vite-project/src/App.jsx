import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [values, setvalues] = useState({title: "", content: ""})
   function increase(){
      setCount(count +1)
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

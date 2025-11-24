import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [values, setvalues] = useState({title: "", content: ""})
  const [value1, setvalue1] = useState()
   function increase(){
      setCount(count +1)
     }
     function changeinputs(e){
       const inputname = e.target.name;
       const inputvalue = e.target.value;
       setvalues((prev)=>{
        return ({
        ...prev, 
        [inputname]: inputvalue
     })})
     }
     function output(){
      return setvalue1(values)
     }

  return (
    
      <div>
      hello     {`${count}`}
      <button onClick={increase}>increases</button>
      <input  onChange={changeinputs} name='title' placeholder='please enter the value'/>
      <input onChange={changeinputs} name='content' placeholder="please enter the content"/>
      <button onClick={output}>output</button>
      <text> {`${value1.title, value1.content}`}</text>
      </div>
  
      
  
  )
}

export default App

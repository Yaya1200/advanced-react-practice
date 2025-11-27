import React from "react";
import { useState, useMemo } from "react";
function Home(){
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
    
      <div style={{border : '1px, solid, black', width: '500px', height: '100px'}}>
      hello {`${result} - ${count1}`}
      <input onChange={(e)=>{
          setcount(e.target.value)
      }
      }/>
      <button onClick={increase}>increase</button>
      <button> dark mode</button>
      </div>
  
      
  
  )

}
export default Home
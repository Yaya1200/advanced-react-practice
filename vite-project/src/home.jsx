import React from "react";
import { useState, useMemo,useContext } from "react";
import { ThemeContext } from "./contextTheme";
function Home(){
  const [count, setcount] = useState(0);
  const [count1, setcount1] = useState(0);
  const {theme, toggleTheme} = useContext(ThemeContext);
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
    
      <div style={{border : '1px, solid, black', width: '500px', height: '100px', backgroundColor : theme == 'light' ? 'white' : 'black',
        color: theme == 'light' ? 'black' : 'white'
      }}>
      hello {`${result} - ${count1}`}
      <input onChange={(e)=>{
          setcount(e.target.value)
      }
      }/>
      <button onClick={increase}>increase</button>
      <button onClick={toggleTheme}>{theme == 'light' ? 'DarkMode': 'LightMode'}</button>
      </div>
  
      
  
  )

}
export default Home
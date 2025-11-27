import React, { createContext, useState } from "react";

export const ThemeContext = createContext();
export function ThemeProvider({children}){
  const [theme, settheme] = useState('light');
  function toggleTheme(){
    settheme((prev)=> prev == 'light' ? 'dark' : 'light');
  }
  return(
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  )

}
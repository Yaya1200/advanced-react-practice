import { ThemeProvider } from './contextTheme'
import './App.css'
import Home from './home'

function App() {
  return(
    <>
    <ThemeProvider>
    <Home/>
    </ThemeProvider>
    </>
  )
}

export default App

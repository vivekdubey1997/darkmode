import React ,{useState} from 'react'
import './App.css';
import Navbar from "./components/Navbar"
import About from './components/About'
import TextArea from "./components/TextArea"

function App() {

  const [mode, setMode] = useState(`light`)

  const removeClass=()=>{
    document.body.classList.remove(`bg-danger`)
    document.body.classList.remove(`bg-info`)
    document.body.classList.remove(`bg-success`)
    document.body.classList.remove(`bg-warning`)
    document.body.classList.remove(`bg-light`)
    document.body.classList.remove(`bg-dark`)
  }
  const toggleMode=()=>{
    removeClass()
   if(mode===`light`){
    setMode(`dark`)
    document.body.style.backgroundColor = `black`
   }
   else{
    setMode(`light`)
    document.body.style.backgroundColor = `white`
   }
  }
  const changeMode=(cls)=>{
    // console.log(cls)
    removeClass()
    document.body.classList.add(`bg-`+cls)
   }

  return (
    <div>
     <Navbar name = "learn2Grow" mode={mode} toggleMode={toggleMode} changeMode={changeMode}/>
     <TextArea mode = {mode}/>
     <About mode={mode}/>
     </div>
  )

}

export default App;

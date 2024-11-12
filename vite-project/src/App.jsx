
import './App.css'

import Title from './Title.jsx'
import MsgBox from './MsgBox.jsx'

function App() {
  
  return(
  <div>
    <MsgBox username="Abdullah" textcolor={"violet"}/>
    <MsgBox username="Ahmad" textcolor={"violet"}/>
    <Title title="Internet" para="Internet is very important nowAdays."  eprice={3400}/>
    <Title title="Software" para="Software is a very essential part of Internet." eprice={2000}/>
   
  </div> )
    
}

export default App

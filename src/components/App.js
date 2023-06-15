
import React, {useState} from "react";
import './../styles/App.css';

const App = () => {
  
  let [name, changeName] = useState("")
  function changeHandle(event){
      name = event.target.value
      changeName(name)
  }
  
  return (
    <div>
        {/* Do not remove the main div */}
        <div>Enter your name:</div>
        <input type="text" onChange={changeHandle}></input>
        <div>Hello {name}!</div>
    </div>
  )
}

export default App

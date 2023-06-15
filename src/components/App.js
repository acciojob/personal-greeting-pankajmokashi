
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
        <p>Enter your name:</p>
        <input type="text" onChange={changeHandle}></input>
        <p>Hello {name}!</p>
    </div>
  )
}

export default App

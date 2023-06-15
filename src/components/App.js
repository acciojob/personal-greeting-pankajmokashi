
import React, {useState} from "react";
import './../styles/App.css';

const App = () => {
  
  let [name, changeName] = useState("")
  function changeHandle(event){
      name = event.target.value
      changeName("Hello " + name + "!")
  }
  
  return (
    <div>
        {/* Do not remove the main div */}
        <div>Enter your name:</div>
        <input type="text" onChange={changeHandle}></input>
        <p>{name}</p>
    </div>
  )
}

export default App

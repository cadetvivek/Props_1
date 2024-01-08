import React,{Component} from "react"
import Greet from "./components/Greet"
class App extends Component{
  render(){
    return(
      <div className="App">
        <Greet name="Hi"/>
        <Greet name="Developer"/>
        <Greet name="vivek"/>
        <Greet name="Kushwah"/>
        <Greet name="Welcome"/>
        <Greet name="To"/>
        <Greet name="My"/>
        <Greet name="Props"/>
        <Greet name="Assignment"/>
        
      </div>
    )
  }
}



export default App  
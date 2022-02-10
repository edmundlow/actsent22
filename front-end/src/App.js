import logo from './logo.svg';
import './App.css';
import { useEffect, useState} from 'react';


const RequestButton = (props) => {
  return <button onClick={props.onClick}> Press me {props.message}</button>
} 

/*const WelcomeMessage = (message) => {
  //var message = "";
  return <div>{message}</div>
}*/

function App()  {

  const [message, setMessage] = useState("no message");

  //useEffect(() => {onClick()}, []);


  async function onClick(){
    console.log("the button has been clicked woooo!")
    const res = await fetch('http://localhost:3001')
    const data = await res.text()
    console.log(data)
    setMessage(data);
    //(data);
   // return data
   
  }
  return (
    <div>
    <RequestButton onClick={onClick}>  </RequestButton>
    <p>{message}</p>
    </div>)
  
}





export default App;


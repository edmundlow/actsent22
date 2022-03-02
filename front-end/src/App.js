import * as React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import ListOfVenues from'./components/listofvenues/ListOfVenues'
import SingleVenuePage from './pages/SingleVenuePage';
import SplashPage from './pages/splashpage'

import { useEffect, useState} from 'react'
import {
  BrowserRouter ,
  Switch,
  Route,
  NavLink,
  useParams,
  useLocation,
  useHistory,
  Link
} from "react-router-dom";

const Routes = () => (

  <Switch>
    <Route path="/mybooking">
      <h1>Booking</h1>
    </Route>
    <Route exact path= '/venues'>
    <ListOfVenues />
    </Route>
    <Route exact path={`/venues/:id`}>
    <SingleVenuePage />
    </Route>
    <Route path="/">
    <SplashPage />
    </Route>
  </Switch>

);



const NavBar = () => {
  // For illustration
  const { pathname } = useLocation();

  return (
    <>
      <label>{pathname}</label>
      <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/"><b> ActSent </b>| Part of GigStr</a>
        <NavLink class="navbar-brand" to="/venues">venues</NavLink>
        <NavLink class="navbar-brand" to="/mybooking">Events</NavLink>
      </div>
      </nav>
    </>
  );
};


const RequestButton = (props) => {
  return <button onClick={props.onClick}> Press me {props.message}</button>
} 

/*const WelcomeMessage = (message) => {
  //var message = "";
  return <div>{message}</div>
}*/

function App()  {

  //const [message, setMessage] = useState("no message");
//
  ////useEffect(() => {onClick()}, []);
//
//
  //async function onClick(){
  //  console.log("the button has been clicked woooo!")
  //  // const res = await fetch('https://kdm665d8y1.execute-api.eu-west-2.amazonaws.com/production/')
  //  const res = await fetch('http://localhost:3002/venue')
  //  const data = await res.text()
  //  console.log(data)
  //  //setMessage(data);
  //  //(data);
  // // return data
  // 
  //}

  return (
    <>
    <BrowserRouter>
      <NavBar />
      <Routes />
    </BrowserRouter><div>
        
      </div>
      </>
      )
  
}





export default App;


import React from "react";
import './App.css';
import { BrowserRouter as Router,Link,Redirect,Switch} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Login from "./components/LoginUser";
// import PostForm from "./components/PostForm";
import Home from './components/Home.js'
import SignUp from "./components/SignUp";
// import { NavLink } from "react-router-dom";

class App extends React.Component {
    
 render(){
  return(
    <Router>
      <div>
        <ul>
          <li>
            <Link className="link" to="/"> Home </Link>  
          </li>          
          <li>
            <Link className="link" to="/signup"> Sign Up </Link>
          </li>
          <li>
            <Link className="link" to="/login"> Login </Link>
          </li>
         
        </ul>

        

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          
        </Switch>
      </div>
    </Router>
   
  );
 }
}

export default App;

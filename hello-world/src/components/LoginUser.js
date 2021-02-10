import React from 'react';
import './style/form.css';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';


class Login extends React.Component{
    
  constructor(props){
      super(props)
      this.state={
        email:'',
        password:'',
        loggedIn: false
      }
  }

 handleChange = (event) => {
    //  const {name,value} = event.target
     this.setState({[event.target.name]: event.target.value})
 }
 
 handleSubmit = (event) => {
    event.preventDefault()

    axios.post('http://dvcinh6090588:8080/authenticate',this.state)   //http://dvcinh6090588:8080/authenticate  //https://jsonplaceholder.typicode.com/posts
    .then(response => {
        console.log(response);
        this.setState({loggedIn: true})
        localStorage.setItem('token',response.data.jwt); //saving token to localstorage
    })
    .catch(error => {
        console.log(error)
    })
 }

    render(){
        if(this.state.loggedIn){           //if user login is successful , redirect to home page
            return <Redirect to={'/'} />;
        }
        const {email,password} = this.state
        return (
            <div className='div-form'> 
            <h2>Login</h2>
                <form onSubmit={this.handleSubmit}>
                   <div> 
                    <input type='email' name='email' placeholder='Username' value={email} required onChange={this.handleChange}/>
                   </div>

                   <div>
                    <input type='password' name='password' placeholder='Password' value={password} required onChange={this.handleChange}/>
                   </div>

                   <div>
                       <button type='submit'>Login</button>
                   </div>

                   {/* <div>
                       <button type='submit'>Forgot Password?</button>
                   </div> */}
                  <p>
                      <Link className='redirect-link' to={'/forgot'}> Forgot Password ?</Link>
                  </p>
                </form>
            </div>
        )
    }
}

export default Login
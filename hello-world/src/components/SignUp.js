import React from 'react';
import './style/form.css';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { Link} from 'react-router-dom';

class SignUp extends React.Component{
    
  constructor(props){
      super(props)
      this.state={
        fName:'',
        lName:'',
        userName:'',
        email:'',
        password:'',
        confirmPassword:'',
        isSignedUp: false
      }
  }

 handleChange = (event) => {
    //  const {name,value} = event.target
     this.setState({[event.target.name]: event.target.value})
 }
 
 handleSubmit = (event) => {
    event.preventDefault()
    // console.log(this.state)
    const { password, confirmPassword } = this.state;
    
    if (password !== confirmPassword) {     //confirm password validation
        alert("Passwords don't match");
    } 
    
    else 
    {
        // var data={
        //     fName:this.fName,
        //     lName:this.lName,
        //     userName:this.userName,
        //     email:this.email,
        //     password:this.password  
        // }
    //POST Request
    axios.post('http://dvcinh6090588:8080/signup',this.state) //http://dvcinh6090588:8080/signup     
    .then(response => {
        // console.log(response);
        this.setState({isSignedUp:true})
    })
    .catch(error => {
        console.log(error)
    })
    }

 }

    render(){
         if(this.state.isSignedUp){           //if user signup is successful , redirect to login page
            return <Redirect to={'/login'} />;
        }
        const {fName,lName,userName,email,password,confirmPassword} = this.state
        return (
            
            <div className='div-form'> 
            <h2>Create Account </h2>
                <form onSubmit={this.handleSubmit}>
                   <div> 
                    <input type='text' name='fName' placeholder='First Name' value={fName} required onChange={this.handleChange}/>
                   </div>

                   <div>
                    <input type='text' name='lName' placeholder='Last Name' value={lName} required onChange={this.handleChange}/>
                   </div>

                   <div>
                    <input type='text' name='userName' placeholder='Username' value={userName} required onChange={this.handleChange}/>
                   </div>

                   <div>
                    <input type='email' name='email' placeholder='Email' value={email} required onChange={this.handleChange}/>
                   </div>

                   <div>
                    <input type='password' name='password' placeholder='Password' value={password} required onChange={this.handleChange}/>
                   </div>

                   <div>
                    <input type='password' name='confirmPassword' placeholder='Confirm Password' value={confirmPassword} required onChange={this.handleChange}/>
                   </div>

                   <div>
                       <button type='submit' >Sign up</button>
                   </div>
                   
                  
                </form>
                <p>
                      <Link className='redirect-link' to={'/login'}> Already a user? Sign in here  </Link>
                </p>
            </div>
        )
    }
}

export default SignUp
import React,{ Component } from 'react';

class Forgot extends Component{
    constructor(props){
        super(props)
        this.state={
          email:''
        }
    }
  
    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault();
    }

    render(){
        const {email} = this.state
        return (
            <div className='div-form'>
                 <h2>Forgot Password</h2>
                <form onSubmit={this.handleSubmit}>
                   <div> 
                    <input type='email' name='email' placeholder='Enter Email id' value={email} required onChange={this.handleChange}/>
                   </div>

                   <div>
                       <button type='submit'>Submit</button>
                   </div>
                </form>
            </div>
        )
    }
}

export default Forgot;
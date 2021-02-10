import axios from 'axios';
import React,{ Component } from 'react';


class Home extends Component{
    constructor(props)
    {
        super(props)
        this.state={
            user: false
        }
    }
    componentDidMount(){
        
        //headers for authentication
        // const config = {
        //     headers:{
        //         'Authorization': 'Bearer ' + localStorage.getItem('token')
        //     }
        // }
        const token = localStorage.getItem('token');
        axios.get('http://dvcinh6090588:8080/helloTest',{ 
            headers: {
                    'Authorization' : `Bearer ${token}`,
                    'Access-Control-Allow-Origin': '*'
                    }
         })           
        .then(
            res => {
                console.log(res);
                this.setState({     
                    user: true       
                });
            }
        )  
        .catch(
            error => {
                console.log(error);
            } 
        )
    }

    render(){
        if(this.state.user) //if a user is logged in ..{this.state.user.fName} {this.state.user.lName}
        {
            return (
                <div>               
                    <h2>Welcome</h2>
                </div>                                             
            )
        }
        else{
        return (
            <div>
                <h2>You need to login first</h2>
            </div>
        )
        } 
    }
}

export default Home
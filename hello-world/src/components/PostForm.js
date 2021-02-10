import React from 'react';
import axios from 'axios';
// import PostList from './PostList';

class PostForm extends React.Component{
    
  constructor(props){
      super(props)
      this.state={
        userId:'',
        title:'',
        body:''
      }
  }

 handleChange = (event) => {
    //  const {name,value} = event.target
     this.setState({[event.target.name]: event.target.value})
 }
 
 handleSubmit = (event) => {
    event.preventDefault()

    axios.post('https://jsonplaceholder.typicode.com/posts',this.state)
    .then(response => {
        console.log(response);
    })
    .catch(error => {
        console.log(error)
    })
 }

    render(){
        const {userId,title,body} = this.state
        return (
            <div> 
                <form onSubmit={this.handleSubmit}>
                   <div> 
                    <input type='text' name='userId' placeholder='User Id' value={userId} onChange={this.handleChange}/>
                   </div>

                   <div>
                    <input type='text' name='title' placeholder='Title' value={title} onChange={this.handleChange}/>
                   </div>

                   <div>
                    <input type='text' name='body' placeholder='Body' value={body} onChange={this.handleChange}/>
                   </div>


                   <div>
                       <button type='submit' >Submit</button>
                   </div>
                  
                </form>
            </div>
        )
    }
}

export default PostForm
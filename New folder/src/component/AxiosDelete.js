import React from 'react';
import axios from 'axios'; 

export default class AxiosDelete extends React.Component{
   state ={
       id:0,
   }

   handleChange =event=>{
       this.setState({id: event.target.value});
   }

   handleSubmit = event =>{
       event.preventDefault();

     axios.delete(`https://jsonplaceholder.typicode.com/users/${this.state.id}`)
     .then(res=>{
            console.log(res);
            console.log(res.data);
     });
};
   
    render(){
        return(
            <form>
                <label>
                    person id:
                    <input type = "number" name ="id" onChange={this.handleChange}></input> 
                </label>
                <button type="submit">Delete</button>
            </form>
        )
    }
};

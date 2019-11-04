import React from 'react';
import axios from 'axios';

class AxiosInput extends React.Component{
   state = {
       name:'',   
    };


    handlechange= event =>{
        this.setState({name:event.target.value});
    };


    handlesubmit = event=>{
        event.preventDefault();

        const user = {
            name:this.state.name,
        };
      
        axios.post(`https://jsonplaceholder.typicode.com/users`,{user})
        .then(res=>{
            console.log(res);
            console.log(res.data);
        })
    }
   
    render(){
        return(
            <form onSubmit={this.handlesubmit}>
                <label>
                    person name:<input type="text" name="name" onChange={this.handlechange}></input>
                </label>
                <button type = "submit">ADD</button>
            </form>
        )
    }
}
export default AxiosInput;
import React from 'react';
import axios from 'axios';

class Search extends React.Component{
      constructor(){
          super()
                     
          this.state={employees:[]}
          this.onSubmit = this.onSubmit.bind(this);
        }

    


        onSubmit(event){
            event.preventDefault();
            var query = this.input.value;
            console.log(query);
            this.componentDidMount(query);
        }

        componentDidMount(query){
            var api = 'https://jsonplaceholder.typicode.com/get/1/comments'
            axios.get(api+query)
            .then(response=>this.setState({
                employees:response.data.results 
            }))
        }

    render(){
       const{employees} = this.state;
       var employeesList=employees.map((emp)=>
       <div className='col-4 emp'>
           <p className='overview'>{emp.overview}</p>
           <h3 className='text-center employeetittle'>{emp.overview}</h3>
       </div>
       )
        return(
             <div className="App">
                 <div className="jumbotron">
                     <div className="container">
                         <div className="row">
                             <h2 className="col-12 text-center">Search for an employee</h2>
                             <form onSubmit={this.onSubmit} className="col-12">
                                 <input className="col-12 form-control" placeholder="search for an employees..."
                                     ref={input=>this.input=input}>
                                 </input>
                             </form>
                         </div>
                     </div>
                 </div>
             </div>
        )
    }
}
export default Search;
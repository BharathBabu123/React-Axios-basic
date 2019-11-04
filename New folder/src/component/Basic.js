import React, { Component } from 'react'

const a=10;
let b='40';
function add(){
    // a=15;  here we cant over ride a value because it is constant      
    b = 10;
    return a + b;
}

class Basic extends Component {
    render() {
        return (
            <div>
              {"Result::"+ add()}               
            </div>
        )
    }
}
export default Basic;

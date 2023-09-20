import React, { Component } from 'react'

class Demo extends Component {
    constructor(props) {
        super(props) 
        this.state = {
         isLoggedIn:true
        }
    }
    render() {
        if(this.state.isLoggedIn){
            return(
                <button>Logout</button>   
                    )   
        }else{
            return(
                <button>Login</button>
                    )
        }
    }          
}            
    export default Demo

//  import React, { Component } from 'react'
 
//  export class Demo extends Component {
//    render() {
//      return (
//        <div>Demo</div>
//      )
//    }
//  }
 
//  export default Demo   
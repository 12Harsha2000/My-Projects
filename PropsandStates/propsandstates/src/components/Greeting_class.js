import React from "react";

class Greeting_class extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                {this.props.age}
            </div>
        )
    }
}
export default Greeting_class

// state = condition

//fuctional component- representational , stateles
//class component - state
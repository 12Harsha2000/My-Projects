import React from "react";

export const AppContext = React.createContext();

class AppContextProvider extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        name:"I'm from Context API"
      };
    }
    render(){
      return 
       <AppContext.Provider value={this.state.name}>
         {this.props.children}
       </AppContext.Provider>;   
    }
}

export default AppContextProvider;

import React from "react";
import { AppContext } from "../context/AppContextProvider";


class container extends React.Component {
   render() {
    return <div>this.context</div>;
   } 
}
Container.contextType = AppContext;

export default Container;
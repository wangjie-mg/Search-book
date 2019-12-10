import React from "react";
import "./Totop.css"

class Totop extends React.Component{
    
    render (){
        return(
                <div className="totop" style={{display:this.props.isn?"block":"none"}}></div>
        );
    }
}
export default Totop;
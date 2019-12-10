import React from "react";
import "./Nav.css";

class Nav extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            listdata:['哲学','理学','文学','历史学','力学','逻辑学']
        };
    }
    render(){
        const Listitems = this.state.listdata.map((item) =>   
            <li key={item.toString()}>{item}</li>
        );
        return(
            <div className="nav">
                <div className="navcontent">
                    <ul>
                        {Listitems}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Nav
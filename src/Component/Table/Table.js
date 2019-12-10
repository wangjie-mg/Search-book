import React from "react"
import "./Table.css"

class Table extends React.Component{

    render () {
        const Tableitem = this.props.tableaddress.map((item,index) => 
            <tr key={index}>
                <td>{index+1}</td>
                <td>{this.props.tablebarcode[index]}</td>
                <td>{item}</td>
            </tr>
        )
        let heightstyle={};
        if(this.props.tableaddress.length < 4){
             heightstyle={
                height : this.props.tableaddress.length * 11 + 9 +"vh"
            }
        }else{
             heightstyle={
                height : 45+"vh",
            }
        }
        return(
            <div>
                <table style={heightstyle}>
                    <thead>        
                        <tr>
                        <th><span>序号</span></th>
                        <th><span>索书号</span></th>
                        <th><span>馆藏部门</span></th>
                        </tr>
                    </thead>
                    <tbody>
                        {Tableitem}
                    </tbody>
                </table>
            </div>
        );
    }
}
export default Table
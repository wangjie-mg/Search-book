import React from 'react';
import "./Details.css";
import BookShow from '../BookShow/BookShow';

class Details extends React.Component{
    render(){
        console.log(this.props.data);
        return (
            <div>
                <BookShow data={this.props.data}/>
            </div>
        );

    }
}
export default Details
import React from 'react';
import './page2.css';
import Details from '../Component/Details/Details';
import Header from '../Component/Header/Header';
class Page2 extends React.Component{

    render(){
        console.log(this.props.location.state)
        return(
            <div>
                <Header />
                <Details data={this.props.location.state.new_book}/>
            </div>
        );
    }
}

export default Page2
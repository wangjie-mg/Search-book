import React from 'react';
import './page1.css';
import Header from '../Component/Header/Header';
import BookList from '../Component/BookList/BookList';

class Page1 extends React.Component{
    
    render() {
        return(
            <div>
                <Header />
                <BookList bookdata={this.props.location.state}/>
                
            </div>
        );
    }
}

export default Page1
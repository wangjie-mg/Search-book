import React from 'react';
import './home.css';
import SearchInput from "../Component/SearchInput/SearchInput";
import Header from "../Component/Header/Header" ;
import ListShow from '../Component/ListShow/ListShow';
import Nav from '../Component/Nav/Nav';

class SearchBox extends React.Component{
  constructor(props){
    super(props);

    this.handleSearchTextInput = this.handleSearchTextInput.bind(this);
    this.handleSearchTextOutput = this.handleSearchTextOutput.bind(this);
    
    this.state = {
      searchText : '',
      outList : []
    };    
  }
  handleSearchTextInput (searchText){
    this.setState({
      searchText: searchText
    });
  }
  handleSearchTextOutput (outList){
    this.setState({
      outList : outList
    });
  }
  render(){
    return(
    <div>
      <Header />
      <div className="box">
        <SearchInput 
          searchText={this.state.searchText}
          onsearchTextInput = {this.handleSearchTextInput}  
          onsearchTextOnput = {this.handleSearchTextOutput}
        />
      </div>
      <Nav />
      <ListShow />
    </div>
    );
  }
} 


export default SearchBox;
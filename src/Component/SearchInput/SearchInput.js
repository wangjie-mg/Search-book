import React from 'react';
import './SearchInput.css';
import getRequest from '../../Function'
import { withRouter } from 'react-router-dom';

class SearchInput extends React.Component{
    constructor(props){
      super(props);
      this.handleSearchTextInputClick = this.handleSearchTextInputClick.bind(this);
      this.handleSearchTextInputChange = this.handleSearchTextInputChange.bind(this);
      this.handleEnterKey = this.handleEnterKey.bind(this);
      this.searchbook = this.searchbook.bind(this);
      this.state={
        redirect : false ,
        tipsContent : "",
        tips : false ,
      };
    }
    handleSearchTextInputChange(e){
      this.props.onsearchTextInput(e.target.value);//参数可能有问题
    }
    handleEnterKey(e){
      if(e.nativeEvent.keyCode === 13) {
        this.handleSearchTextInputClick();
      }
    }
    searchbook(res){
      if(!res.data.isEmpty){
        const path = {
          pathname : '/Page1',
          state : {
              data:res.data,
              text:this.props.searchText
          }
        };
        this.props.history.push(path);
      }else{
          this.setState({tips: true,tipsContent:"没有搜索到内容"});
      }
    }
    handleSearchTextInputClick(){
    if(this.props.searchText){
      const url = {
        method:'post',
        url:'http://192.168.3.41:8080/Library/seekServlet',
        params:{
          name : this.props.searchText,
          start : 0, 
        }
      }
      // const  url = "https://www.tianqiapi.com/api/?appid=79814655&appsecret=t5irUdpl&version=v1&city=武汉 ";
      getRequest(url,this.searchbook);
    }else{
          this.setState({tips:true,tipsContent:"请输入内容"});
        }
    }
    render(){
      const tipstyle = this.state.tips ? "tip tip-before" : "tip";
      return(
        <div className="input">
          <input 
            className="text"
            type = "text"
            placeholder = "请输入书名"
            value = {this.props.searchText}
            onChange = {this.handleSearchTextInputChange}
            onKeyPress={this.handleEnterKey}
          />
          <input 
            className="submit"
            type="submit"
            value=" "
            onClick={this.handleSearchTextInputClick}
          />
          <p className={tipstyle}>{this.state.tipsContent}</p>
      </div>
      );
    }
  }
  export default withRouter(SearchInput)
import React from 'react';
import './BookList.css';
import getRequest from '../../Function'
import Totop from '../Totop/Totop';
import { withRouter } from 'react-router-dom';
class BookList extends React.Component{
    constructor(props){
        super(props);
        this.bookadd = this.bookadd.bind(this);
        this.tipsp = this.tipsp.bind(this);
        this.getHeight = this.getHeight.bind(this);
        this.bookdata = this.props.location.state.data.books;
        this.bookname = this.props.location.state.text;
        this.isn =1;
        this.bookstart = 10;
    }
    componentDidMount(){
        document.addEventListener("scroll", this.getHeight);
    }
    componentWillUnmount(){
        document.removeEventListener("scroll",this.getHeight);
    }
    bookadd(res){
        res.data.books.map(
            item => this.bookdata.push(item)
        )
        this.bookstart = this.bookstart + 10;
        this.isn = 1;
        this.setState(this.bookdata);
    }
    getHeight(){
        const height = window.innerHeight;
        const scrtop = document.documentElement.scrollTop ;
        const domHeight = document.body.scrollHeight;
        if(height+scrtop > domHeight - 100 && this.isn === 1){
            const url= {
                method:'get',
                url:'http://192.168.3.41:8080/Library/seekServlet',
                params:{
                    name : this.bookname,
                    start : this.bookstart,
                }
            }
            this.isn = 0;
            getRequest(url,this.bookadd);
        }
    }
    tipsp(res){
        console.log(res);
        const path = {
            pathname : '/Page2',
            state : res.data,
        }
        this.props.history.push(path);
    }
    handleClick(item){
        console.log(item.id);
        const url= {
            method:'get',
            url:'http://192.168.3.41:8080/Library/seekServlet',
            params:{
                id:item.id,
            }
        }
        getRequest(url,this.tipsp)
    }

    render(){
        const ListItem = this.bookdata.map((item) => 
            <li key={item.name}>
                <div className="check">
                    <p className="p-name">{item.name}</p>
                    <p>出版社:<span>{item.publisher}</span></p>
                    <p>出版日期:<span>{item.date}</span></p>
                    <p>索引号:<span>{item.search_number}</span></p>
                    <p>作者:<span>{item.author}</span></p>
                    <p>馆藏数:<span>{item.num}</span></p>
                    <input 
                        className = "about"
                        type = "submit"
                        value = "详情"
                        onClick = {this.handleClick.bind(this,item)}
                    >
                    </input>
                </div>
            </li>    
        )
        return(
            <div className="booklist">
                <Totop />
                <div className="booklist-content">
                    <div className="booklist-div">
                        <ul>
                            {ListItem}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}
export default withRouter(BookList) 

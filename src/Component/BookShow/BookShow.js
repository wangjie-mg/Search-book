import React from 'react';
import './BookShow.css';
import url from "./1.png";
import Table from '../Table/Table';
class BookShow extends React.Component{
    // constructor(props){
    //     super(props)
    //     this.text=
    //         {
    //             "name":"Java EE轻量级框架开发实用教程 ",
    //             "author":"谷志峰,李同伟,",
    //             "press":"电子工业出版社",
    //             "isn":"9787121361418",
    //             "id":"TP312JA",
    //             "content":"本书通过理论与实=际相结合的方式详细讲解了Spring MVC、Hibernate 、Spring等轻量级框架技术以及框架整合开发知识。以Eclipse为开发平台，结合Tomcat服务器、Oracle数据库系统进行应用讲解。本书编写以在线书城项目为案例程序，在知识介绍中结合项目案例进行说明，真正做到项目驱动，本书的主要内容包括： JavaEE框架概述、在线书城项目介绍、hibernate框架开发初步、hibernate 映射关系、hibernate hql查询、spring MVC框架开发初步、spring MVC框架开发进阶、EL表达式和JSTL标签、spring IOC、spring AOP、框架整合。",
    //             "table":['通信计算机库（长安校区）','通信计算机库（长安校区）','通信计算机库（长安校区）','通信计算机库（长安校区）','通信计算机库（长安校区）','通信计算机库（长安校区）','通信计算机库（长安校区）','通信计算机库（长安校区）','通信计算机库（长安校区）']
    //         }
    // }
    render () {
        // let heightstyle = {
        //     height: this.props.data.sesc ? 24+"vh" : null,
        // }
        const spanlist = this.props.data.subject.map((item,index,arr)=>{
            if(index ===  arr.length-1){
                return <span key={index}>{item}</span>
            }
            else{
                return <span key={index}>{item}，</span>
            }
        });
        // let heightstyle = this.props.data.sesc ? "height : 24vh" :"height:10vh"
       return(     
        <div className = "main">
            <div className = "img">
                <img src={url} alt="图片" width="272px"></img>
            </div>
            <div className = "main-content">
                <p className="bookname">{this.props.data.name}</p>
                <p>作者：<span>{this.props.data.author}</span></p>
                <p>主题词：{spanlist}</p>
                <p>出版社：<span>{this.props.data.publisher}</span></p>
                <p>分类号：<span>{this.props.data.classify_number}</span></p>
                <p>出版日期：<span>{this.props.data.date}</span></p>
                <p className="remark" >简介摘要：<span >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{this.props.data.desc}</span></p>
            </div>
                <Table 
                tablebarcode={this.props.data.barcode}
                tableaddress={this.props.data.address}
                 isn={this.props.data.classify_number}
            />
        </div>
       );
    }
}

export default BookShow
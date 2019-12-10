import React from "react";
import "./ListShow.css";

class ListShow extends React.Component{
    constructor (props){
        super(props);
        this.state={
            record : 0,
            stylewidth : 0,
            listdata : ['借阅配行榜','收藏排行榜','书评配行榜'] ,
            pcontent : ['python从入门到精通','网络企业经营术','体验感 : 品牌3.0的营销革命','中央帝国的军事密码','外国特种部队揭秘','大脑帝国','皮肤的心机 : 身体边界的另一面','认识身体 : 探秘人体微宇宙','睡眠解析','陆上行舟']
        };
    }

    componentDidMount(){
        // Axios.post("http://222.24.62.172/opac_two/toprank?type=jieyue").then(res =>{
        //     console.log(res);
        // })
        
        // const {stylewidth} = this.state ;  
        // this.state.stylewidth = document.documentElement.clientWidth < 328 ? "height: 60vh;" : "height: 55vh;";
        this.setState({stylewidth:document.documentElement.clientWidth < 328 ? "height: 60vh;" : "height: 55vh;"});
    }

    handleClick(index){
        console.log(index);
        console.log(this.state.record);
        this.setState({
            record: index
        });
    }
    render () {
        const listitems = this.state.listdata.map((item,index) => 
            <li 
                key = {item.toString()}
                className = {this.state.record === index ? "listitemstyle" : "" }
                onClick = {this.handleClick.bind(this,index)}
            >
                {item}
            </li>
        );
        const pcontent = this.state.pcontent.map((item , index) =>
            <p key={item.toString()}>
                <span>{index+1}.</span>
                {item}
            </p>
        ); 
        return (
            <div className="list" style={ this.stylewidth }>
                <div className="listitem">
                    <ul>
                        {listitems}
                    </ul>
                </div> 
                <div className="listcontent">
                    <div className="content">
                        {pcontent}
                    </div>
                </div>
            </div>
        );
    }
}

export default ListShow
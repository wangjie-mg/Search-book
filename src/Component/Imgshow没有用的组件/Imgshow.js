import React from 'react';
import './Imgshow.css';
import imgurl1 from "./images/top1.jpg";
import imgurl2 from "./images/top2.jpg";
import imgurl3 from "./images/top3.jpg";
import imgurl4 from "./images/top4.jpg";
import imgurl5 from "./images/top5.jpg";
import imgurl6 from "./images/top6.jpg";

class Imgshow extends React.Component{
    constructor(props){
        super(props);
        this.state={
            imgurl: [imgurl1,imgurl2,imgurl3,imgurl4,imgurl5,imgurl6]
        };
        this.tip =  parseInt(Math.random()*6,10);
    }

    render () {
       return(
            <div>
                <img src={this.state.imgurl[this.tip]} alt="图片"></img>               
            </div>
       );
    }
}

export default Imgshow
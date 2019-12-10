import React from 'react';
import "./Header.css";

class Header extends React.Component{
    render(){
        return (
            <div className="header-top">
                <div className="hr hd"></div>
                    <div className="header">
                        <div className="title">
                            <p className="topper">ZYPC</p><p className="name">西邮图书查询</p>
                        </div>
                    </div>
                <div className="hr"></div>
            </div>
        );
    }
}
export default Header;
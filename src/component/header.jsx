import React from 'react';
import ReactDOM from 'react-dom';
import  "../css/reset1.css";
import  "../css/bill.css";
class Header extends React.Component{
    constructor(){
        super();
    }
    //页面渲染
    render(){
        const texts="我的1";
        return (
            <div id="header">
                <div id="header-nav">
                    <h1 texts={texts}></h1>
                </div>
            </div>
        )
    }
}
export default Header;

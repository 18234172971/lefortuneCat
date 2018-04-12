import React from 'react';
import ReactDOM from 'react-dom';
import  "../css/reset1.css";
import  "../css/bill.css";
class Index extends React.Component{
    constructor(){
        super();
    }
    //页面渲染
    render(){
        return (
            <div id="header">
                <div id="header-nav">
                    <h1>我的</h1>
                </div>
            </div>
        )
    }
}
export default Index;

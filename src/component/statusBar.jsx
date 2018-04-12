import React from 'react';
import ReactDOM from 'react-dom';
import  "../../css/reset.css";
import  "../../css/bill.css";
class Bill extends React.Component{
    constructor(){
        super();
    }
    //页面渲染
    render(){
        return (
            <div className="status">
                状态栏
            </div>
        )
    }
}
export default Bill;

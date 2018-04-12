import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,IndexRoute,hashHistory} from 'react-router';
import Header from "../header.jsx";
// import  "../../css/reset.css";
// import  "../../css/bill.css";
// import  "../../css/reset1.css";
class Bill extends React.Component{
    constructor(){
        super();
    }
    //页面渲染
    render(){
        const texts="账单";
        return (
            <div>
                <Header texts={{texts}}/>
                <div>
                    <div>
                        <h6>收入ffffffff</h6>
                        <div>30000.000</div>
                    </div>
                    <div>
                        <h6>支出ffffffffffffffffffffffffffffffffffffffffffffffff</h6>
                        <div>30000.000</div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Bill;

import React from 'react';
import ReactDOM from 'react-dom';
import  "../css/reset1.css";
import  "../css/bill.css";
class Footer extends React.Component{
    constructor(){
        super();
    }
    //页面渲染
    render(){
        return (
            <div id="footer-nav">
                <ul>
                    <li><img src="../../dist/image/r-money.png"/><span>账单</span></li>
                    <li><img src="../../dist/image/b-charts.png"/><span>图表</span></li>
                    <li><img src="../../dist/image/add.png"/></li>
                    <li><img src="../../dist/image/b-fincal.png"/><span>理财</span></li>
                    <li><img src="../../dist/image/b-user.png"/><span>我</span></li>
                </ul>
            </div>
        )
    }
}
export default Footer;
import React,{Component} from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router,Route,Link} from "react-router-dom";
import Header from './header.jsx';
import FIndex from './financial/index.jsx';
import  "../css/reset1.css";
import "../css/banner.css";
class Banner extends Component{
    render(){
        const texts="";
        return(
            <div>
                <div id="header">
                    <div id="header-nav">
                        <Router>
                            <Route>

                            </Route>
                        </Router>
                        <Link to="/finanial/index"><img src="../../dist/image/zhangdanu191.png" alt=""/></Link><a style={{fontSize:"48px"}}>新手理财教程</a><a></a>
                    </div>
                </div>
                <div className="banner">
                    1、理财方面<br/>

                    ——设定了基金定投的计划，停止了两个进

                    入高估区的基金的定投计划，并伺机将这两

                    只基金卖出。同时新选定了两只低估值的两

                    只基金开始了新定投，每周各定投一次，

                    如遇到大幅下跌，则加重买入。<br/>

                    ——着手研究股票相关知识，目前只是看书

                    了解阶段，跟随钱堂社区的课程慢慢深入，

                    等不那么茫然时，就开始动手实战。当然，

                    可以找模拟盘演练。<br/>

                    ——继续52周攒钱计划，目前已经攒到第六

                    周，同步进行为孩子买ipad梦想计划，还有

                    160天左右完成，当做三周岁半的礼物送给

                    大宝。<br/>

                    ——初步尝试可转债。没想到随便一申请就

                    中了一个！估计中签概率还挺高的吧。至少

                    前一段可转债并不稳赢伤了不少人士的心。<br/>

                    ——收入方面，黄金钱包的箱底金释放出来，

                    赚了快六十块钱。其他工资不变，兼职收入

                    两千多，年终奖一共到手六位数，嘿嘿，

                    惊不惊喜意不意外？
                    性能：重绘
                    回流

                    网站


                </div>
            </div>
        )
    }
}
export  default Banner;
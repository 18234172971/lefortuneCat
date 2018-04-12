import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Redirect} from "react-router-dom";
import Bill from "./component/bill/bill.jsx";
import Banner from "./component/banner.jsx";
import FIndex from "./component/financial/index.jsx";

class App extends Component {
    constructor() {
        super();
    }

    render() {
        return (
                <Router>
                    <div>
                        <Route path="/bill/bill" component={Bill}/>
                        <Route path="/compontent/financial/index" component={FIndex}/>
                        <Route path="/" exact component={Banner}/>
                    </div>
                </Router>
        )
    }
}

export default App;
ReactDOM.render(
    (<App>
    </App>), document.getElementById('app')
);

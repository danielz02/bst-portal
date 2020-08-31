import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Users} from "./user";


function App() {
    return (
        <Router>
            <div className="topnav">
                <Link to="/" className="navbar-tab">主页</Link>
                <Link to="/users" className="navbar-tab">用户</Link>
                <Link to="/team" className="navbar-tab">团队</Link>
                <Link to="/meeting" className="navbar-tab">会议</Link>
                <Link to="/interns" className="navbar-tab">实习记录</Link>
                <Link to="/consultation" className="navbar-tab">前期咨询</Link>
            </div>
            <Switch>
                <Route path={"/users"}>
                    <Users/>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;

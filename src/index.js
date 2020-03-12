import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Components/homeComponent';
import Content from './Components/contentComponent';
import {BrowserRouter as Router, NavLink} from "react-router-dom";
import Route from "react-router-dom/Route";

const routing = (
    <Router>
    <div>
    <Route path="/about-us" component={Content} ></Route>
    <Route exact path="/" component={Home} ></Route>

    </div>        
    </Router>

)

ReactDOM.render(routing, document.getElementById('root'));


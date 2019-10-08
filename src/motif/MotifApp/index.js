import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './Views/Home';
import { AppContainer } from './styles';
import Search from './Views/Search';

function MotifApp() {
    return <AppContainer>
        <Router>
            <Switch>
                <Route path="/search" component={Search} />
                <Route path="/" component={Home} />
            </Switch>
        </Router>
    </AppContainer>;
}

export default MotifApp;
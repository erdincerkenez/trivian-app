import React, { useEffect } from 'react';
import { Route, useLocation, withRouter } from 'react-router-dom';
import { Correct } from './pages/Correct';
import { congratulations } from './pages/congratulations';
import { Question } from './pages/Question';
import { Welcome } from './pages/Welcome';
import { Wrong } from './pages/Wrong';

const App = (props) => {

    let location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [location]);

    switch (location.pathname) {
        case '/correct':
            return <Route path="/correct" component={Correct} props={props}/>
        case '/congratulations':
            return <Route path="/congratulations" component={congratulations} props={props}/>
        case '/question':
            return <Route path="/question" component={Question} props={props} />
        case '/wrong': 
            return <Route path="/wrong" component={Wrong} props={props}/>
        default:
            return <Welcome props={props} />;
    }
}

export default withRouter(App);

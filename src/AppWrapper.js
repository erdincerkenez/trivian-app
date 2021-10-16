import React, { useEffect } from 'react';
import { Route, useLocation, withRouter } from 'react-router-dom';
import { Correct } from './pages/Correct';
import { Error } from './pages/Error';
import { Question } from './pages/Question';
import { Welcome } from './pages/Welcome';
import { Wrong } from './pages/Wrong';

const AppWrapper = () => {

    let location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [location]);

    switch (location.pathname) {
        case '/correct':
            return <Route path="/correct" component={Correct} />
        case '/error':
            return <Route path="/error" component={Error} />
        case '/question':
            return <Route path="/question" component={Question} />
        case '/wrong': 
            return <Route path="/wrong" component={Wrong} />
        default:
            return <Welcome />;
    }
}

export default withRouter(AppWrapper);

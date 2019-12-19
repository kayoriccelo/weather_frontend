import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Weather from '../Weather';
import History from '../History';


export default function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Weather} />
                <Route exact path='/history' component={History} />
            </Switch>
        </BrowserRouter>
    );
};

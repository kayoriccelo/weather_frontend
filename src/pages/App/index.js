import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Header, Content, Sidebar, Footer } from '../../components/Layout';
import { StyledMain } from './styled';
import Weather from '../Weather';
import History from '../History';


export default function App() {
    return (
        <BrowserRouter>
            <Header />

            <StyledMain>
                <Sidebar />
            
                <Content>
                    <Switch>
                        <Route exact path='/' component={Weather} />
            
                        <Route exact path='/history' component={History} />
                    </Switch>
                </Content>
            </StyledMain>
           
            <Footer />
        </BrowserRouter>
    );
};

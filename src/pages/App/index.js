import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { updateDimensions } from '../../commons/useful';
import { Header, Content, Sidebar, Footer } from '../../components/Layout';
import { StyledMain } from './styled';
import Weather from '../Weather';
import History from '../History';


export default function App() {
    const [screen, setScreen] = useState({ width: 0 });

    useEffect(() => {
        updateDimensions(setScreen)();

        window.addEventListener('resize', updateDimensions(setScreen));

        return () => window.removeEventListener('resize', updateDimensions(setScreen))
    }, []);


    return (
        <BrowserRouter>
            <Header />

            <StyledMain screen={screen}>
                <Sidebar screen={screen}/>
            
                <Content screen={screen}>
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

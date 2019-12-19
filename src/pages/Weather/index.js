import React from 'react';

import { Header, Content, Sidebar, Footer } from '../../components/Layout';
import { Search } from '../../components';


export default function Weather() {
    return (
        <div>
            <Header />
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <Sidebar />
                <Content>
                    <Search />
                    <div>
                        {/* <Painel />
                        <Chart /> */}
                        Content Weather!!
                    </div>
                </Content>
            </div>
            <Footer />
        </div>
    );
};

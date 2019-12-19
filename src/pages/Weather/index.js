import React from 'react';
import { Header, Content, Sidebar, Footer } from '../../components/Layout';


export default function Weather() {
    return (
        <div>
            <Header />
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <Sidebar />
                <Content>
                    {/* <Search /> */}
                    <div>
                        {/* <Painel />
                        <Chart /> */}
                        Weather!!
                    </div>
                </Content>
            </div>
            <Footer />
        </div>
    );
};

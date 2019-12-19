import React from 'react';
import { Header, Content, Sidebar, Footer } from '../../components/Layout';


export default function HistorySearch() {
    return (
        <div>
        <Header />
        <div style={{ display: 'flex', flexDirection: 'row' }}>
            <Sidebar />
            <Content>
                {/* <Search /> */}
                <div>
                    {/* <List /> */}
                    History Search!!!
                </div>
            </Content>
        </div>
        <Footer />
    </div>
    );
};

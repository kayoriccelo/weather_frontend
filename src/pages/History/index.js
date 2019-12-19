import React from 'react';

import { StyledRoot } from './styled';
import List from './List';


export default function HistorySearch() {
    const data = {
        list: [
            {
                date: '2019-12-18 16:00:00',
                search: 'Fortaleza'
            },
            {
                date: '2019-12-18 12:00:00',
                search: 'Londres'
            }
        ]
    }
    return (
        <StyledRoot>
            <List data={data} />
        </StyledRoot>
    );
};

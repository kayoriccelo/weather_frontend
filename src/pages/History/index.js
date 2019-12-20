import React, { useState, useEffect } from 'react';

import { apiApplication } from '../../services/api';
import { StyledRoot } from './styled';
import List from './List';


export default function HistorySearch() {
    const [data, setData] = useState([]);

    useEffect(() => {
        apiApplication.get('/api/v1/history')
            .then(res => {
                setData(res.data['results']);
            });
    }, []);

    return (
        <StyledRoot>
            <List data={data} />
        </StyledRoot>
    );
};

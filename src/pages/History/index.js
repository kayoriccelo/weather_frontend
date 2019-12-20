import React, { useState, useEffect } from 'react';

import { apiApplication } from '../../services/api';
import { updateDimensions } from '../../commons/useful';
import { Search } from '../../components';
import { StyledRoot } from './styled';
import List from './List';


export default function HistorySearch() {
    const [search, setSearch] = useState('');
    const [data, setData] = useState([]);
    const [screen, setScreen] = useState({ width: 0 });

    useEffect(() => {
        updateDimensions(setScreen)();
        window.addEventListener('resize', updateDimensions(setScreen));

        return () => window.removeEventListener('resize', updateDimensions(setScreen));
    }, []);

    useEffect(() => {
        apiApplication.get('/api/v1/history')
            .then(res => {
                setData(res.data['results']);
            });
    }, []);

    const onSearch = event => {
        setSearch(event.target.value);
    };

    const onClickSearch = () => {
        apiApplication.get(`/api/v1/history/?search=${search}`)
            .then(res => {
                setData(res.data['results']);
            });
    };

    return (
        <StyledRoot>
            <Search
                placeholder="Date or Search"
                search={search}
                onSearch={onSearch}
                onClick={onClickSearch}
            />

            <List
                screen={screen}
                data={data}
            />
        </StyledRoot>
    );
};

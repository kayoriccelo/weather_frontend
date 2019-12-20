import React, { useState, useEffect } from 'react';

import { apiService, apiApplication } from '../../services/api';
import { updateDimensions } from '../../commons/useful';
import { Search } from '../../components';
import { StyledRoot, StyledMain } from './styled';
import List from './List';
import Panel from './Panel';


export default function Weather() {
    const [search, setSearch] = useState('');
    const [data, setData] = useState(null);
    const [screen, setScreen] = useState({ width: 0 });

    useEffect(() => {
        updateDimensions(setScreen)();
        window.addEventListener('resize', updateDimensions(setScreen));

        return () => window.removeEventListener('resize', updateDimensions(setScreen))
    }, []);

    const onSearch = event => {
        setSearch(event.target.value);
    };

    const onClickSearch = () => {
        apiService.get(`/forecast?q=${search}`)
            .then(res => {
                setData(res.data);

                apiApplication.post(`/api/v1/history/`, { search, json: JSON.stringify(res.data) })
            });
    };

    return (
        <StyledRoot>
            <Search
                placeholder="Your city name"
                search={search}
                onSearch={onSearch}
                onClick={onClickSearch}
            />

            <StyledMain screen={screen}>
                <Panel screen={screen} data={data && data['city']} />

                <List screen={screen} data={data && data} />
            </StyledMain>
        </StyledRoot >
    );
};
